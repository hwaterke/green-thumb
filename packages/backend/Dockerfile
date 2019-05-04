FROM node:10-alpine

RUN apk --no-cache add nano python python-dev py-pip build-base

WORKDIR /app
COPY package.json .
COPY tsconfig.json .
COPY src ./src
COPY serviceAccountKey.json .

RUN yarn install
RUN yarn build

CMD node build/index.js
