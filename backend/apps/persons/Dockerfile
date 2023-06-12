FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build persons

# CMD ["npm", "run", "start:prod"]
# CMD ["node", "dist/apps/authentication/main"]
CMD ["npm", "run", "start:dev"]
