if (window.Table2Excel) {
  const Table2Excel = new window.Table2Excel();

  /**
   * automatically adds the export behaviour to buttons marked with the
   * `export-table2-excel` class. Finds the proper table via the
   * data attribute `data-table-id`.
   */
  Array.from(document.querySelectorAll('.button.export-table2excel'))
    .forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();

        const table = document.getElementById(button.dataset.tableId);
        Table2Excel.export(table, table.dataset.excelName);
      });
    });
}
