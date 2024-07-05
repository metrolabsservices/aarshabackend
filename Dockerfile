# Stage 1: Build Backend
FROM node:16-alpine AS backend

WORKDIR /app

# Install dependencies required for Yarn
RUN apk add --no-cache bash curl

# Install Yarn globally using the official Yarn package repository
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
ENV PATH="/root/.yarn/bin:/root/.config/yarn/global/node_modules/.bin:${PATH}"

COPY package.json yarn.lock ./

# Debugging step to show Node and Yarn versions
RUN node -v && yarn -v

# Install backend dependencies with retries
RUN yarn install --network-timeout 100000

COPY . .

RUN yarn build

# Stage 2: Build Frontend
FROM node:16-alpine AS frontend

WORKDIR /app

# Install dependencies required for Yarn
RUN apk add --no-cache bash curl git

# Install Yarn globally using the official Yarn package repository
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
ENV PATH="/root/.yarn/bin:/root/.config/yarn/global/node_modules/.bin:${PATH}"

RUN git clone -b dev-prod-frontned https://github.com/metrolabsservices/aarshafrontend.git frontend

WORKDIR /app/frontend

# Copy the package.json and yarn.lock files to the working directory
COPY frontend/package.json frontend/yarn.lock ./

# Debugging step to show Node and Yarn versions
RUN node -v && yarn -v

# Install frontend dependencies with retries
RUN yarn install --network-timeout 100000

COPY frontend/ ./

RUN yarn build

# Stage 3: Final image
FROM node:16-alpine

WORKDIR /app

COPY --from=backend /app /app

COPY --from=frontend /app/frontend/build /app/public

EXPOSE 3000

CMD ["node", "build/src/server.js"]