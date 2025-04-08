
window.addEventListener('DOMContentLoaded', () => {
  const chartData = [
    { id: 'AbercombiePieChart', data: [74.24, 15.03, 9.92, 0.81] },
    { id: 'HobbPieChart', data: [77.36, 14.7, 7.80, 0.07] },
    { id: 'JordanPieChart', data: [75.64, 14.57, 8.7, 1.01] },
    { id: 'LeGuinPieChart', data: [77.25, 11.25, 11.2, 0.30] },
    { id: 'MartinPieChart', data: [76.14, 13.48, 10.02, 0.36] },
    { id: 'PratchettPieChart', data: [71.16, 16.65, 11.37, 0.81] },
    { id: 'SandersonPieChart', data: [70.15, 17.42, 9.39, 3.05] },
    { id: 'TolkienPieChart', data: [78.77, 11.75, 8.93, 0.54] },
    { id: 'YarrosPieChart', data: [74.35, 16.10, 8.54, 1.01] },
    { id: 'ZelaznyPieChart', data: [75.81, 15.94, 7.95, 0.30] }
  ];

  chartData.forEach(({ id, data }) => {
    const canvas = document.getElementById(id);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Germanic', 'Latin', 'Greek', 'Other'],
        datasets: [{
          label: 'Project Focus',
          data: data,
          backgroundColor: ['#f87171', '#60a5fa', '#facc15', '#808080'],
          borderColor: ['#ef4444', '#3b82f6', '#eab308', '#A9A9A9'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  });
});



window.addEventListener('DOMContentLoaded', () => {
  const rawData = {
   "2007": {
    "Latin": 14.83,
    "Germanic": 74.07,
    "Greek": 9.52,
    "Not in dict": 0.92,
    "Unknown": 0.66
  },
  "2008": {
    "Latin": 15.04,
    "Germanic": 73.4,
    "Not in dict": 0.79,
    "Greek": 9.96,
    "Unknown": 0.82
  },
  "2006": {
    "Germanic": 73.35,
    "Latin": 14.81,
    "Greek": 10.0,
    "Unknown": 0.94,
    "Not in dict": 0.89
  },
  "1995": {
    "Latin": 15.54,
    "Greek": 7.94,
    "Germanic": 76.03,
    "Not in dict": 0.41,
    "Unknown": 0.08
  },
  "1996": {
    "Germanic": 75.98,
    "Latin": 13.72,
    "Greek": 8.86,
    "Not in dict": 1.18,
    "Unknown": 0.26
  },
  "1997": {
    "Greek": 7.43,
    "Germanic": 77.06,
    "Latin": 15.02,
    "Not in dict": 0.4,
    "Unknown": 0.1
  },
  "1991": {
    "Greek": 8.84,
    "Latin": 14.38,
    "Germanic": 74.39,
    "Not in dict": 1.22,
    "Unknown": 1.17
  },
  "1990": {
    "Greek": 9.13,
    "Latin": 13.82,
    "Germanic": 74.99,
    "Not in dict": 1.1,
    "Unknown": 0.96
  },
  "1993": {
    "Greek": 8.0,
    "Germanic": 74.62,
    "Latin": 14.65,
    "Not in dict": 1.68,
    "Unknown": 1.05
  },
  "1992": {
    "Latin": 14.93,
    "Germanic": 74.18,
    "Greek": 8.43,
    "Not in dict": 1.57,
    "Unknown": 0.9
  },
  "1968": {
    "Germanic": 77.65,
    "Latin": 10.92,
    "Greek": 10.6,
    "Not in dict": 0.62,
    "Unknown": 0.21
  },
  "1972": {
    "Greek": 9.44,
    "Germanic": 76.59,
    "Latin": 13.28,
    "Not in dict": 0.41,
    "Unknown": 0.28
  },
  "1970": {
    "Greek": 9.81,
    "Germanic": 76.08,
    "Latin": 13.34,
    "Unknown": 0.41,
    "Not in dict": 0.37
  },
  "1998": {
    "Greek": 9.85,
    "Germanic": 74.71,
    "Latin": 13.15,
    "Not in dict": 1.92,
    "Unknown": 0.37
  },
  "2011": {
    "Greek": 10.0,
    "Germanic": 74.13,
    "Latin": 13.45,
    "Not in dict": 2.27,
    "Unknown": 0.16
  },
  "2005": {
    "Greek": 9.6,
    "Germanic": 74.46,
    "Latin": 13.55,
    "Not in dict": 1.95,
    "Unknown": 0.43
  },
  "2000": {
    "Greek": 9.66,
    "Germanic": 75.24,
    "Latin": 12.7,
    "Not in dict": 2.02,
    "Unknown": 0.38
  },
  "1987": {
    "Germanic": 72.25,
    "Latin": 15.79,
    "Not in dict": 1.09,
    "Greek": 10.66,
    "Unknown": 0.21
  },
  "1983": {
    "Greek": 12.25,
    "Germanic": 68.59,
    "Latin": 17.44,
    "Not in dict": 0.57,
    "Unknown": 1.15
  },
  "1986": {
    "Germanic": 71.07,
    "Greek": 10.79,
    "Latin": 16.24,
    "Unknown": 1.18,
    "Not in dict": 0.72
  },
  "2017": {
    "Germanic": 69.42,
    "Unknown": 2.96,
    "Latin": 17.41,
    "Greek": 9.88,
    "spren": 0.21,
    "Not in dict": 0.12
  },
  "2020": {
    "Germanic": 68.99,
    "Latin": 18.25,
    "Greek": 9.34,
    "Unknown": 2.66,
    "Not in dict": 0.44,
    "spren": 0.32
  },
  "2010": {
    "Unknown": 2.85,
    "Latin": 16.81,
    "Greek": 9.63,
    "Germanic": 70.3,
    "Not in dict": 0.34,
    "spren": 0.07
  },
  "2024": {
    "Germanic": 70.08,
    "Greek": 8.64,
    "Unknown": 3.02,
    "Latin": 17.56,
    "Not in dict": 0.45,
    "spren": 0.24
  },
  "2014": {
    "Germanic": 70.96,
    "Unknown": 2.71,
    "Latin": 16.56,
    "Greek": 9.41,
    "Not in dict": 0.28,
    "spren": 0.09
  },
  "1954": {
    "Greek": 8.69,
    "Germanic": 77.24,
    "Latin": 11.62,
    "Not in dict": 1.96,
    "Unknown": 0.5
  },
  "1955": {
    "Latin": 11.3,
    "Not in dict": 1.97,
    "Germanic": 77.2,
    "Greek": 8.9,
    "Unknown": 0.63
  },
  "2023": {
    "Latin": 15.92,
    "Germanic": 73.51,
    "Greek": 8.44,
    "Not in dict": 1.13,
    "Unknown": 0.99
  },
  "1975": {
    "Latin": 17.68,
    "Germanic": 73.91,
    "Greek": 7.85,
    "Unknown": 0.26,
    "Not in dict": 0.31
  }
  };

// Step 1: Sort and extract
  const sortedYears = Object.keys(rawData).sort((a, b) => a - b).map(Number);
  const extractValues = (key) => sortedYears.map(year => rawData[year][key]);

  // Step 2: Normalize helper
const normalize = (arr, min = null, max = null) => {
  if (min === null) min = Math.min(...arr);
  if (max === null) max = Math.max(...arr);
  const values = arr.map(v => ((v - min) / (max - min)) * 100);
  return { values, min, max };
};


  // Step 3: Linear regression
  const getBestFitLine = (x, y) => {
    const n = x.length;
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
    const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return x.map(xi => slope * xi + intercept);
  };

  const colors = {
    Germanic: '#3b82f6',
    Latin: '#f87171',
    Greek: '#facc15'
  };

  const createLineChart = (canvasId, label, color, dataObj, regressionObj) => {
    const { values, min, max } = dataObj;
    const { values: regValues } = regressionObj;

    const ctx = document.getElementById(canvasId).getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: sortedYears,
        datasets: [
          {
            label: label,
            data: values,
            fill: false,
            borderColor: color,
            backgroundColor: color,
            tension: 0.3,
            pointRadius: 5,
            pointHoverRadius: 7
          },
          {
            label: `${label} Best Fit`,
            data: regValues,
            fill: false,
            borderColor: '#999',
            borderDash: [5, 5],
            pointRadius: 0,
            pointHoverRadius: 0,
            tension: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: { display: true, text: 'Year' },
            ticks: { precision: 0 }
          },
          y: {
            title: { display: true, text: `${label} (%)` },
            min: 0,
            max: 100,
            ticks: {
              callback: function(value) {
                const actual = min + (value / 100) * (max - min);
                return actual.toFixed(2) + '%';
              }
            }
          }
        },
        plugins: {
          legend: { display: true, position: 'top' }
        }
      }
    });
  };

  // Germanic
  const rawGermanic = extractValues('Germanic');
  const normGermanic = normalize(rawGermanic); // get min & max
  const regGermanic = normalize(getBestFitLine(sortedYears, rawGermanic), normGermanic.min, normGermanic.max);

  createLineChart('germanicLineChart', 'Germanic', colors.Germanic, normGermanic, regGermanic);


  // Latin
  const rawLatin = extractValues('Latin');
  const normLatin = normalize(rawLatin);
  const regLatin = normalize(getBestFitLine(sortedYears, rawLatin), normLatin.min, normLatin.max);
	
  createLineChart('latinLineChart', 'Latin', colors.Latin, normLatin, regLatin);

  const rawGreek = extractValues('Greek');
  const normGreek = normalize(rawGreek);
  const regGreek = normalize(getBestFitLine(sortedYears, rawGreek), normGreek.min, normGreek.max);
  
  createLineChart('greekLineChart', 'Greek', colors.Greek, normGreek, regGreek);


});
  
<script src="avgWordsData.js"></script>
<canvas id="avgWordsChart"></canvas>

<script>
  const ctx = document.getElementById('avgWordsChart').getContext('2d');
  const labels = Object.keys(avgWordsData);
  const data = Object.values(avgWordsData);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Average Words per Song',
        data,
        borderColor: '#1da1f2',
        backgroundColor: '#bae6fd',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: 'Year' } },
        y: { title: { display: true, text: 'Words' } }
      }
    }
  });
</script>


