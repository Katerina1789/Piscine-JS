// Promise.race(): resolves with the first promise to settle — used to get fastest server
// Promise.all(): waits for all promises to resolve — used to query all 3 servers concurrently
// Promise.race with timeout: combines all and race to enforce an 80ms deadline

// queryServers returns the fastest response between main and backup server for a given query
export const queryServers = (serverName, q) =>
  Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`),
  ]);

// gougleSearch queries web, image and video servers concurrently, returns all results or times out after 80ms
export const gougleSearch = (q) =>
  Promise.race([
    // query all 3 servers at once, each using the fastest of main/backup
    Promise.all([
      queryServers('web', q),
      queryServers('image', q),
      queryServers('video', q),
    ]).then(([web, image, video]) => ({ web, image, video })),

    // timeout: reject after 80ms if not all servers have responded
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 80)),
  ]);
