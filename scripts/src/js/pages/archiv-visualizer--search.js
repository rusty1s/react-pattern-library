import CustomEvent from 'custom-event';

function addFilter(template, list) {
  const newFilter = template.cloneNode(true);
  newFilter.style.display = '';
  newFilter.removeAttribute('id');
  list.appendChild(newFilter);

  const search = document.getElementById('action-search');
  const exportList = document.getElementById('action-export');

  search.classList.remove('disabled');
  exportList.classList.remove('disabled');

  newFilter.querySelector('a.delete').addEventListener('click', () => {
    newFilter.parentNode.removeChild(newFilter);

    if (list.querySelectorAll('tr:not(#template)').length === 0) {
      search.classList.add('disabled');
      exportList.classList.add('disabled');
    }
  });

  const attribute = newFilter.querySelector('select.attribute');
  const operator = newFilter.querySelector('select.operator');
  const value = newFilter.querySelector('input.value');
  const textarea = newFilter.querySelector('textarea.value');

  // delete the input field on operators that have an arity of 1
  operator.addEventListener('change', () => {
    if (operator.value === 'is null' || operator.value === 'is not null') {
      value.style.display = 'none';
      value.parentNode.classList.remove('input');
    } else {
      value.style.display = '';
      value.parentNode.classList.add('input');
    }
  });

  // change to textarea if operator changed to `in`
  operator.addEventListener('change', () => {
    if (operator.value === 'in') {
      value.style.display = 'none';
      textarea.style.display = '';
    } else {
      textarea.style.display = 'none';
      value.style.display = '';
    }
  });

  attribute.addEventListener('change', () => {
    const type = attribute.options[attribute.selectedIndex]
      .getAttribute('data-type');
    if (type === 'date') {
      value.classList.add('date');
      window.jQuery(value).datepicker();
    } else {
      value.classList.remove('date');
      window.jQuery(value).datepicker('destroy');
    }
  });

  return newFilter;
}

function setMatchingWord(select, text) {
  Array.from(select.options).some((option, index) => {
    if (option.textContent === text) {
      select.selectedIndex = index;
      return true;
    }
    return false;
  });
}

function queryToList(query, template, list) {
  const filters = query.split(' and ');

  filters.forEach(filter => {
    // differentiate between in and the rest
    if (filter.indexOf('(') !== 0) {
      const newFilter = addFilter(template, list);

      const attribute = filter.substring(0, filter.indexOf(' '));
      const operator = filter.substring(
        filter.indexOf(' ') + 1,
        filter.indexOf('\'') === -1 ? filter.length : filter.indexOf('\'') - 1);
      const value = filter.substring(
        filter.indexOf('\'') + 1,
        filter.lastIndexOf('\''));

      setMatchingWord(newFilter.querySelector('select.attribute'), attribute);
      newFilter.querySelector('select.attribute')
        .dispatchEvent(new CustomEvent('change'));
      setMatchingWord(newFilter.querySelector('select.operator'), operator);
      newFilter.querySelector('select.operator')
        .dispatchEvent(new CustomEvent('change'));
      newFilter.querySelector('input.value').value = value;
    } else {
      const inFilters = filter.slice(1, -1).split(' or ');

      if (inFilters.length > 0) {
        const newFilter = addFilter(template, list);

        const attribute = inFilters[0].substring(0, filter.indexOf(' '));

        setMatchingWord(newFilter.querySelector('select.attribute'), attribute);
        newFilter.querySelector('select.attribute')
          .dispatchEvent(new CustomEvent('change'));
        setMatchingWord(newFilter.querySelector('select.operator'), 'in');
        newFilter.querySelector('select.operator')
          .dispatchEvent(new CustomEvent('change'));

        const textarea = newFilter.querySelector('textarea.value');

        inFilters.forEach((filter, index) => {
          const value = filter.slice(filter.indexOf('=')+3, -1);
          textarea.value += value;
          if (index + 1 < inFilters.length) textarea.value += '\n';
        });
      }
    }
  });
}

function listToQuery(list) {
  let query = '';

  Array.from(list).forEach(child => {
    const attributeEl = child.querySelector('select.attribute');
    const operatorEl = child.querySelector('select.operator');

    const attribute = attributeEl.options[Math.max(attributeEl.selectedIndex, 0)].textContent;
    const operator = operatorEl.options[Math.max(operatorEl.selectedIndex, 0)].textContent;

    if (operator !== 'in') {
      query += attribute;
      query += ' ';
      query += operator;
      if (operator !== 'is null' && operator !== 'is not null') {
        query += ` '${child.querySelector('input.value').value}'`;
      }

    } else {
      console.log(child.querySelector('textarea.value').value);
      const values = child.querySelector('textarea.value').value.split('\n');
      console.log(values);

      query += '(';
      values.forEach(value => {
        query += attribute;
        query += ' = ';
        query += `'${value}'`;
        query += ' or '
      });
      query = query.slice(0, -4);
      query += ')';
    }

    query += ' and ';
  });

  return query.slice(0, -5);
}

function checkboxesToQuery(checkboxes) {
  let query = '';

  Array.from(checkboxes).forEach(checkbox => {
    if (checkbox.checked) {
      query += checkbox.value;
      query += ',';
    }
  });

  if (query.length > 0) query = query.slice(0, -1);

  return query;
}

function queryToCheckboxes(query) {
  Array.from(document.querySelectorAll('#relevant-attributes input'))
    .forEach(checkbox => {
      checkbox.checked = false;
    });

  query.split(',').forEach(value => {
    document.getElementById(`selector-${value}`).checked = true;
  });
}

if (document.getElementById('archiv-visualizer-search')
  && document.getElementById('filter-list')) {
  const list = document.getElementById('filter-list');
  const template = document.getElementById('template');

  document.getElementById('action-create-new-filter')
    .addEventListener('click', () => {
      addFilter(template, list);
    });

  const search = document.getElementById('action-search');
  search.addEventListener('click', () => {
    if (!search.classList.contains('disabled')) {
      let url = document.getElementById('search-url').textContent;
      url += '?query=';
      url += listToQuery(list.querySelectorAll('tr:not(#template)'));
      url += '&maxHits=';
      url += document.getElementById('max-hits').value;
      url += '&relevantAttributeList=';
      url += checkboxesToQuery(
        document.querySelectorAll('#relevant-attributes input')
      );

      window.location.href = url;
    }
  });

  const exportList = document.getElementById('action-export');
  exportList.addEventListener('click', () => {
    if (!exportList.classList.contains('disabled')) {
      let url = document.getElementById('export-url').textContent;
      url += '?query=';
      url += listToQuery(list.querySelectorAll('tr:not(#template)'));
      url += '&maxHits=';
      url += document.getElementById('max-hits').value;
      url += '&relevantAttributeList=';
      url += checkboxesToQuery(
        document.querySelectorAll('#relevant-attributes input')
      );
      window.location.href = url;
    }
  });

  const oldQuery = document.getElementById('old-query');
  if (oldQuery && oldQuery.textContent.trim().length > 0) {
    queryToList(oldQuery.textContent, template, list);
  }

  const oldRelevantAttributes = document
    .getElementById('old-relevant-attributes');
  if (oldRelevantAttributes) {
    queryToCheckboxes(oldRelevantAttributes.textContent);
  }
}
