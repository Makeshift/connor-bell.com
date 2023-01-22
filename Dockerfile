FROM node:16-alpine AS builder

WORKDIR /app

COPY ./package.json .
RUN yarn install

COPY . .
RUN yarn build

CMD ["yarn", "build"]
