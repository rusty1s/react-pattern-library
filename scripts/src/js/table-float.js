import 'floatthead';

Array.from(document.querySelectorAll('table.float thead'))
  .forEach(thead => {
    window.jQuery(thead.parentElement).floatThead();
  });
