# Сборка статического сайта
FROM node:20-alpine AS builder

WORKDIR /app

# Установка pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./
RUN pnpm install

COPY . .
RUN pnpm build

# Образ для раздачи статики через nginx
FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
