if (window.Table2Excel) {
  const Table2Excel = window.Table2Excel;
  const table2excel = new Table2Excel();

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
        table2excel.export(table, table.dataset.excelName);
      });
    });
}
