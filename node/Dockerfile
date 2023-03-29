FROM node:15-slim

RUN npm install -g nodemon

WORKDIR /home/node/app

COPY . .

RUN npm install

CMD [ "tail", "-f", "/dev/null"]