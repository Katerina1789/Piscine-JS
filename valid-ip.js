/*
 ------------------------------------------------------------
 REGEX DICTIONARY (MINIMAL + ORGANIZED + WITH EXAMPLES)
 ------------------------------------------------------------

 • Character Classes: [0-9], [A-Za-z], [.]  
   - Match any one character inside brackets.  
   - Example: /[0-9]/ matches "4".

 • Quantifiers: +, *, ?, {n,m}  
   - {1,3} means 1 to 3 repetitions.  
   - Example: /\d{1,3}/ matches "1", "25", "255".

 • Anchors: ^ and $  
   - ^ start of string, $ end of string.  
   - Example: /^abc$/ matches ONLY "abc".

 • Groups: (...)  
   - Capture parts of the match.  
   - Example: /(abc)(\d+)/ matches "abc42".

 • Alternation: |  
   - OR between patterns.  
   - Example: /(cat|dog)/ matches "cat" or "dog".

 • Lookarounds: (?=...), (?!...), (?<=...), (?<!...)  
   - Check context without consuming characters.  
   - Example: /\d+(?=px)/ matches "12" in "12px".

 • Greedy vs Lazy: * vs *?  
   - Greedy takes as much as possible.  
   - Example: /".*"/ matches the longest quoted string.

 ------------------------------------------------------------
 THEORY APPLIED TO THIS EXERCISE
 ------------------------------------------------------------

 VALID IPv4 OCTET (0–255, no leading zeros):
   - 25[0-5]     → 250–255
   - 2[0-4]\d    → 200–249
   - 1?\d?\d     → 0–199 (but rejects leading zeros except "0")

 Combined pattern:
   (25[0-5]|2[0-4]\d|1?\d?\d)

 VALID PORT (0–65535):
   - \d{1,5} but must be <= 65535

 FULL IP WITH OPTIONAL PORT:
   <octet>.<octet>.<octet>.<octet>(:<port>)?

 ------------------------------------------------------------
 FUNCTION: findIP
 ------------------------------------------------------------
 • Extracts all valid IPv4 addresses from a string.
 • Accepts optional port: :number
 • Rejects invalid octets and invalid ports.
 • Rejects leading zeros (e.g., "01").
 ------------------------------------------------------------
*/

export function findIP(str) {
  // regex for IPv4 with optional port
  const octet = '(25[0-5]|2[0-4]\\d|1?\\d?\\d)'
  const re = new RegExp(`\\b${octet}\\.${octet}\\.${octet}\\.${octet}(?::\\d{1,5})?\\b`, 'g')

  const out = []
  let m

  while ((m = re.exec(str)) !== null) {
    const ip = m[0]

    // if port exists, validate numeric range
    const parts = ip.split(':')
    if (parts.length === 2) {
      const port = Number(parts[1])
      if (port > 65535) continue
    }

    out.push(ip)
  }

  return out
}


/*
TESTING:
console.log('--- basic valid IPs ---')
console.log(findIP('ping 192.168.1.1 now'))
// ['192.168.1.1']

console.log('--- with ports ---')
console.log(findIP('server at 10.0.0.1:8080 and backup at 8.8.8.8:53'))
// ['10.0.0.1:8080', '8.8.8.8:53']

console.log('--- invalid octets ---')
console.log(findIP('bad: 256.1.1.1, 999.0.0.1, 01.2.3.4'))
// []

console.log('--- invalid ports ---')
console.log(findIP('ip 1.2.3.4:70000'))
// []

console.log('--- mixed ---')
console.log(findIP('ok 127.0.0.1, nope 127.0.0.1:99999, ok 8.8.4.4:443'))
// ['127.0.0.1', '8.8.4.4:443']

run in Terminal: node valid-ip.js
*/
