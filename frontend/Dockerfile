FROM node:20-alpine

WORKDIR /frontend

COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that Vite uses
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]