const ctxSatisfaction = document.getElementById('satisfactionChart').getContext('2d');
let satisfactionChart;

function generateRandomSatisfactionData(period) {
  let data = [];
  const length = period === 'daily' ? 5 : (period === 'weekly' ? 4 : 3);
  for (let i = 0; i < length; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  return data;
}

function updateSatisfactionChart() {
  const period = document.getElementById('satisfactionPeriod').value;
  const satisfactionValues = generateRandomSatisfactionData(period);
  const labels = {
    daily: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5'],
    weekly: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
    monthly: ['Tháng 1', 'Tháng 2', 'Tháng 3']
  };

  if (satisfactionChart) satisfactionChart.destroy();
  
  satisfactionChart = new Chart(ctxSatisfaction, {
    type: 'line',
    data: {
      labels: labels[period],
      datasets: [{
        label: 'Độ hài lòng (%)',
        data: satisfactionValues,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 3,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true
    }
  });
}

// Khởi tạo đồ thị độ hài lòng
updateSatisfactionChart();