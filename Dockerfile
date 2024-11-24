# Use Node.js official image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy app files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
