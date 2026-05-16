/*
============================================================
 REGEX THEORY (for understanding, even though we use logic)
============================================================

 • Character classes: [0-9], [A-Za-z], [.]
   - Match any one character inside brackets.

 • Quantifiers: +, *, ?, {n,m}
   - {1,3} means 1 to 3 repetitions.

 • Anchors: ^ and $
   - ^ start of string, $ end of string.

 • Groups: (...)
   - Capture or group parts of a pattern.

 • Alternation: |
   - OR between patterns.

 • Lookarounds: (?=...), (?!...), (?<=...), (?<!...)
   - Check context without consuming characters.

We are NOT using regex for validation here.
We use **pure logic** to validate:
   - IPv4 host (x.x.x.x)
   - Optional port (:number)
============================================================
*/


export function findIP(str) {

  // Validate a single IPv4 octet (0–255, no leading zeros)
  function isValidOctet(o) {
    if (o === "0") return true               // "0" allowed
    if (o.length === 0) return false         // empty not allowed
    if (o[0] === "0") return false           // no leading zeros

    // must be digits only
    for (let i = 0; i < o.length; i++) {
      const c = o[i]
      if (c < "0" || c > "9") return false
    }

    const n = Number(o)
    return n >= 0 && n <= 255
  }

  // Validate port (0–65535)
  function isValidPort(p) {
    if (p.length === 0 || p.length > 5) return false

    // digits only
    for (let i = 0; i < p.length; i++) {
      const c = p[i]
      if (c < "0" || c > "9") return false
    }

    const n = Number(p)
    return n >= 0 && n <= 65535
  }

  // Validate full token: host or host:port
  function isValidIPToken(token) {
    let host = token
    let port = null

    // split host:port
    const idx = token.indexOf(":")
    if (idx !== -1) {
      host = token.slice(0, idx)
      port = token.slice(idx + 1)

      // more than one colon → invalid
      if (token.indexOf(":", idx + 1) !== -1) return false
    }

    // split host into 4 octets
    const octets = host.split(".")
    if (octets.length !== 4) return false

    // validate each octet
    for (const o of octets) {
      if (!isValidOctet(o)) return false
    }

    // validate port if present
    if (port !== null) {
      if (!isValidPort(port)) return false
    }

    return true
  }

  // MAIN FLOW: extract tokens and validate them
  const out = []
  let current = ""

  // Build tokens from digits, dots, and colons
  for (let i = 0; i < str.length; i++) {
    const c = str[i]

    if ((c >= "0" && c <= "9") || c === "." || c === ":") {
      current += c
    } else {
      // validate completed token
      if (current.length > 0 && isValidIPToken(current)) {
        out.push(current)
      }
      current = ""
    }
  }

  // flush last token
  if (current.length > 0 && isValidIPToken(current)) {
    out.push(current)
  }

  return out
}


if (import.meta.url === `file://${process.argv[1]}`) {
  const dataSet = `
233.123.12.234
http://192.168.1.123:8080
192.169.1.23
172.01.123.254:1234
10.1.23.7
255.255.255.000
09.09.09.09
0.0.0.0:22
https://255.253.123.2:8000
192.168.1.123
0.0.0.0/0
921.168.1.123
  `

  const expected = [
    '233.123.12.234',
    '192.168.1.123:8080',
    '192.169.1.23',
    '10.1.23.7',
    '0.0.0.0:22',
    '255.253.123.2:8000',
    '192.168.1.123',
    '0.0.0.0'
  ]

  const actual = findIP(dataSet)

  console.log('Actual:', actual)
  console.log('Expected:', expected)

  const pass = JSON.stringify(actual) === JSON.stringify(expected)

  if (pass) {
    console.log('\n✅ TEST PASSED — Output matches expected!')
  } else {
    console.log('\n❌ TEST FAILED — Output does NOT match expected.')
    console.log('\nMissing from actual:', expected.filter(x => !actual.includes(x)))
    console.log('Extra in actual:', actual.filter(x => !expected.includes(x)))
  }
}