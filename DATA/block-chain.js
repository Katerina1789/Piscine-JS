/*
TESTING:
const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36)
*/


// blockChain takes data and the previous block (defaults to the first block)
// it returns a new block object containing index, hash, data, prev and a chain() method
const blockChain = (data, prev = { index: 0, hash: '0' }) => {

// index is the block number: always one more than the previous block’s index
const index = prev.index + 1; 

// hashInput is the full string we will hash: index + previous hash + stringified data
const hashInput = index + prev.hash + JSON.stringify(data);

// hash is the unique fingerprint of this block, created from hashInput
const hash = hashCode(hashInput);

// block is the actual block object that stores all block data and behavior
const block = {
  index, // the block’s position in the chain
  hash,  // the block’s unique ID based on its contents
  data,  // the JSON data stored inside this block
  prev,  // the previous block, linking this block to the chain 

  // chain creates the next block, using THIS block as the previous one
  chain(nextData) {
    return blockChain(nextData, block);
  },
};

// returns the complete block object
  return block;
};


/*
TESTING:
const first = blockChain({ a: 1 });
console.log(first.index); // 1
console.log(first.data);  // { a: 1 }
console.log(first.prev);  // { index: 0, hash: "0" }
console.log(first.hash);  // '1103f27'
console.log(hashCode('10{"a":1}')); // '1103f27'

const second = first.chain({ hello: 'world' });
console.log(second.hash); // '18drvvc'
console.log(hashCode('21103f27{"hello":"world"}')); // '18drvvc'

const chain = second
  .chain({ value: 4455 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' });

const fork = second
  .chain({ value: 335 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' });

console.log(chain.hash);  // '1qr3qfs'
console.log(fork.hash);   // '1x9gsc1'
console.log(chain.index); // 5
console.log(fork.index);  // 5

run in Terminal: node ./block-chain.js 
*/
