FROM node:14-alpine

RUN mkdir /opt/app

WORKDIR /opt/app

COPY . /opt/app

RUN npm install

EXPOSE 8081

CMD npm run start
