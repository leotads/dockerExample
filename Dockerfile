FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ./scripts/start.sh