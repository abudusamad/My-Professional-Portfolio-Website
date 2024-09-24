# Stage 1: Install dependencies
FROM node:20-alpine AS base
# Install the necessary dependencies
FROM base AS deps

WORKDIR /app
# Only copy the package and lock files to leverage Docker cache
COPY package*.json ./
COPY prisma ./prisma
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
# RUN npm install --frozen-lockfile
RUN npm install --frozen-lockfile --omit=dev


# Stage 2: Build the project
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production image
FROM base AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production

#set the correct permissions for prerender cache
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built files and necessary assets from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/jsconfig.json ./jsconfig.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs


# Expose the default Next.js port
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"


# Start the app
CMD ["npm", "run", "start"]
