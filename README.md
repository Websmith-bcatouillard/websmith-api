# Websmith API

This project is a part of full Websmith website.

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


## Setup

In order to create SECRET_KEY for JWT, you have to run a node shell and execute this command :

```shell
require('crypto').randomBytes(64).toString('hex')
```