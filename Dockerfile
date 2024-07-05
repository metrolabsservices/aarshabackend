
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
# WORKDIR /app/frontend
# RUN ls

# Copy frontend package.json and package-lock.json files
RUN cp frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# # Copy frontend source code
RUN cp -r frontend/* ./

# # Build frontend
RUN npm run build

# Stage 3: Final image
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy built backend files from backend stage
COPY --from=backend /usr/src/app /usr/src/app

# Copy built frontend files from frontend stage
COPY --from=frontend /app/build /usr/src/app/public

# Install serve to serve the frontend
RUN npm install -g serve

# Expose the ports for backend and frontend
EXPOSE 3000 5000

# Start the backend and serve the frontend
CMD ["sh", "-c", "node build/src/server.js & serve -s public -l 5000"]