FROM node:20-alpine

WORKDIR /backend

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# install dependencies
RUN npm install

# copy all the files to the container
COPY . .

EXPOSE 3000

# run your application
CMD ["node", "index.js"]