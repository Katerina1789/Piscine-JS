// createServer(): creates an HTTP server handling incoming requests
// request data events: POST body arrives in chunks via 'data' event, 'end' signals completion
// writeFile(): saves the request body to a guest JSON file
// status 201: HTTP "Created" — used when a new resource is successfully created
// JSON headers: Content-Type application/json tells the client the response is JSON

import { createServer } from 'http';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const PORT = 5000;

const server = createServer(async (req, res) => {
  const guestName = req.url.slice(1);

  // helper to send a JSON response with given status and body
  const send = (status, body) => {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(body));
  };

  // collect POST body chunks into a single string
  let body = '';
  req.on('data', (chunk) => { body += chunk; });

  req.on('end', async () => {
    try {
      const filePath = join('./guests', `${guestName}.json`);
      // save raw body to file and return it parsed as JSON
      await writeFile(filePath, body);
      // parse body to return as JSON — if not valid JSON, return as plain string
      let parsed;
      try { parsed = JSON.parse(body); } catch { parsed = body; }
      send(201, parsed);
    } catch (err) {
      send(500, { error: 'server failed' });
    }
  });
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
