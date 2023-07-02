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

At first we will need to run the migrations and seed the db

### run migrations

- `npx sequelize-cli db:migrate`
- `npx sequelize-cli db:migrate:undo:all`

### seed the db

- `npx sequelize-cli db:seed:all`

### dev server

start the dev server with `npm run dev` this will spin up a docker container with postgresql and run the app in watch mode.

### make a request to fetch all users

make a GET request to http://localhost:3000/users

you can use something like [insomnia](https://insomnia.rest/), [postman](https://www.postman.com/) or [httpie](https://httpie.io/cli) to make the request.

You should see a response like this with a user and it's associated bar model:

```json
{
  "users": [
    {
      "id": "1f63b2ad-4273-4fdd-b6a7-dcadf45a2cbe",
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com",
      "createdAt": "2023-07-02T21:38:21.154Z",
      "updatedAt": "2023-07-02T21:38:21.154Z",
      "Bar": {
        "id": 1,
        "userId": "1f63b2ad-4273-4fdd-b6a7-dcadf45a2cbe",
        "createdAt": "2023-07-02T21:38:21.161Z",
        "updatedAt": "2023-07-02T21:38:21.161Z"
      }
    }
  ]
}
```

## Build with docker

replace the `POSTGRES_HOST` with `host.docker.internal` in the .env file to run the app with docker.

```
POSTGRES_HOST=host.docker.internal
```

### Build the image

`docker build -t node-express-sequelize .`

### Run the image

`docker run -d -p 3000:3000 node-express-sequelize`
