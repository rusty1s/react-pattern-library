import 'classlist-polyfill';
import cookies from 'cookies-js';

const nav = 'nav.main-nav';
const className = 'opened';
const cookieName = 'open-nav-lists';

function setCookieFromNav() {
  const ids = Array
    .from(document.querySelectorAll(`${nav} span.${className}`))
    .reduce((prev, curr) => `${prev}#${curr.id}`, '');

  cookies.set(cookieName, ids, { expires: 600 });
}

function setNavFromCookie() {
  const value = cookies.get(cookieName);
  if (value && document.querySelector(nav)) {
    const ids = value.split('#');
    ids.shift();  // remove the first empty string element
    ids.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.classList.add(className);
    });
  }
}

Array.from(document.querySelectorAll(`${nav} span`)).forEach(span => {
  span.addEventListener('click', () => {
    span.classList.toggle(className);
    setCookieFromNav();
  });
});

setNavFromCookie();
