const ctxProfit = document.getElementById('profitChart').getContext('2d');
let profitChart;

function generateRandomProfit(period) {
  let data = [];
  const length = period === 'daily' ? 5 : (period === 'weekly' ? 4 : 3);
  for (let i = 0; i < length; i++) {
    data.push(Math.floor(Math.random() * 5000000) + 100000);
  }
  return data;
}

function updateProfitChart() {
  const period = document.getElementById('profitPeriod').value;
  const profitValues = generateRandomProfit(period);
  const labels = {
    daily: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5'],
    weekly: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
    monthly: ['Tháng 1', 'Tháng 2', 'Tháng 3']
  };

  if (profitChart) profitChart.destroy();
  
  profitChart = new Chart(ctxProfit, {
    type: 'line',
    data: {
      labels: labels[period],
      datasets: [{
        label: 'Lợi nhuận (vnd)',
        data: profitValues,
        backgroundColor: 'rgba(13,110,253,0.2)',
        borderColor: 'rgba(13,110,253,1)',
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

// Khởi tạo đồ thị lợi nhuận
updateProfitChart();