FROM node:latest

WORKDIR /

copy package*.json ./

RUN npm install

COPY . .

ExPOSE 8100

CMD ["node","myserver.js"]