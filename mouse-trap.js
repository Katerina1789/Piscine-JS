// addEventListener/removeEventListener: attach and detach event listeners on elements
// mousemove: fires every time the mouse moves, event has clientX and clientY for position
// click: fires every time the mouse clicks
// clientX/clientY: mouse position in pixels relative to the viewport
// getBoundingClientRect(): returns an element's position and size (top, left, right, bottom, width, height)
// style.left/top: positions an absolute element on the page
// removeEventListener: stops a listener from firing, used here to trap a circle inside the box

// circles tracks all created circles so moveCircle can always access the last one
const circles = [];

// setBox creates the trap box centered on the page
export const setBox = () => {
  const box = document.createElement('div');
  box.className = 'box';
  document.body.append(box);
};

// createCircle fires on every click and creates a circle div at the mouse position
export const createCircle = () => {
  document.addEventListener('click', (event) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.background = 'white';

    // position the circle centered on the click position
    circle.style.left = `${event.clientX - 25}px`;
    circle.style.top = `${event.clientY - 25}px`;

    document.body.append(circle);
    circles.push(circle);
  });
};

// moveCircle fires on mousemove and moves the last circle with the mouse, trapping it if inside the box
export const moveCircle = () => {
  document.addEventListener('mousemove', (event) => {
    // if no circles exist yet, do nothing
    if (circles.length === 0) return;

    const circle = circles[circles.length - 1];
    const box = document.querySelector('.box');
    const boxRect = box.getBoundingClientRect();
    const circleSize = 50;

    // calculate boundaries: circle must be strictly inside the box walls (1px border)
    const minX = boxRect.left + 1;
    const minY = boxRect.top + 1;
    const maxX = boxRect.right - circleSize - 1;
    const maxY = boxRect.bottom - circleSize - 1;

    let x = event.clientX - 25;
    let y = event.clientY - 25;

    // check if circle is fully inside the box
    const insideBox = x >= minX && y >= minY && x <= maxX && y <= maxY;

    if (insideBox) {
      // trap the circle: clamp its position inside the box and turn it purple
      circle.style.background = 'var(--purple)';
      circle.style.left = `${Math.min(Math.max(x, minX), maxX)}px`;
      circle.style.top = `${Math.min(Math.max(y, minY), maxY)}px`;

      // remove this circle from the active circles so the next click creates a new one to move
      circles.pop();
    } else {
      // move the circle freely with the mouse
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
    }
  });
};
