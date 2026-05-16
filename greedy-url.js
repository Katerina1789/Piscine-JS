// regex: match http/https URLs greedily until a space
// without regex we would manually scan characters until whitespace
// good to remember: \S means "non‑whitespace", so \S+ grabs the whole URL

// getURL: returns all http/https URLs
export function getURL(dataSet) {
  const re = /https?:\/\/\S+/g
  return dataSet.match(re) || []
}

// greedyQuery: URLs with >= 3 query parameters
export function greedyQuery(dataSet) {
  const urls = getURL(dataSet)
  const out = []

  for (const u of urls) {
    // split on '?', then '&' to count parameters
    const parts = u.split('?')
    if (parts.length < 2) continue

    const params = parts[1].split('&')
    if (params.length >= 3) out.push(u)
  }

  return out
}

// notSoGreedy: URLs with >= 2 and <= 3 query parameters
export function notSoGreedy(dataSet) {
  const urls = getURL(dataSet)
  const out = []

  for (const u of urls) {
    const parts = u.split('?')
    if (parts.length < 2) continue

    const params = parts[1].split('&')
    const n = params.length

    if (n >= 2 && n <= 3) out.push(u)
  }

  return out
}


/*
TESTING:
const data =
  'qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq ' +
  'qhttp://example.com/hello?you=something&something=you ' +
  'https://a.com/x?one=1&two=2&three=3&four=4 ' +
  'http://b.com/z?x=1&y=2 ' +
  'https://c.com/k?u=1&v=2&k=3'

// --- getURL ---
console.log(getURL(data))
// [
//   'https://something.com/hello',
//   'http://example.com/hello?you=something&something=you',
//   'https://a.com/x?one=1&two=2&three=3&four=4',
//   'http://b.com/z?x=1&y=2',
//   'https://c.com/k?u=1&v=2&k=3'
// ]

// --- greedyQuery (>=3 params) ---
console.log(greedyQuery(data))
// [
//   'https://a.com/x?one=1&two=2&three=3&four=4',
//   'https://c.com/k?u=1&v=2&k=3'
// ]

// --- notSoGreedy (2–3 params) ---
console.log(notSoGreedy(data))
// [
//   'http://b.com/z?x=1&y=2',
//   'https://c.com/k?u=1&v=2&k=3'
// ]

run in Terminal: node greedy-url.js
*/
