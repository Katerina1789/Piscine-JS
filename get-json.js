// fetch(): browser API that makes HTTP requests and returns a Promise
// URLSearchParams: converts an object of params into a query string (e.g. ?q=hello+world&b=5)
// async/await: pauses execution until a promise resolves
// response.ok: true if HTTP status is 200-299, false otherwise
// response.json(): parses the response body as JSON, returns a Promise

// getJSON fetches a URL with optional query params, parses the JSON response and returns data or throws an error
export const getJSON = async (path, params) => {
  // build query string from params object if provided
  const url = params ? `${path}?${new URLSearchParams(params)}` : path;

  const response = await fetch(url);

  // if response is not ok, throw using the status text
  if (!response.ok) throw new Error(response.statusText);

  const { data, error } = await response.json();

  // if the response body contains an error, throw it
  if (error) throw new Error(error);

  return data;
};
