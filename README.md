# Node.js HTTP Server with Routing

A minimal HTTP server built with Node.js's built-in `http` module, handling multiple routes and HTTP methods — no frameworks, no dependencies.

## Routes

| Method | Path | Response | Status |
|--------|------|----------|--------|
| GET | `/` | Hello from the server | 200 |
| GET | `/contact-us` | Contact email | 200 |
| GET | `/tweet` | List of tweets | 200 |
| POST | `/tweet` | Tweet created | 201 |
| Any | any unknown path | You are lost man!! | 404 |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Run the server

```bash
node server.js
```

### Test it

**Browser (GET requests):**
```
http://localhost:8000
http://localhost:8000/contact-us
http://localhost:8000/tweet
```

**Terminal (POST request):**
```bash
curl -X POST http://localhost:8000/tweet
```

## How it works

| Part | Description |
|------|-------------|
| `req.method` | Detects GET, POST, etc. |
| `req.url` | Detects the path hit |
| `res.writeHead(200)` | Sets the status code |
| `res.end()` | Sends response and closes connection |
| Fallback `404` | Catches all unmatched routes |

## Notes

- No `npm install` needed — pure Node.js
- Stop the server with `Ctrl + C`
- Port `8000` can be changed in `server.js`
