# Giai đoạn xây dựng
FROM node:18-alpine AS builder

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép các file package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependency
RUN npm ci

# Sao chép toàn bộ mã nguồn
COPY . .

# Xây dựng ứng dụng
RUN npm run build

# Giai đoạn sản phẩm
FROM node:18-alpine AS runner

WORKDIR /app

# Thêm người dùng non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Sao chép các file cần thiết từ giai đoạn xây dựng
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Mở cổng ứng dụng
EXPOSE 3000

# Khởi chạy ứng dụng
CMD ["node", "server.js"]