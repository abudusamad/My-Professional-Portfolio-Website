# Stage 1: Install dependencies
FROM node:20-alpine AS base
# Install the necessary dependencies
FROM base AS deps

RUN apk add --no-cache libc6-compat


WORKDIR /app
# Only copy the package and lock files to leverage Docker cache
RUN corepack prepare npm@latest --activate

COPY package*.json ./
COPY prisma ./prisma

RUN corepack enable npm && npm install --frozen-lockfile



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
ENV PORT 3000
ENV HOSTNAME "0.0,0.0"

#set the correct permissions for prerender cache
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs


# Set the correct permission and create directory for the .next folder
RUN mkdir .next && chown nextjs:nodejs .next
 

# Copy built files and necessary assets from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/tailwind.config.ts ./tailwind.config.ts
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./next.config.mjs
COPY --from=builder --chown=nextjs:nodejs /app/jsconfig.json ./jsconfig.json
COPY --from=builder --chown=nextjs:nodejs /app/postcss.config.mjs ./postcss.config.mjs

USER nextjs


# Expose the default Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
