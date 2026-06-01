/**
 * server.js — Express HTTP server entry point.
 *
 * Minimal, tutorial-scale Express.js server (the executable heart of the
 * "artifact5" project). It instantiates a single Express application,
 * registers two inline GET routes, and starts an HTTP listener.
 *
 * Endpoints
 * ---------
 *   GET /              -> "Hello world"   (preserved root endpoint)
 *   GET /good-evening  -> "Good evening"  (new endpoint)
 *
 * Runtime
 * -------
 *   Module system : CommonJS (`require`); package.json does NOT set
 *                   "type": "module".
 *   Node.js       : >= 18 (Express 5 requirement; Node 22 LTS recommended).
 *   Port          : process.env.PORT, defaulting to 3000.
 *
 * Usage
 * -----
 *   npm install   # resolves express ^5.2.1 into node_modules/
 *   npm start     # === `node server.js`
 *   # or: PORT=8080 node server.js  to override the listening port.
 *
 * Design notes
 * ------------
 *   Convention over configuration: routes are defined inline on the
 *   application instance. No express.Router, controllers, services,
 *   middleware, persistence, or auth are introduced — the feature simply
 *   returns two static plain-text responses, so additional layers would add
 *   no value (see Agent Action Plan §0.6.2).
 */

'use strict';

// ---------------------------------------------------------------------------
// Imports & application instantiation
// ---------------------------------------------------------------------------
// Express is the sole third-party dependency. It is resolved from node_modules/
// (produced by `npm install` against package.json's `express ^5.2.1`).
const express = require('express');

// Create the central Express application instance onto which all routes attach.
const app = express();

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
// The listening port is configurable via the PORT environment variable and
// falls back to 3000 for local/tutorial use.
const PORT = process.env.PORT || 3000;

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------
// Root route (preserved endpoint): responds with the exact body "Hello world".
app.get('/', (req, res) => res.send('Hello world'));

// New endpoint: responds with the exact body "Good evening".
app.get('/good-evening', (req, res) => res.send('Good evening'));

// ---------------------------------------------------------------------------
// Start the HTTP listener
// ---------------------------------------------------------------------------
// Binds the application to PORT so the process begins accepting HTTP requests.
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
