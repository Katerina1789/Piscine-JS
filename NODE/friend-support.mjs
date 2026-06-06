// http.createServer(): creates an HTTP server that handles incoming requests
// request.url: the URL path of the incoming request (e.g. '/Elis_Galindo')
// response.writeHead(): sets the status code and headers for the response
// JSON.stringify(): converts an object to a JSON string for the response body
// readFile(): reads the guest JSON file from the guests directory
// JSON.parse(): parses the file content back into an object

import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join } from 'path';

const PORT = 5000;

const server = createServer(async (req, res) => {
  // extract guest name from URL path (remove leading slash)
  const guestName = req.url.slice(1);

  // helper to send a JSON response with given status and body
  const send = (status, body) => {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(body));
  };

  try {
    const filePath = join('./guests', `${guestName}.json`);
    const content = await readFile(filePath, 'utf8');
    send(200, JSON.parse(content));
  } catch (err) {
    // file not found (ENOENT) means guest doesn't exist, otherwise server failed
    if (err.code === 'ENOENT') {
      send(404, { error: 'guest not found' });
    } else {
      send(500, { error: 'server failed' });
    }
  }
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
