export default () => {
  // grab the sections (targets) and menuLinks (triggers)
  // for menu items to apply active link styles to
  const sections = document.querySelectorAll('.nhsuk-side-navigation__section');
  const menuLinks = document.querySelectorAll('.nhsuk-side-navigation__item a');

  // functions to add and remove the active class from links as appropriate
  const makeActive = (link) => menuLinks[link].classList.add('nhsuk-side-navigation__current');
  const removeActive = (link) => menuLinks[link].classList.remove('nhsuk-side-navigation__current');
  const removeAllActive = () => [...Array(sections.length).keys()]
    .forEach((link) => removeActive(link));
  const isNotActive = (link) => !menuLinks[link].classList.contains('nhsuk-side-navigation__current');
  // change the active link a bit above the actual section
  // this way it will change as you're approaching the section rather
  // than waiting until the section has passed the top of the screen
  const sectionMargin = 100;

  // keep track of the currently active link
  // use this so as not to change the active link over and over
  // as the user scrolls but rather only change when it becomes
  // necessary because the user is in a new section of the page
  let currentActive = 0;

  function draw() {
    const current = sections.length - [...sections].reverse()
      .findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;

    // only if the section has changed
    // remove active class from all menu links
    // and then apply it to the link for the current section
    if ((current !== currentActive) || isNotActive(current)) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  }

  // Draw once on page load.
  draw();

  // listen for scroll events
  window.addEventListener('scroll', () => draw());
};
