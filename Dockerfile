# Stage 1: Build application
FROM node:18-alpine AS builder

WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./
RUN npm ci

# Sao chép source code
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# Stage 2: Chạy với Nginx
FROM nginx:alpine

# Sao chép cấu hình nginx
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/.next /tmp/debug/.next
COPY --from=builder /app/public /tmp/debug/public

# Sao chép các files đã build từ stage trước - phương pháp thay thế
COPY --from=builder --chown=nginx:nginx /app/.next/standalone/. /usr/share/nginx/html/
COPY --from=builder --chown=nginx:nginx /app/.next/static /usr/share/nginx/html/_next/static
COPY --from=builder --chown=nginx:nginx /app/public /usr/share/nginx/html/public

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]