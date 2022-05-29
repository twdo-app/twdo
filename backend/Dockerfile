FROM node:16

USER node

RUN test -d /home/node/twdo-backend || mkdir -p /home/node/twdo-backend

WORKDIR /home/node/twdo-backend

COPY --chown=node:node  package*.json ./

RUN yarn install

COPY --chown=node:node . /home/node/twdo-backend

EXPOSE 4001

CMD ["yarn", "dev"]