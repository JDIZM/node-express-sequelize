FROM node:16

WORKDIR /app

COPY . /app

RUN npm install -g pnpm
RUN pnpm install

CMD ["node", "index.js"]