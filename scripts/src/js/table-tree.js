import 'jquery-treetable';

Array.from(document.querySelectorAll('table.tree'))
  .forEach(table => {
    const hasRows = table.querySelector('tbody tr');
    if (hasRows) {
      window.jQuery(table).treetable({
        expandable: false,
        initialState: 'expanded',
        nodeIdAttr: 'id',
        parentIdAttr: 'parentId',
        expanderTemplate: '<span class="expander"></span>',
        indent: 20,
      });
    }
  });
