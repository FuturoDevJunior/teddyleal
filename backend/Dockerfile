# Etapa 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production=false
COPY . .
RUN npx prisma generate
RUN npm run build

# Etapa 2: Produção
FROM node:20-alpine
WORKDIR /app
# Instala o OpenSSL para garantir compatibilidade com o Prisma
RUN apk add --no-cache openssl
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
ENV NODE_ENV=production
EXPOSE 3333
CMD ["node", "dist/index.js"] 