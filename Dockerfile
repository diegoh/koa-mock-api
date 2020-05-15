FROM node:14.2.0-alpine as BUILDER
COPY . .
RUN npm ci
RUN npm run build
RUN npm prune --production

FROM node:14.2.0-alpine
ENV NODE_ENV=production
RUN mkdir /opt/app
WORKDIR /opt/app

COPY --from=BUILDER package.json .
COPY --from=BUILDER dist/  ./dist
COPY --from=BUILDER node_modules/  ./node_modules

EXPOSE 8081
USER node
CMD npm run start
