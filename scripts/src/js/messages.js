const title = document.querySelector('.content h2');
const nav = document.querySelector('.content nav');
const element = title || nav;

if (element) {
  Array.from(document.querySelectorAll('.message')).forEach(message => {
    element.parentNode.insertBefore(message, element.nextSibling);
  });
}
