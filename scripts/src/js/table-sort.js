/* eslint no-new: 0 */

import Tablesort from 'tablesort';

function cleanNumber(i) {
  return i.replace(/[^\-?0-9.]/g, '');
}

function compareNumber(a, b) {
  let c = parseFloat(a);
  let d = parseFloat(b);

  c = isNaN(c) ? 0 : c;
  d = isNaN(d) ? 0 : d;

  return c - d;
}

Tablesort.extend('number',
  (item) =>
    item.match(/^-?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/) ||
    item.match(/^-?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/) ||
    item.match(/^-?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/),
  (a, b) => compareNumber(cleanNumber(b), cleanNumber(a)));

function setSorting() {
  Array.from(document.querySelectorAll('table.sort:not(.sorted)'))
    .forEach(table => {
      const hasRows = table.querySelector('tbody tr');
      if (hasRows) {
        new Tablesort(table);
        table.classList.add('sorted');

        Array.from(table.querySelectorAll('tbody td input[type="text"]'))
          .forEach(input => {
            input.addEventListener('input', () => {
              input.parentNode.dataset.sort = input.value;
            });
          });
      }
    });
}

setSorting();
window.setSorting = setSorting;
