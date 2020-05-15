FROM node:14.2.0-alpine as BUILDER
COPY . .
RUN npm ci
RUN npm run build
RUN npm prune --production

FROM node:14.2.0-alpine
ENV NODE_ENV=production
RUN mkdir /opt/app
WORKDIR /opt/app
RUN ls -la
RUN cd ${WORKDIR}
RUN ls -la
COPY --from=BUILDER package.json .
RUN ls -la
COPY --from=BUILDER dist/  ./dist
RUN ls -la
COPY --from=BUILDER node_modules/  ./node_modules
RUN ls -la

EXPOSE 8081
USER node
CMD npm run start
