// regex: optional currency symbol/letters + digits + '.' + digits
// without regex we would scan characters and slice around the dot
// good to remember: optional group (...)?: matches when present, skips when absent

// groupPrice: finds all prices and returns [full, integer, decimal] for each
export function groupPrice(str) {
  // ([$A-Za-z]+)? optional currency, (\d+) integer, (\d+) decimal
  const re = /([$A-Za-z]+)?(\d+)\.(\d+)/g

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
console.log('--- given examples ---')
console.log(groupPrice('Given price of USD12.31:'))
// [["USD12.31", "12", "31"]]
console.log(groupPrice('The price of the cereals is $4.00.'))
// [["$4.00", "4", "00"]]

console.log('--- multiple prices ---')
console.log(groupPrice('EUR9.99 and $100.05 and 0.30'))
// [["EUR9.99","9","99"], ["$100.05","100","05"], ["0.30","0","30"]]

console.log('--- edge cases ---')
console.log(groupPrice('no prices here'))   // []
console.log(groupPrice('USD12'))            // [] (no decimal part)

run in Terminal: node group-price.js
*/
