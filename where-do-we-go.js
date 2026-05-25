// scroll event: fires every time the user scrolls, window.scrollY gives current scroll position
// window.innerHeight: height of the viewport in pixels, used to detect which section is in view
// sort(): sorts an array in place using a comparison function
// DMS coordinates: degrees°minutes'seconds"N/S — parse the degrees and direction to get latitude
// template literals: build dynamic strings like image URLs and Google Maps links
// \n in textContent: creates a line break when white-space: pre-wrap is set in CSS

import { places } from './where-do-we-go.data.js'

// parseLat converts a DMS coordinate string to a decimal latitude (negative for South)
const parseLat = (coords) => {
  // extract degrees, minutes and seconds from the coordinate string
  const [degrees, minutes, seconds] = coords.match(/[\d.]+/g).map(parseFloat);
  const decimal = degrees + minutes / 60 + seconds / 3600;
  const isNorth = coords.includes('N');
  return isNorth ? decimal : -decimal;
};

// toImageUrl converts a place name to its image filename format (lowercase, spaces to hyphens)
const toImageUrl = (name) => {
  const filename = name.split(',')[0].toLowerCase().replace(/ /g, '-');
  return `./where-do-we-go_images/${filename}.jpg`;
};

// explore creates the full page with sorted sections, location indicator and compass
export const explore = () => {
  // sort places from north (highest latitude) to south (lowest latitude)
  const sorted = [...places].sort((a, b) => parseLat(b.coordinates) - parseLat(a.coordinates));

  // create a fullscreen section for each place with its background image
  sorted.forEach(({ name, coordinates, color }) => {
    const section = document.createElement('section');
    section.style.background = `url('${toImageUrl(name)}') center/cover no-repeat`;
    section.dataset.name = name;
    section.dataset.coordinates = coordinates;
    section.dataset.color = color;
    document.body.append(section);
  });

  // create the fixed location indicator showing name and coordinates
  const location = document.createElement('a');
  location.className = 'location';
  location.target = '_blank';
  document.body.append(location);

  // create the fixed compass showing N or S based on scroll direction
  const direction = document.createElement('div');
  direction.className = 'direction';
  document.body.append(direction);

  // update location indicator with the given place data
  const updateLocation = ({ name, coordinates, color }) => {
    location.textContent = `${name}\n${coordinates}`;
    location.style.color = color;
    location.href = `https://www.google.com/maps?q=${coordinates}`;
  };

  // set initial location to the first (northernmost) place
  updateLocation(sorted[0]);

  let lastScrollY = 0;

  // on scroll: update compass direction and location when a new section reaches mid-screen
  window.addEventListener('scroll', () => {
    // compass shows N when scrolling up, S when scrolling down
    direction.textContent = window.scrollY < lastScrollY ? 'N' : 'S';
    lastScrollY = window.scrollY;

    // find the section whose center is closest to the middle of the viewport
    const sections = document.querySelectorAll('section');
    const midScreen = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      // if the middle of the screen is within this section's vertical range, update location
      if (midScreen >= section.offsetTop && midScreen < section.offsetTop + section.offsetHeight) {
        updateLocation({
          name: section.dataset.name,
          coordinates: section.dataset.coordinates,
          color: section.dataset.color,
        });
      }
    });
  });
};
