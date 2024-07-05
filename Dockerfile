# Stage 1: Build Backend
FROM node:16 AS backend

WORKDIR /app

# Install Yarn globally
RUN npm install -g yarn@1.22.22

COPY package.json yarn.lock ./

# Debugging step to show Node and Yarn versions
RUN node -v && yarn -v

# Install backend dependencies with retries
RUN yarn install --network-timeout 100000

COPY . .

RUN yarn build

# Stage 2: Build Frontend
FROM node:16 AS frontend

WORKDIR /app

RUN apt-get update && apt-get install -y git

# Install Yarn globally
RUN npm install -g yarn@1.22.22

RUN git clone -b dev-prod-frontned https://github.com/metrolabsservices/aarshafrontend.git frontend

WORKDIR /app/frontend

# Debugging step to show Node and Yarn versions
RUN node -v && yarn -v

# Install frontend dependencies with retries
RUN yarn install --network-timeout 100000

COPY frontend/ .

RUN yarn build

# Stage 3: Final image
FROM node:16-alpine

WORKDIR /app

# Copy backend build files
COPY --from=backend /app /app

# Copy frontend build files to the public directory
COPY --from=frontend /app/frontend/build /app/public

EXPOSE 3000

CMD ["node", "build/src/server.js"]