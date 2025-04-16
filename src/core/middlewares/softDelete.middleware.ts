/**
 * Middleware Prisma para garantir soft delete.
 * - Filtra registros com deletedAt != null em queries de leitura.
 * - Transforma operações de delete em update de deletedAt.
 * @param params Parâmetros da query Prisma
 * @param next Função para executar a próxima etapa do middleware
 */
export const softDeleteMiddleware = async (
  params: { model?: string; action: string; args?: Record<string, unknown> },
  next: (params: unknown) => Promise<unknown>
): Promise<unknown> => {
  // Modelos que possuem soft delete
  const modelsWithSoftDelete = ['User', 'ShortUrl'];

  // Aplica apenas para modelos com soft delete
  if (!modelsWithSoftDelete.includes(params.model || '')) {
    return next(params);
  }

  // Intercepta queries de leitura
  if (["findUnique", "findFirst", "findMany"].includes(params.action)) {
    if (!params.args) params.args = {};
    if (!params.args.where || typeof params.args.where !== 'object') params.args.where = {};
    (params.args.where as Record<string, unknown>).deletedAt = null;
  }

  // Intercepta update para garantir que só atualiza registros não deletados
  if (["update", "updateMany"].includes(params.action)) {
    if (!params.args) params.args = {};
    if (!params.args.where || typeof params.args.where !== 'object') params.args.where = {};
    (params.args.where as Record<string, unknown>).deletedAt = null;
  }

  // Intercepta delete e transforma em update de deletedAt
  if (params.action === "delete") {
    params.action = "update";
    params.args = {
      ...params.args,
      data: { deletedAt: new Date() },
    };
  }
  if (params.action === "deleteMany") {
    params.action = "updateMany";
    params.args = {
      ...params.args,
      data: { deletedAt: new Date() },
    };
  }

  return next(params);
}; 