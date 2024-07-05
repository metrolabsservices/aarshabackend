# Stage 1: Build Backend
FROM node:14 AS backend

# Set working directory
WORKDIR /app

# Enable corepack and install specific yarn version
RUN corepack enable && corepack prepare yarn@1.22.22 --activate

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

# Enable corepack and install specific yarn version
RUN corepack enable && corepack prepare yarn@1.22.22 --activate

# Clone frontend repository
RUN git clone -b dev-prod-frontned https://github.com/metrolabsservices/aarshafrontend.git frontend

# Navigate to frontend directory
WORKDIR /app/frontend

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