FROM node:14-alpine AS builder
ENV NODE_ENV development

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY server/package.json .

RUN npm install

COPY server/ .

RUN npm run build

RUN npm install nodemon --save-dev

EXPOSE 8000

CMD ["npm", "run", "start"]
