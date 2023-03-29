FROM node:15-slim

RUN npm install -g nodemon

WORKDIR /home/node/app

RUN chown -R node:node .

USER node

EXPOSE 3000