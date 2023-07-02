# node-express-sequelize

- node
- express
- sequelize
- postgresql
- pnpm

## Installation

### package manager

This project uses pnpm to manage dependencies. Install pnpm with `npm install -g pnpm` and run `pnpm install` to install dependencies.

see https://pnpm.io/installation for more information on pnpm.

### volta

This project uses volta to manage node versions. Install volta and run `volta install` to install the correct node version.

To install volta run the following command in the terminal.

```
curl https://get.volta.sh | bash
```

## Usage

## sequelize-cli

### run migrations

- `npx sequelize-cli db:migrate`
- `npx sequelize-cli db:migrate:undo:all`

### seed the db

- `npx sequelize-cli db:seed:all`

## Build with docker

replace the `POSTGRES_HOST` with `host.docker.internal` in the .env file to run the app with docker.

```
POSTGRES_HOST=host.docker.internal
```

### Build the image

`docker build -t node-express-sequelize .`

### Run the image

`docker run -d -p 3000:3000 node-express-sequelize`
