FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build VitePress
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install sirv-cli globally (better than http-server for SPAs)
RUN npm install -g sirv-cli

# Copy built files from builder
COPY --from=builder /app/.vitepress/dist ./dist

# Expose port
EXPOSE 3000

# Serve the built files with correct MIME types
CMD ["sirv", "dist", "--port", "3000", "--host", "0.0.0.0", "--single"]
