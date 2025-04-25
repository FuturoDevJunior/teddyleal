/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Middleware Prisma para garantir soft delete.
 * - Filtra registros com deletedAt != null em queries de leitura.
 * - Transforma operações de delete em update de deletedAt.
 * @param params Parâmetros da query Prisma
 * @param next Função para executar a próxima etapa do middleware
 */
export const softDeleteMiddleware = async (
  params: any,
  next: (params: any) => Promise<any>
): Promise<any> => {
  const p = params;
  const modelsWithSoftDelete = ['User', 'ShortUrl'];
  if (!modelsWithSoftDelete.includes(p.model || '')) {
    return next(params);
  }
  if (["findUnique", "findFirst", "findMany"].includes(p.action)) {
    if (!p.args) p.args = {};
    if (!p.args.where || typeof p.args.where !== 'object') p.args.where = {};
    (p.args.where as Record<string, unknown>).deletedAt = null;
  }
  if (["update", "updateMany"].includes(p.action)) {
    if (!p.args) p.args = {};
    if (!p.args.where || typeof p.args.where !== 'object') p.args.where = {};
    (p.args.where as Record<string, unknown>).deletedAt = null;
  }
  if (p.action === "delete") {
    p.action = "update";
    p.args = {
      ...p.args,
      data: { deletedAt: new Date() },
    };
  }
  if (p.action === "deleteMany") {
    p.action = "updateMany";
    p.args = {
      ...p.args,
      data: { deletedAt: new Date() },
    };
  }
  return next(p);
}; 