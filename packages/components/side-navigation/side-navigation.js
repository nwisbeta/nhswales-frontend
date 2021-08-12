export default () => {
  // grab the sections (targets) and menuLinks (triggers)
  // for menu items to apply active link styles to
  const menu = document.querySelector('.nhsuk-side-navigation-options');
  const spacer = document.querySelector('.nhsuk-side-navigation-spacer');
  const header = document.querySelector('.nhsuk-header__container');
  const sections = document.querySelectorAll('.nhsuk-side-navigation__section');
  const menuLinks = document.querySelectorAll('.nhsuk-side-navigation__item a');
  // functions to add and remove the active class from links as appropriate
  const makeActive = (link) => { if (link !== undefined) menuLinks[link].classList.add('nhsuk-side-navigation__current'); };
  const removeActive = (link) => menuLinks[link].classList.remove('nhsuk-side-navigation__current');
  const removeAllActive = () => [...Array(sections.length).keys()]
    .forEach((link) => removeActive(link));
  const makeFixed = (dom) => dom.classList.add('nhsuk-side-navigation-fixed');
  const removeFixed = (dom) => dom.classList.remove('nhsuk-side-navigation-fixed');
  // change the active link a bit above the actual section
  // this way it will change as you're approaching the section rather
  // than waiting until the section has passed the top of the screen
  const sectionMargin = 100;

  function drawSidebar() {
    if (window.scrollY - 20 >= (header.offsetTop + 1)) {
      makeFixed(menu);
      removeFixed(spacer);
    } else {
      removeFixed(menu);
      makeFixed(spacer);
    }
  }

  function draw() {
    const current = sections.length - [...sections].reverse()
      .findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;

    drawSidebar();

    // only if the section has changed
    // remove active class from all menu links
    // and then apply it to the link for the current section
    removeAllActive();
    makeActive(current);
  }

  drawSidebar();

  // listen for scroll events
  window.addEventListener('scroll', () => draw());
};
