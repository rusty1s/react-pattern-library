if (document.getElementById('archiv-visualizer-resultlist')
  && document.getElementById('resultlist')) {
  const resultlist = document.getElementById('resultlist');
  const checkboxes = Array
    .from(resultlist.querySelectorAll('input[type="checkbox"]'));
  const save = document.getElementById('action-save');
  const saveTop = document.getElementById('action-save');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      checkbox.parentNode.parentNode.classList
        .toggle('checked', checkbox.checked);
    });
  });

  document.getElementById('action-select-all').addEventListener('click', () => {
    checkboxes.forEach(checkbox => {
      checkbox.checked = true;
      checkbox.parentNode.parentNode.classList.add('checked');
    });
  });

  document.getElementById('action-deselect-all')
    .addEventListener('click', () => {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.parentNode.parentNode.classList.remove('checked');
      });
    });

  window.jQuery('input.date').datepicker({
    onSelect() {
      this.parentNode.parentNode.classList.add('dirty');
      this.parentNode.classList.add('dirty');
      save.classList.remove('disabled');
      saveTop.classList.remove('disabled');
    },
  });

  Array.from(document.querySelectorAll('input.date')).forEach(input => {
    const split = input.value.split('-');
    if (split.length === 3) {
      input.value = `${split[2]}.${split[1]}.${split[0]}`;
    }
  });

  Array.from(document.querySelectorAll('td.date')).forEach(td => {
    const split = td.textContent.split('-');
    if (split.length === 3) {
      td.textContent = `${split[2]}.${split[1]}.${split[0]}`;
    }
  });

  Array.from(document.querySelectorAll('a.button.apply')).forEach(button => {
    button.addEventListener('click', () => {
      const value = button.parentNode.querySelector('input').value;
      const className = button.parentNode.dataset.attribute;

      Array.from(resultlist
        .querySelectorAll(`tr.checked .${className} input`))
        .forEach(input => {
          input.value = value;
          input.parentNode.parentNode.classList.add('dirty');
          input.parentNode.classList.add('dirty');
          save.classList.remove('disabled');
          saveTop.classList.remove('disabled');
        });
    });
  });

  Array.from(resultlist
    .querySelectorAll('tbody input[type="text"]'))
    .forEach(input => {
      input.addEventListener('input', () => {
        input.parentNode.parentNode.classList.add('dirty');
        input.parentNode.classList.add('dirty');
        save.classList.remove('disabled');
        saveTop.classList.remove('disabled');
      });
    });

  saveTop.addEventListener('click', () => {
    save.click();
  });

  save.addEventListener('click', () => {
    if (!save.classList.contains('disabled')) {
      const data = {
        failedCountLimit: document.getElementById('max-errors').value,
        documents: [],
      };

      Array.from(resultlist.querySelectorAll('tr.dirty')).forEach(document => {
        const json = {
          docId: {
            repositoryId: document.dataset.repId,
            documentId: document.dataset.docId,
          },
          attributes: {},
          indexingAttributes: [],
        };

        Array.from(document.querySelectorAll('input[type="text"]'))
          .forEach(input => {
            const attribute = input.parentElement.dataset.attribute;

            json.attributes[attribute] = input.value;

            if (input.parentElement.classList.contains('dirty')) {
              json.indexingAttributes.push(attribute);
            }
          });

        data.documents.push(json);
      });

      window.jQuery.ajax({
        data: JSON.stringify(data),
        url: document.getElementById('save-url').textContent,
        type: 'PUT',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success(r) {
          if (r.errorCount === 0) {
            window.showSuccessfullySavedPopup();
          } else {
            Array.from(resultlist.querySelectorAll('tbody tr')).forEach(row => {
              row.classList.remove('error');
              row.classList.remove('inviolate');
            });

            r.errors.forEach(error => {
              const docId = error.document.docId;
              const id = `${docId.repositoryId}-${docId.documentId}`;
              const row = document.getElementById(id);
              row.classList.add('error');
            });

            r.inviolates.forEach(inviolate => {
              const docId = inviolate.docId;
              const id = `${docId.repositoryId}-${docId.documentId}`;
              const row = document.getElementById(id);
              row.classList.add('inviolate');
            });

            Array.from(resultlist.querySelectorAll('tbody tr')).forEach(row => {
              if (
                !row.classList.contains('error') &&
                !row.classList.contains('inviolate')
              ) {
                row.parentNode.removeChild(row);
              }
            });

            document.getElementById('error-count').textContent = r.errorCount;
            document.getElementById('error-list').innerHTML = '';

            r.errors.forEach(error => {
              const entry = document.createElement('li');
              const docId = error.document.docId;
              let msg = `<b>${docId.documentId} (${docId.repositoryId}):</b> `;
              msg += error.errorText;
              entry.innerHTML = msg;
              document.getElementById('error-list').appendChild(entry);
            });

            document.getElementById('error-message').style.display = 'block';
            window.jQuery(resultlist).floatThead('reflow');
          }
        },
        error() {
          window.showUnknownErrorPopup();
        },
      });
    }
  });
}
