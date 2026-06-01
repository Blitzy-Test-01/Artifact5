# Minimal Express.js Server

A minimal [Express.js](https://expressjs.com/) Node.js server (tutorial-scale) that serves two plain-text HTTP endpoints.

## Prerequisites

- **Node.js `>= 18`** — required by Express 5.
- **Node.js 22 LTS** is recommended for new Express 5 services.
- **npm** (bundled with Node.js) is used to install the project dependencies.

## Install

Install the `express` dependency:

```bash
npm install
```

## Run

Start the server:

```bash
npm start
```

`npm start` runs `node server.js`. By default the server listens on port **`3000`**. You can override the port with the `PORT` environment variable:

```bash
PORT=8080 npm start
```

On startup the server logs:

```text
Server running on http://localhost:3000
```

## Endpoints

| Method | Path | Response |
|--------|------|----------|
| GET | `/` | `Hello world` |
| GET | `/good-evening` | `Good evening` |

Example requests with `curl` (assuming the default port `3000`):

```bash
curl http://localhost:3000/             # -> Hello world
curl http://localhost:3000/good-evening # -> Good evening
```
