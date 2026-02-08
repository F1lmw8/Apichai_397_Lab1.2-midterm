FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
RUN mkdir -p logs
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD wget --quiet --tries=1 --spider http://localhost:3000/api/demo || exit 1
CMD ["node", "server.js"]
