# Memoir Server

An Express and MongoDB backend for the Memoir project. It exposes authentication endpoints, health checks, and supporting utilities for the client application.

## Prerequisites
- Node.js 18+ recommended
- npm (included with Node)
- MongoDB connection string

## Environment Variables
Create a `.env` file in the `server/` directory with the following keys:

```
DATABASE_URL=mongodb://localhost:27017/memoir
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
PORT=3000
```

## Setup
```bash
cd server
npm install
```

## Running
- `npm run dev` — start the API server (defaults to port 3000).
- `npm start` — run the server in production mode.

The server enables CORS for `http://localhost:5173` to support the Vite client.

## API Routes
- `GET /api/` — welcome message.
- `GET /api/ping` — health check for uptime monitoring.
- `POST /api/auth/register` — create a new user account.
- `POST /api/auth/login` — authenticate and receive access/refresh tokens.
- `POST /api/auth/logout` — clear a user's refresh token.
- `POST /api/auth/refresh` — exchange a valid refresh token for new tokens.
- `GET /api/auth/me` — retrieve the authenticated user's profile (requires access token).

## Error Handling
The server returns JSON error responses for unhandled errors and 404s, and logs unexpected conditions to the console for troubleshooting.
