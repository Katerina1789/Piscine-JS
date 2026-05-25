// createElement: creates new HTML elements to add to the page
// input type="range": a slider input with min, max and value attributes
// addEventListener('submit'): fires when a form is submitted, preventDefault stops page reload
// addEventListener('input'): fires every time a range slider value changes
// querySelectorAll: selects all matching elements to apply style changes across all cards
// hsl(): CSS color format, used here to control background lightness via slider

import { gossips } from './gossip-grid.data.js'

// grid creates and displays all gossip cards, the form card, and the range controls
export const grid = () => {
  // create the ranges container fixed at the top
  const rangesDiv = document.createElement('div');
  rangesDiv.className = 'ranges';

  // helper to create a labeled range input with min, max and default value
  const createRange = (id, min, max, value) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'range';

    const label = document.createElement('label');
    label.textContent = id;
    label.htmlFor = id;

    const input = document.createElement('input');
    input.type = 'range';
    input.id = id;
    input.className = 'range';
    input.min = min;
    input.max = max;
    input.value = value;

    const span = document.createElement('span');
    span.textContent = value;

    wrapper.append(label, input, span);
    return { wrapper, input, span };
  };

  const widthRange = createRange('width', 200, 800, 250);
  const fontRange = createRange('fontSize', 20, 40, 20);
  const bgRange = createRange('background', 20, 75, 50);

  rangesDiv.append(widthRange.wrapper, fontRange.wrapper, bgRange.wrapper);
  document.body.append(rangesDiv);

  // helper to apply current range values to all gossip cards
  const applyStyles = () => {
    document.querySelectorAll('.gossip').forEach((card) => {
      card.style.width = `${widthRange.input.value}px`;
      card.style.fontSize = `${fontRange.input.value}px`;
      card.style.background = `hsl(280, 50%, ${bgRange.input.value}%)`;
    });
  };

  // update span display and apply styles on every slider change
  widthRange.input.addEventListener('input', () => { widthRange.span.textContent = widthRange.input.value; applyStyles(); });
  fontRange.input.addEventListener('input', () => { fontRange.span.textContent = fontRange.input.value; applyStyles(); });
  bgRange.input.addEventListener('input', () => { bgRange.span.textContent = bgRange.input.value; applyStyles(); });

  // create the form card as the first gossip card
  const form = document.createElement('form');
  form.className = 'gossip';

  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Share your gossip...';

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Share gossip!';

  form.append(textarea, button);
  document.body.append(form);

  // on submit: add new gossip card after the form, clear textarea, apply styles
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!textarea.value.trim()) return;

    const card = createCard(textarea.value);
    form.after(card);
    textarea.value = '';
    applyStyles();
  });

  // create a gossip div card with given text
  const createCard = (text) => {
    const card = document.createElement('div');
    card.className = 'gossip fade-in';
    card.textContent = text;
    return card;
  };

  // create a card for each existing gossip and append to body
  gossips.forEach((gossip) => {
    document.body.append(createCard(gossip));
  });

  // apply initial styles to all cards
  applyStyles();
};
