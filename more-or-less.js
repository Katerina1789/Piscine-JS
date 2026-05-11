// functions must return the same type they receive (part of the good practices)
// more: takes 1 argument and adds 1 to it
// functions transform input => output
const more = (n) => n + 1;

/*
Equal to in Go:

func more(n int) int {
  return n + 1
}
*/

// less: takes 1 argument and subtracts 1 from it
const less = (n) => n - 1;

// add: takes 2 arguments and adds them together
// arguments are separated by commas
const add = (a, b) => a + b;

// sub: takes 2 arguments and subtracts the second from the first
const sub = (a, b) => a - b;
