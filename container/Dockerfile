FROM node:20-alpine

WORKDIR /container

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "preview"]