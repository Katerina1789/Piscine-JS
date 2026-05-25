// mousemove: fires on every mouse movement, event has clientX/clientY for position
// click: fires on mouse click, used to copy hsl value to clipboard
// navigator.clipboard.writeText(): copies a string to the clipboard
// createElementNS: creates SVG elements (SVG requires a namespace unlike regular HTML elements)
// setAttribute: sets any attribute on an element, required for SVG line coordinates
// Math.round(): rounds a number to the nearest integer
// hsl(hue, saturation%, luminosity%): CSS color format where hue is 0-360, luminosity is 0-100

// pick sets up the color picker, crosshair SVG lines, and hsl display divs
export const pick = () => {
  // create the hsl display div centered on screen
  const hslDiv = document.createElement('div');
  hslDiv.className = 'hsl';
  document.body.append(hslDiv);

  // create hue display in top right corner
  const hueDiv = document.createElement('div');
  hueDiv.className = 'hue text';
  document.body.append(hueDiv);

  // create luminosity display in bottom left corner
  const lumDiv = document.createElement('div');
  lumDiv.className = 'luminosity text';
  document.body.append(lumDiv);

  // createElementNS is required for SVG elements — SVG uses its own XML namespace
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  // axisX is a vertical line: x1/x2 follow mouse X, y1/y2 span full screen height
  const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisX.id = 'axisX';
  axisX.setAttribute('y1', '0');
  axisX.setAttribute('y2', '100vh');

  // axisY is a horizontal line: y1/y2 follow mouse Y, x1/x2 span full screen width
  const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisY.id = 'axisY';
  axisY.setAttribute('x1', '0');
  axisY.setAttribute('x2', '100vw');

  svg.append(axisX, axisY);
  document.body.append(svg);

  // update colors, displays and crosshair on every mouse movement
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // hue: x position mapped to 0-360, luminosity: y position mapped to 0-100
    const hue = Math.round((x / window.innerWidth) * 360);
    const lum = Math.round((y / window.innerHeight) * 100);
    const hslValue = `hsl(${hue}, 50%, ${lum}%)`;

    // update background and displays
    document.body.style.background = hslValue;
    hslDiv.textContent = hslValue;
    hueDiv.textContent = hue;
    lumDiv.textContent = lum;

    // move crosshair lines to follow the cursor
    axisX.setAttribute('x1', x);
    axisX.setAttribute('x2', x);
    axisY.setAttribute('y1', y);
    axisY.setAttribute('y2', y);
  });

  // copy hsl value to clipboard on click
  document.addEventListener('click', () => {
    navigator.clipboard.writeText(hslDiv.textContent);
  });
};
