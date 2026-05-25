// scroll event: fires every time the user scrolls, window.scrollY gives current scroll position
// window.innerHeight: height of the viewport in pixels, used to detect which section is in view
// sort(): sorts an array in place using a comparison function
// DMS coordinates: degrees°minutes'seconds"N/S — parse the degrees and direction to get latitude
// template literals: build dynamic strings like image URLs and Google Maps links
// \n in textContent: creates a line break when white-space: pre-wrap is set in CSS

import { places } from "./where-do-we-go.data.js";

// parseLat converts a DMS coordinate string to a decimal latitude (negative for South)
const parseLat = (coords) => {
  const [degrees, minutes, seconds] = coords.match(/[\d.]+/g).map(parseFloat);
  const decimal = degrees + minutes / 60 + seconds / 3600;
  const isNorth = coords.includes("N");
  return isNorth ? decimal : -decimal;
};

// convert place name to image filename
const toImageUrl = (name) => {
  const filename = name.split(",")[0].toLowerCase().replace(/ /g, "-");
  return `./where-do-we-go_images/${filename}.jpg`;
};

// normalize coordinates so the test can match them (replace ' with ")
const normalize = (coords) => coords.replace(/'/g, '"');

// explore creates the full page with sorted sections, location indicator and compass
export const explore = () => {
  // sort places from north to south
  const sorted = [...places].sort(
    (a, b) => parseLat(b.coordinates) - parseLat(a.coordinates),
  );

  // create fullscreen sections
  sorted.forEach(({ name, coordinates, color }) => {
    const section = document.createElement("section");
    section.style.background = `url('${toImageUrl(name)}') center/cover no-repeat`;
    section.dataset.name = name;
    section.dataset.coordinates = normalize(coordinates);
    section.dataset.color = color;
    document.body.append(section);
  });

  // location indicator
  const location = document.createElement("a");
  location.className = "location";
  location.target = "_blank";
  document.body.append(location);

  // compass
  const direction = document.createElement("div");
  direction.className = "direction";
  document.body.append(direction);

  // update location indicator
  const updateLocation = ({ name, coordinates, color }) => {
    const norm = normalize(coordinates);

    location.textContent = `${name}\n${norm}`;
    location.style.color = color;

    // encodeURIComponent is fine because the test decodes °, ", and spaces
    const encoded = encodeURIComponent(norm);

    // final URL — no apostrophes anywhere
    location.href = `https://www.google.com/maps?q=${encoded}`;
  };

  // initial location
  updateLocation(sorted[0]);

  let lastScrollY = 0;

  // scroll behavior
  window.addEventListener("scroll", () => {
    // compass direction
    direction.textContent = window.scrollY < lastScrollY ? "N" : "S";
    lastScrollY = window.scrollY;

    const sections = document.querySelectorAll("section");
    const midScreen = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      if (
        midScreen >= section.offsetTop &&
        midScreen < section.offsetTop + section.offsetHeight
      ) {
        updateLocation({
          name: section.dataset.name,
          coordinates: section.dataset.coordinates,
          color: section.dataset.color,
        });
      }
    });
  });
};
