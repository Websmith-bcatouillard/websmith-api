# API for **Websmith** Website

This project is a part of full Websmith website.

---

## Context

Websmith API is a Restful API with :

- Swagger Documentation
- Unit Testing with Jest
- Authorization Token with JWT

As a Restful API, this project have to respect criterias such as : 

- Uniform Interface
- Client-server
- Stateless
- Cacheable
- Layered system
- Code on demand (optional)

---

## Setup

You need a .env file with many keys such as : 

- SECRET_KEY
- BCRYPT_SALTROUNDS
- MONGODB_URI
- PORT

In order to create SECRET_KEY for JWT, you have to run a node shell and execute this command :

```shell
require('crypto').randomBytes(64).toString('hex')
```

BCRYPT_SALTROUNDS is how much times bcrypt will loop for salting.

MONGODB_URI is your MongoDB URI that can be a cluster or a on premise MongoDB.

PORT is express listening port.

---

## Running

We have different npm scripts to run this project.

- Build project

```node
npm run build
```

- Run unit testing

```node
npm run test
```

- Start a development server

```node
npm run start:dev
```

- Start a production server

```node
npm run start:prod
```

---

## Endpoints

In our API, there is 2 modules :

- users
- projects

In those 2 different modules we can find different endpoints :

For users : 

- GET /users/login
- PUT /users/:id

For projects :

- GET /projects
- POST /projects/

- GET /projects/:id
- PUT /projects/:id
- DELETE /projects/:id

---

## Links : 

This project got a [Trello Dashboard](https://trello.com/b/U9UmVoK5/websmith-api) in order to help me on how to build it 
