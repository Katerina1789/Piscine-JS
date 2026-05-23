// DOM: the browser turns HTML into a tree of objects we can access with JavaScript
// document.querySelectorAll(selector): returns all elements matching a CSS selector as a NodeList
// document.getElementById(id): returns the single element with that id
// Array.from(): converts a NodeList or HTMLCollection into a real array
// :not(selector): CSS pseudo-class that selects elements that do NOT match the given selector
// export: makes a function available to be imported by other files

// getArchitects returns [architects, nonArchitects] where architects are all <a> tags
export const getArchitects = () => {
  // <a> tags are architects, everything else (spans) are non-architects
  const architects = Array.from(document.querySelectorAll('a'));
  const nonArchitects = Array.from(document.querySelectorAll('span'));
  return [architects, nonArchitects];
};

// getClassical returns [classical, nonClassical] from all architects
export const getClassical = () => {
  // classical architects have class 'classical', non-classical architects do not
  const classical = Array.from(document.querySelectorAll('a.classical'));
  const nonClassical = Array.from(document.querySelectorAll('a:not(.classical)'));
  return [classical, nonClassical];
};

// getActive returns [active, nonActive] from classical architects only
export const getActive = () => {
  // active classical architects have both classes 'classical' and 'active'
  const active = Array.from(document.querySelectorAll('a.classical.active'));
  const nonActive = Array.from(document.querySelectorAll('a.classical:not(.active)'));
  return [active, nonActive];
};

// getBonannoPisano returns [bonannoPisano, remainingActive] from active classical architects
export const getBonannoPisano = () => {
  // getElementById gets the single unique element with that id
  const bonannoPisano = document.getElementById('BonannoPisano');
  // select all active classical architects except BonannoPisano using :not with his id
  const remainingActive = Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'));
  return [bonannoPisano, remainingActive];
};

/*
TESTING:
Open get-them-all.html in the browser and click each button in order:
- "Get Architects" -> all <a> elements show "Architect", spans fade out
- "Get Classical"  -> classical <a> elements show "Classical", others fade out
- "Get Active"     -> active classical <a> elements show "Active", others fade out
- "Get Bonanno"    -> BonannoPisano is highlighted in purple, others fade out
*/
