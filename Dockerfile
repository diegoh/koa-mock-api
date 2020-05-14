FROM node:14-alpine

USER node

RUN mkdir /opt/app

WORKDIR /opt/app

COPY . /opt/app

RUN npm install

EXPOSE 8081

CMD npm run start
