FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# RUN npm install pg --save

COPY . .

RUN npm run build accounts

# EXPOSE 3000

CMD ["npm", "run", "start:dev"]

# RUN npm run build accounts
