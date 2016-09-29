if (document.getElementById('general-logging')
  || document.getElementById('session-logging')) {
  Array.from(document.querySelectorAll('button.show-stacktrace'))
    .forEach(button => {
      const pre = button.parentElement.querySelector('pre');

      button.addEventListener('click', () => {
        const w = window.open();
        w.document.body.innerHTML = `<pre>${pre.innerHTML}</pre>`;
      });
    });
}

if (document.getElementById('logging-download')) {
  const selectAll = document.getElementById('action-select-all');
  const deselectAll = document.getElementById('action-deselect-all');
  const download = document.getElementById('action-download-log');
  const checkboxes = Array.from(document.querySelectorAll('form input'));

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      let allDeselected = true;
      checkboxes.forEach(c => {
        if (c.checked) allDeselected = false;
      });
      download.disabled = allDeselected;
    });
  });

  selectAll.addEventListener('click', event => {
    checkboxes.forEach(checkbox => {
      checkbox.checked = true;
    });
    download.disabled = false;
    event.preventDefault();
  });

  deselectAll.addEventListener('click', event => {
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    download.disabled = true;
    event.preventDefault();
  });
}
