// Converting DNA to RNA means replacing each nucleotide with its complement
// Remember the complement rules:
//   DNA -> RNA
//   G → C
//   C → G
//   T → A
//   A → U


// RNA returns the RNA complement of a DNA strand
export function RNA(dna) {
  // holds the resulting RNA strand
  let out = ''

  // loops through each character of the DNA string
  let i = 0
  while (i < dna.length) {
    const c = dna[i]

    // applies complement rules
    if (c === 'G') out += 'C'
    else if (c === 'C') out += 'G'
    else if (c === 'T') out += 'A'
    else out += 'U' // A → U

    i++
  }

  // returns the RNA strand
  return out
}


// DNA returns the DNA complement of an RNA strand
export function DNA(rna) {
  // holds the resulting DNA strand
  let out = ''

  // loops through each character of the RNA string
  let i = 0
  while (i < rna.length) {
    const c = rna[i]

    // applies complement rules
    if (c === 'C') out += 'G'
    else if (c === 'G') out += 'C'
    else if (c === 'A') out += 'T'
    else out += 'A' // U → A

    i++
  }

  // returns the DNA strand
  return out
}


/*
TESTING:

console.log('--- DNA → RNA ---')
console.log(RNA("GCTA")) // "CGAU"
console.log(RNA("ATCG")) // "UAGC"
console.log(RNA(""))     // ""

console.log('--- RNA → DNA ---')
console.log(DNA("CGAU")) // "GCTA"
console.log(DNA("UAGC")) // "ATCG"
console.log(DNA(""))     // ""

console.log('--- type checks ---')
console.log(typeof RNA("GCTA")) // "string"
console.log(typeof DNA("CGAU")) // "string"

run in Terminal: node ./molecules-cells.js
*/
