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
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Đảm bảo thư mục đích tồn tại
RUN rm -rf /usr/share/nginx/html/*

# Kiểm tra cấu trúc thư mục build
RUN mkdir -p /tmp/debug
COPY --from=0 /app/.next /tmp/debug/.next
COPY --from=0 /app/public /tmp/debug/public

# Sao chép các files đã build từ stage trước - phương pháp thay thế
COPY --from=0 /app/.next/standalone/. /usr/share/nginx/html/
COPY --from=0 /app/.next/static /usr/share/nginx/html/_next/static
COPY --from=0 /app/public /usr/share/nginx/html/public

# Để debug
RUN ls -la /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]