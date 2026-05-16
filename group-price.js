// regex: currency letters + digits + '.' + digits
// without regex we would manually scan characters and slice around the dot
// good to remember: capturing groups let us extract sub‑parts cleanly

// groupPrice: finds all prices and returns [full, integer, decimal] for each
export function groupPrice(str) {
  // capture: (currency)(integer)(decimal)
  const re = /([A-Za-z]+)(\d+)\.(\d+)/g

  const out = []
  let m

  // loop through all matches
  while ((m = re.exec(str)) !== null) {
    // m[0] = full match, m[2] = integer, m[3] = decimal
    out.push([m[0], m[2], m[3]])
  }

  return out
}


/*
TESTING:
console.log('--- provided example ---')
console.log(groupPrice('Given price of USD12.31:'))
// [["USD12.31", "12", "31"]]

console.log('--- multiple prices ---')
console.log(groupPrice('EUR9.99 and GBP100.05 and USD0.30'))
// [["EUR9.99","9","99"], ["GBP100.05","100","05"], ["USD0.30","0","30"]]

console.log('--- edge cases ---')
console.log(groupPrice('no prices here'))     // []
console.log(groupPrice('USD12'))              // [] (no decimal part)
console.log(groupPrice('usd12.31'))           // [["usd12.31","12","31"]] (lowercase allowed)

console.log('--- punctuation ---')
console.log(groupPrice('Price: JPY500.00, tax: CAD3.50.'))
// [["JPY500.00","500","00"], ["CAD3.50","3","50"]]

run in Terminal: node group-price.js
*/
