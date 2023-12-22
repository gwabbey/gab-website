# Use the official Bun image
FROM oven/bun:latest AS base

WORKDIR /usr/src/app

# Install dependencies into temp directory
# This will cache them and speed up future builds
FROM base AS install

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/

WORKDIR /temp/prod
RUN bun install --frozen-lockfile --production

# Copy node_modules from temp directory
# Then copy all (non-ignored) project files into the image
FROM base AS prerelease

COPY --from=install /temp/prod/node_modules /usr/src/app/node_modules
COPY . .

# Copy production dependencies and source code into the final image
FROM base AS release

COPY --from=prerelease /usr/src/app .

# Run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT ["bun", "run", "index.ts"]
