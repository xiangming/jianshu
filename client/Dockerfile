FROM node:14-alpine AS builder
ENV NODE_ENV development

WORKDIR /app

COPY client/package.json .

RUN npm install

COPY client .

RUN npm run build


FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production

COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./client/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
