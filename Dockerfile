FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN npm install -g pnpm
RUN pnpm install

CMD ["node", "index.js"]