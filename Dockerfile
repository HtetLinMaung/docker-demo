FROM node:lts-alpine3.14

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]