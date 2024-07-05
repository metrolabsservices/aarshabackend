# Stage 1: Build Backend
FROM node:14 AS backend

# Set working directory
WORKDIR /app

# Install specific yarn version
RUN npm install -g yarn@1.22.22

# Copy backend package.json and yarn.lock files
COPY package*.json ./

# Install backend dependencies
RUN yarn install

# Copy backend source code
COPY . .

# Build backend
RUN yarn build

# Stage 2: Build Frontend
FROM node:14 AS frontend

# Set working directory
WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Install specific yarn version
RUN npm install -g yarn@1.22.22

# Clone frontend repository
RUN git clone -b dev-prod-frontned https://github.com/metrolabsservices/aarshafrontend.git frontend

# Navigate to frontend directory
WORKDIR /app/frontend

# Copy frontend package.json and yarn.lock files
COPY frontend/package*.json ./

# Install frontend dependencies
RUN yarn install

# Copy frontend source code
COPY frontend/ .

# Build frontend
RUN yarn build

# Stage 3: Final image
FROM node:14

# Set working directory
WORKDIR /app

# Copy built backend files from backend stage
COPY --from=backend /app /app

# Copy built frontend files from frontend stage
COPY --from=frontend /app/frontend/build /app/public

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["node", "build/src/server.js"]