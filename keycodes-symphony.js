// addEventListener('keydown'): fires a function every time a key is pressed
// event.key: the string value of the pressed key (e.g. 'a', 'Backspace', 'Escape')
// charCodeAt(): returns the ASCII code of a character, used to generate a unique color per letter
// hsl(): CSS color format using hue (0-360), saturation and lightness — maps letter to a unique hue
// querySelectorAll: selects all matching elements, used to clear all notes

// compose registers a keydown listener that adds, removes or clears notes on key press
export const compose = () => {
  document.addEventListener('keydown', (event) => {
    const key = event.key;

    // if key is a single lowercase letter (a-z), create a new note div
    if (key.length === 1 && key >= 'a' && key <= 'z') {
      const div = document.createElement('div');
      div.className = 'note';
      div.textContent = key;

      // generate a unique hue from the letter's ASCII code (a=97 to z=122) mapped to 0-360
      const hue = Math.round(((key.charCodeAt(0) - 97) / 25) * 360);
      div.style.background = `hsl(${hue}, 70%, 50%)`;

      document.body.append(div);
    }

    // if Backspace is pressed, remove the last note
    if (key === 'Backspace') {
      const notes = document.querySelectorAll('.note');
      if (notes.length > 0) notes[notes.length - 1].remove();
    }

    // if Escape is pressed, remove all notes
    if (key === 'Escape') {
      document.querySelectorAll('.note').forEach((note) => note.remove());
    }
  });
};
