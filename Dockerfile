FROM node:18

WORKDIR /app

# Install necessary dependencies for Prisma
RUN apt-get update && apt-get install -y openssl

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Remove the mongo-init.sh copy and chmod commands as we're not using a replica set anymore
# COPY mongo-init.sh /docker-entrypoint-initdb.d/
# RUN chmod +x /docker-entrypoint-initdb.d/mongo-init.sh

# Expose necessary ports
EXPOSE 3000 3001

# Command to run the application
CMD ["npm", "run", "dev"]