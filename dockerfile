# Use a Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install nodemon globally for development
RUN npm install -g nodemon

# Expose the port
EXPOSE 3000

# Start the application with nodemon for live reload
CMD ["nodemon", "-L", "node_modules/.bin/next", "dev"]