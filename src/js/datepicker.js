import 'jquery-ui/ui/widgets/datepicker';
import 'classlist-polyfill';

window.jQuery.datepicker.regional.de = {
  prevText: 'Zurück',
  nextText: 'Vor',
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mär',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dez'],
  dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  dayNames: [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag'],
};

window.jQuery.datepicker.setDefaults({
  dateFormat: 'dd.mm.yy',
  firstDay: 1,
  duration: 0,
  changeMonth: true,
  changeYear: true,
});

const lang = document.documentElement.lang;

if (lang && lang !== 'en') {
  window.jQuery.datepicker
    .setDefaults(window.jQuery.datepicker.regional.de);
}


Array.from(document.querySelectorAll('input[type=text].date--has-datepicker'))
  .forEach(input => {
    input.maxLength = 10;
    window.jQuery(input).datepicker({
      minDate: input.getAttribute('data-min-date'),
      maxDate: input.getAttribute('data-max-date'),
    });
  });
