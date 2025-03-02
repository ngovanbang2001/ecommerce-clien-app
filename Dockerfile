# Sử dụng image node phiên bản LTS làm base image
FROM node:lts-alpine as build

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn
COPY . .

# Build ứng dụng React
RUN npm run build

# Sử dụng image Nginx làm base image
FROM nginx:alpine

# Sao chép file cấu hình Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Sao chép các file build từ stage trước vào thư mục phục vụ của Nginx
COPY --from=build /app/.next /usr/share/nginx/html

# Expose cổng 80
EXPOSE 80

# Khởi chạy Nginx
CMD ["nginx", "-g", "daemon off;"]