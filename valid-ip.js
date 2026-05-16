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


/*
  REGEX DICTIONARY FOR VALID IP MATCHING

  IPv4 Octet (0–255, no leading zeros):
    - 25[0-5]       → matches 250–255
    - 2[0-4]\d      → matches 200–249
    - 1\d\d         → matches 100–199
    - [1-9]\d?      → matches 1–99 (no leading zero)
    - 0             → matches 0
    - Combined:
        (25[0-5]|2[0-4]\d|1\d\d|[1-9]\d?|0)

  Word Boundaries:
    - \b ensures we match whole tokens, not inside bigger numbers.
    - Example: \b192\b matches "192" but not "1192" or "1923".

  Optional Group:
    - ( ... )? makes a group optional.
    - Example: /a(bc)?/ matches "a" or "abc".

  Ports (0–65535):
    - :\d{1,5} matches ":" followed by 1–5 digits.
    - Must manually validate ≤ 65535.
    - Example valid: 22, 8080, 65535
    - Example invalid: 70000

  Full IP With Optional Port:
    <octet>.<octet>.<octet>.<octet>(:<port>)?
    Example matches:
      - 233.123.12.234
      - 192.168.1.123:8080
      - 192.169.1.23
      - 10.1.23.7
      - 0.0.0.0:22
*/


export function findIP(str) {
  const octet = '(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d?|0)'

  // Reject IPs inside http:// or https://
  const re = new RegExp(
    `(?<!https?:\\/\\/)\\b${octet}\\.${octet}\\.${octet}\\.${octet}(?::\\d{1,5})?\\b`,
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
