# Jianshu demo

Built with the MERN stack (MongoDB, Express, React and NodeJS).

I use a online MongoDB Atlas, so I can prepare the mock data in advance.

## Technologies used

This project was created using the following technologies.

### Client

- react
- react-dom
- react-router-dom (To handle routing)

### Server

- express (minimalist web framework for Node.js)
- mongoose (MongoDB for nodejs)

### Database

MongoDB (MongoDB Atlas)

## Run locally

In order to run this project locally, clone the repository or download as zip and unzip on your machine.

Run the client on one terminal and the server on the other terminal.

In the first terminal

```bash
$ cd server
$ yarn (to install server-side dependencies)
& yarn dev (to start the server)
```

In the second terminal

```bash
$ cd client
$ yarn (to install client-side dependencies)
$ yarn dev (to start the client)
```

## Docker

Using docker is simple.

```bash
docker compose build

# And then

docker compose up
```
