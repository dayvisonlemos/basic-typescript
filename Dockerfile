FROM node:12-stretch

ENV APP=/home/app/

COPY package.json yarn.lock $APP

WORKDIR $APP

RUN npm i

COPY . $APP

RUN npm run dist

CMD ["npm", "start"]