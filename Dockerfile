# Stage 1: Build Backend
FROM node:16-alpine AS backend

# Set working directory
WORKDIR /usr/src/app

# Copy backend package.json and package-lock.json files
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend source code
COPY . .

# Push operation (as per your provided command)
RUN npm run push

# Build backend
RUN npm run build

# Stage 2: Build Frontend
FROM node:14-alpine AS frontend

# Set working directory
WORKDIR /app

# Install git
RUN apk add --no-cache git

# Clone frontend repository
RUN git clone -b dev-prod-frontned https://github.com/metrolabsservices/aarshafrontend.git frontend

# Navigate to frontend directory
WORKDIR /app/frontend

# Copy frontend package.json and package-lock.json files
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy frontend source code
COPY frontend/ .

# Build frontend
RUN npm run build

# Stage 3: Final image
FROM nginx:alpine

# Copy built backend files from backend stage
COPY --from=backend /usr/src/app /usr/src/app

# Copy built frontend files from frontend stage
COPY --from=frontend /app/frontend/build /usr/share/nginx/html

# Expose the port your backend app runs on
EXPOSE 3000

# Start the backend application
CMD ["node", "/usr/src/app/build/src/server.js"]