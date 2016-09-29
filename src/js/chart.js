/* eslint new-cap: 0 */

import Chart from 'chart.js';

const strokeColor = '#666';

const defaultOptions = {
  segmentShowStroke: true,
  segmentStrokeColor: strokeColor,
  segmentStrokeWidth: 1,
  animationEasing: 'easeInOutQuart',
};

if (document.getElementById('system-info')) {
  const canvas = document.getElementById('memory');

  const data = [
    {
      value: canvas.dataset.usedMemoryValue,
      color: strokeColor,
      highlight: '#a4224a',
      label: canvas.dataset.usedMemoryLabel,
    },
    {
      value: canvas.dataset.freeMemoryValue,
      color: 'transparent',
      highlight: '#a4224a',
      label: canvas.dataset.freeMemoryLabel,
    },
  ];

  const options = {
    tooltipTemplate: '<%if (label){%><%=label%>: <%}%><%= value %> MB',
  };

  const context = canvas.getContext('2d');
  new Chart(context).Pie(data, Object.assign({}, defaultOptions, options));
}
