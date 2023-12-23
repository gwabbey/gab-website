# Use a lighter base image for the production stage
FROM node:20-alpine as base

# Intermediate stage for installing development dependencies
FROM base as deps
WORKDIR /app
COPY package*.json ./

# Install dependencies for development
RUN npm install

# Intermediate stage for building the app
FROM deps AS builder
WORKDIR /app
COPY . .

# Build the app
RUN npm run build

# Intermediate stage for installing production dependencies
FROM deps AS prod-deps
WORKDIR /app

# Install only production dependencies
RUN npm install --production

# Final stage for running the app
FROM base as runner
WORKDIR /app

# Create a non-root user for running the app
RUN addgroup --system --gid 1001 remix && \
    adduser --system --uid 1001 remix

USER remix

# Copy production dependencies, build output, and public assets
COPY --from=prod-deps --chown=remix:remix /app/package*.json ./
COPY --from=prod-deps --chown=remix:remix /app/node_modules ./node_modules
COPY --from=builder --chown=remix:remix /app/build ./build
COPY --from=builder --chown=remix:remix /app/public ./public

# Specify the entry point to start the app
ENTRYPOINT ["node", "node_modules/.bin/remix-serve", "build/index.js"]
