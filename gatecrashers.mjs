// Basic Auth: credentials sent as base64 encoded 'username:password' in Authorization header
// Buffer.from(str, 'base64').toString(): decodes a base64 string back to plain text
// Authorization header format: 'Basic <base64(username:password)>'
// status 401: HTTP "Unauthorized" — sent when credentials are missing or invalid

import { createServer } from 'http';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const PORT = 5000;

// authorised users and their shared password
const ALLOWED_USERS = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
const PASSWORD = 'abracadabra';

// isAuthorised checks the Authorization header for valid Basic Auth credentials
const isAuthorised = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Basic ')) return false;

  // decode base64 credentials and split into username:password
  const decoded = Buffer.from(authHeader.slice(6), 'base64').toString('utf8');
  const [username, password] = decoded.split(':');

  return ALLOWED_USERS.includes(username) && password === PASSWORD;
};

const server = createServer(async (req, res) => {
  const guestName = req.url.slice(1);

  const send = (status, body) => {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(body));
  };

  // reject unauthorised requests immediately
  if (!isAuthorised(req)) return send(401, 'Authorization Required');

  // collect POST body chunks
  let body = '';
  req.on('data', (chunk) => { body += chunk; });

  req.on('end', async () => {
    try {
      const filePath = join('./guests', `${guestName}.json`);
      await writeFile(filePath, body);
      let parsed;
      try { parsed = JSON.parse(body); } catch { parsed = body; }
      send(200, parsed);
    } catch (err) {
      send(500, { error: 'server failed' });
    }
  });
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
