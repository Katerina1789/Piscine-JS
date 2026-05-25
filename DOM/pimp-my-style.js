// classList.add/remove/toggle to cycle through style classes in forward/backward order with unpimp toggle
import { styles } from './pimp-my-style.data.js'

// index tracks which position in the styles array we are at across clicks
let index = 0;
// removing tracks whether we are in the adding or removing phase
let removing = false;

// pimp adds or removes one class per click, toggling unpimp when removing
export const pimp = () => {
  const button = document.querySelector('.button');

  // adding phase: add next class in styles array, move index forward
  if (!removing) {
    button.classList.add(styles[index]);
    index++;

    // when all classes are added, switch to removing phase and toggle unpimp on
    if (index === styles.length) {
      removing = true;
      button.classList.toggle('unpimp');
    }
  } else {
    // removing phase: remove last added class by stepping index back first
    index--;
    button.classList.remove(styles[index]);

    // when all classes are removed, switch back to adding phase and toggle unpimp off
    if (index === 0) {
      removing = false;
      button.classList.toggle('unpimp');
    }
  }
};
