if (document.getElementById('dump')) {
  Array.from(document.querySelectorAll('button.show'))
    .forEach(button => {
      const pre = button.parentElement.querySelector('pre');

      button.addEventListener('click', () => {
        const w = window.open();
        w.document.body.innerHTML = `<pre>${pre.innerHTML}</pre>`;
      });
    });
}
