<p align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="80" alt="NestJS" />
  </a>
  &nbsp;&nbsp;
  <a href="https://www.mongodb.com" target="_blank">
    <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" width="80" alt="MongoDB" />
  </a>
</p>

<h1 align="center">nest-workshop</h1>

<p align="center">
  A hands-on workshop repository for mastering NestJS — built on a solid foundation of clean architecture, MongoDB integration, and full test coverage.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-10-E0234E?style=flat-square&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose_8-47A248?style=flat-square&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.1-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-29-C21325?style=flat-square&logo=jest&logoColor=white" />
  <img src="https://img.shields.io/badge/License-UNLICENSED-lightgrey?style=flat-square" />
</p>

---

## Overview

This repository is a personal workshop project for learning the NestJS framework from the ground up.  
It covers the core pillars of building production-grade REST APIs — module architecture, data validation, MongoDB persistence, and automated testing.

> Built and maintained by **SHEDKAE, THE DEVELOPER**

---

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | NestJS 10                           |
| Runtime    | Node.js                             |
| Language   | TypeScript 5.1                      |
| Database   | MongoDB via Mongoose 8              |
| Validation | class-validator · class-transformer |
| Testing    | Jest 29 · Supertest                 |

---

## Features

- `GET /` — Hello World endpoint
- `POST /users` — Create a new user
- `GET /users` — Retrieve all users
- `GET /users/:id` — Retrieve a single user by ID
- `PATCH /users/:id` — Partially update a user
- `DELETE /users/:id` — Remove a user

---

## Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x
- **MongoDB** instance (local or Atlas)

---

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd nest-workshop

# Install dependencies
npm install
```

---

## Environment Variables

Create a `.env` file at the project root:

```env
MONGODB_URI=mongodb://localhost:27017/nest-workshop
```

> For MongoDB Atlas, replace the URI with your cluster connection string.

---

## Running the App

```bash
# Development (watch mode)
npm run start:dev

# Production build
npm run build
npm run start:prod

# Debug mode
npm run start:debug
```

The server will be running at `http://localhost:3000`

---

## API Reference

### Root

| Method | Endpoint | Description                           |
| ------ | -------- | ------------------------------------- |
| GET    | `/`      | Health check — returns `Hello World!` |

### Users

| Method | Endpoint     | Body                      | Description                  |
| ------ | ------------ | ------------------------- | ---------------------------- |
| POST   | `/users`     | `{ name, email, age }`    | Create a user                |
| GET    | `/users`     | —                         | Get all users                |
| GET    | `/users/:id` | —                         | Get user by MongoDB ObjectId |
| PATCH  | `/users/:id` | `{ name?, email?, age? }` | Partial update               |
| DELETE | `/users/:id` | —                         | Delete user                  |

**User Schema**

```json
{
  "name": "string (required)",
  "email": "string (required)",
  "age": "number (required)"
}
```

---

## Testing

```bash
# Unit tests
npm run test

# Unit tests in watch mode
npm run test:watch

# Test coverage report
npm run test:cov

# End-to-end tests
npm run test:e2e
```

---

## Project Structure

```
nest-workshop/
├── src/
│   ├── users/
│   │   ├── dto/
│   │   │   ├── create-user.dto.ts
│   │   │   └── update-user.dto.ts
│   │   ├── schemas/
│   │   │   └── user.schema.ts
│   │   ├── users.controller.ts
│   │   ├── users.controller.spec.ts
│   │   ├── users.service.ts
│   │   ├── users.service.spec.ts
│   │   └── users.module.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── nest-cli.json
├── tsconfig.json
└── package.json
```

---

## Author

**SHEDKAE, THE DEVELOPER**

---

<p align="center">Built with ☕ and <a href="https://nestjs.com">NestJS</a></p>
    └── tsconfig.json
```

## Installation

For everyone who interest in my workshop and want to use this repository to learn about NestJS

## Step to Install:

1. Clone this Project:
   ```
   git clone https://github.com/chutinut/nest-workshop.git
   ```
2. Run
   ```
   npm run start # or npm run start:dev
   ```

## Resources

NestJS - [Introduction](https://docs.nestjs.com/)</br>
MongoDB - [Docs](https://www.mongodb.com/docs/atlas/)

## Blog

Medium - [Subscribe](https://medium.com/@chutinut.j)

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

This repository is not have license. If you want to learn about NestJS. you can use this all the time.
