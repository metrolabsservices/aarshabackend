# Stage 1: Build Backend
FROM node:14 AS backend

WORKDIR /app

RUN corepack enable && corepack prepare yarn@1.22.22 --activate

COPY package.json yarn.lock ./

# Debugging step to show Node and Yarn versions
RUN node -v && yarn -v

# Install backend dependencies with verbose output
RUN yarn install --verbose || { cat /root/.cache/node/corepack/yarn/1.22.22/logs/yarn-error.log; exit 1; }

COPY . .

RUN yarn build

# Stage 2: Build Frontend
FROM node:14 AS frontend

WORKDIR /app

RUN apt-get update && apt-get install -y git

RUN corepack enable && corepack prepare yarn@1.22.22 --activate

RUN git clone -b dev-prod-frontned https://github.com/metrolabsservices/aarshafrontend.git frontend

WORKDIR /app/frontend

# Debugging step to show Node and Yarn versions
RUN node -v && yarn -v

# Install frontend dependencies with verbose output
RUN yarn install --verbose || { cat /root/.cache/node/corepack/yarn/1.22.22/logs/yarn-error.log; exit 1; }

COPY frontend/ .

RUN yarn build

# Stage 3: Final image
FROM node:14

WORKDIR /app

COPY --from=backend /app /app

COPY --from=frontend /app/frontend/build /app/public

EXPOSE 3000

CMD ["node", "build/src/server.js"]