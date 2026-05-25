// createElement, append, style, textContent, Math.random, String.fromCharCode to generate random uppercase letters

// generateLetters creates 120 divs with random uppercase letters, growing font-size and increasing font-weight
export const generateLetters = () => {
  // 120 letters, font-size grows from 11 to 130px — calculate step size per letter
  const totalLetters = 120;
  const minSize = 11;
  const maxSize = 130;
  const sizeStep = (maxSize - minSize) / (totalLetters - 1);

  // loop 120 times, creating one div per iteration
  for (let i = 0; i < totalLetters; i++) {
    const div = document.createElement('div');

    // String.fromCharCode(65-90) gives uppercase A-Z, Math.random picks one randomly
    div.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26));

    // font-size grows evenly from 11px to 130px across all 120 letters
    div.style.fontSize = `${Math.round(minSize + i * sizeStep)}px`;

    // first third (0-39) -> 300, second third (40-79) -> 400, last third (80-119) -> 600
    if (i < 40) div.style.fontWeight = '300';
    else if (i < 80) div.style.fontWeight = '400';
    else div.style.fontWeight = '600';

    document.body.append(div);
  }
};