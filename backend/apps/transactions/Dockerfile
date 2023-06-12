FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install pg --save

COPY . .

RUN npm run build transactions

