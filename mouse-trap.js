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
    const radius = 25;

    // mouse position is the circle's center point
    const cx = event.clientX;
    const cy = event.clientY;

    // check if circle center is strictly inside the box (accounting for 1px border)
    const insideBox =
      cx > boxRect.left + radius &&
      cx < boxRect.right - radius &&
      cy > boxRect.top + radius &&
      cy < boxRect.bottom - radius;

    if (insideBox) {
      // turn purple once inside
      circle.style.background = 'var(--purple)';
    }

    if (circle.style.background === 'var(--purple)') {
      // clamp the circle center inside the box boundaries
      const clampedX = Math.min(Math.max(cx, boxRect.left + radius), boxRect.right - radius);
      const clampedY = Math.min(Math.max(cy, boxRect.top + radius), boxRect.bottom - radius);
      circle.style.left = `${clampedX - radius}px`;
      circle.style.top = `${clampedY - radius}px`;
    } else {
      // move freely with the mouse
      circle.style.left = `${cx - radius}px`;
      circle.style.top = `${cy - radius}px`;
    }
  });
};
