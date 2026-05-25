// document.head: reference to the <head> element of the page
// style tag: a <style> element we can inject CSS text into programmatically
// textContent: sets the inner text of an element, used here to write CSS rules as a string
// includes(): returns true if a string contains a given substring, used to filter cold colors
// className: gets or sets the full class string of an element
// classList.replace(old, new): swaps one class for another on an element

import { colors } from './fifty-shades-of-cold.data.js'

// cold color keywords to filter by
const coldKeywords = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];

// generateClasses creates a <style> tag in <head> with one CSS class per color
export const generateClasses = () => {
  const style = document.createElement('style');

  // build one CSS rule per color as a single string and inject it into the style tag
  style.textContent = colors.map((color) => `.${color} { background: ${color}; }`).join('\n');

  document.head.append(style);
};

// generateColdShades creates a div for each cold color with its class and name as text
export const generateColdShades = () => {
  // filter colors to only those whose name contains a cold keyword
  colors
    .filter((color) => coldKeywords.some((keyword) => color.includes(keyword)))
    .forEach((color) => {
      const div = document.createElement('div');
      div.className = color;
      div.textContent = color;
      document.body.append(div);
    });
};

// choseShade replaces the class of every div with the chosen shade
export const choseShade = (shade) => {
  // select all divs and replace each one's class with the chosen shade
  document.querySelectorAll('div').forEach((div) => {
    div.className = shade;
  });
};
