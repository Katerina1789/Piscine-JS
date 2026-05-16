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
   - 1\d\d       → 100–199
   - [1-9]\d?    → 1–99
   - 0           → 0

 Combined:
   (25[0-5]|2[0-4]\d|1\d\d|[1-9]\d?|0)

 VALID PORT (0–65535):
   - :\d{1,5} but must be <= 65535

 SPECIAL TEST RULES:
   - Reject IPs inside http:// or https://
   - Reject IPs followed by '/'
   - Reject leading-zero octets
   - Reject partial matches inside larger numbers

 ------------------------------------------------------------
*/

export function findIP(str) {
  const octet = '(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d?|0)'

  // Reject inside http:// or https://
  // Reject if followed by '/'
  const re = new RegExp(
    `(?<!https?:\\/\\/)\\b${octet}\\.${octet}\\.${octet}\\.${octet}(?::\\d{1,5})?\\b(?!\\/)`,
    'g'
  )

  const out = []
  let m

  while ((m = re.exec(str)) !== null) {
    const ip = m[0]

    // validate port if present
    const parts = ip.split(':')
    if (parts.length === 2) {
      const port = Number(parts[1])
      if (port > 65535) continue
    }

    out.push(ip)
  }

  return out
}
