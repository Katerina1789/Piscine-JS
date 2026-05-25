// DOM: createElement creates new HTML elements, append adds them to the page
// setInterval(fn, ms): calls fn repeatedly every ms milliseconds, returns an interval id
// clearInterval(id): stops a setInterval using its id
// dataset: reads and writes custom data-* attributes on elements (e.g. data-foundation="true")
// hasAttribute(): returns true if an element has a given attribute
// remove(): removes an element from the page
// export: makes functions available to be imported by other files
// Modulo (%): brickNumber % 3 === 2 identifies the middle column (bricks 2, 5, 8, 11...)
// Rest parameter (...ids): collects any number of arguments into an array

// bricks tracks all created brick elements so destroy() can find the last one
const bricks = [];

// build creates and appends the given number of bricks to the page one every 100ms
export const build = (amount) => {
  let count = 0;

  // setInterval adds one brick every 100ms until all bricks are built, then stops
  const interval = setInterval(() => {
    count++;

    // create a new div and give it a unique id
    const brick = document.createElement('div');
    brick.id = `brick-${count}`;
    brick.textContent = brick.id;

    // middle column bricks have remainder 2 when divided by 3 (bricks 2, 5, 8, 11...)
    if (count % 3 === 2) brick.dataset.foundation = 'true';

    document.body.append(brick);
    bricks.push(brick);

    // stop the interval once all bricks are built
    if (count === amount) clearInterval(interval);
  }, 100);
};

// repair sets the repaired data attribute on each given brick id
export const repair = (...ids) => {
  // loop through each id, find its element, set repaired based on whether it is a foundation brick
  ids.forEach((id) => {
    const brick = document.getElementById(id);
    if (!brick) return;

    // if the brick has data-foundation it is in the middle column, mark as 'in progress'
    if (brick.hasAttribute('data-foundation')) {
      brick.dataset.repaired = 'in progress';
    } else {
      brick.dataset.repaired = 'true';
    }
  });
};

// destroy removes the last brick from the page and from the bricks array
export const destroy = () => {
  // pop() removes and returns the last element of the array
  const lastBrick = bricks.pop();

  // if there are no bricks left, do nothing
  if (!lastBrick) return;
  lastBrick.remove();
};
