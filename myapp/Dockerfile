FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]

# Use the following command to build the Docker image
# docker build -t my-node-app .
# Use the following command to run the Docker container
# docker run -p 3000:3000 my-node-app
# Use the following command to run the Docker container in detached mode
