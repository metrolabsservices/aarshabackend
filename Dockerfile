# Stage 1: Build Backend
FROM node:16-alpine AS backend

WORKDIR /app

# Install Yarn globally
RUN npm install -g yarn

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the backend
RUN yarn build

# Stage 2: Build Frontend
FROM node:16-alpine AS frontend

WORKDIR /app

# Install Yarn globally
RUN npm install -g yarn

# Clone the frontend repository
RUN git clone -b dev-prod-frontned https://github.com/metrolabsservices/aarshafrontend.git frontend

WORKDIR /app/frontend

# Copy the package.json and yarn.lock files to the working directory
COPY frontend/package.json frontend/yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY frontend/ ./

# Build the React app
RUN yarn build

# Stage 3: Final image
FROM node:16-alpine

WORKDIR /app

# Copy built backend files from backend stage
COPY --from=backend /app /app

# Copy built frontend files from frontend stage
COPY --from=frontend /app/frontend/build /app/public

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "build/src/server.js"]