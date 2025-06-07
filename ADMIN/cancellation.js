const ctxCancellation = document.getElementById('cancellationChart').getContext('2d');
let cancellationChart;

function generateRandomCancellationData(period) {
  let data = [];
  const length = period === 'daily' ? 5 : (period === 'weekly' ? 4 : 3);
  for (let i = 0; i < length; i++) {
    data.push(Math.floor(Math.random() * 4)); // Số phòng bị hủy tối đa là 3
  }
  return data;
}

function updateCancellationChart() {
  const period = document.getElementById('cancellationPeriod').value;
  const cancellationValues = generateRandomCancellationData(period);
  const labels = {
    daily: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5'],
    weekly: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
    monthly: ['Tháng 1', 'Tháng 2', 'Tháng 3']
  };

  if (cancellationChart) cancellationChart.destroy();
  
  cancellationChart = new Chart(ctxCancellation, {
    type: 'bar',
    data: {
      labels: labels[period],
      datasets: [{
        label: 'Số phòng bị hủy',
        data: cancellationValues,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 3 // Đặt giới hạn tối đa cho trục y
        }
      }
    }
  });
}

// Khởi tạo đồ thị số phòng bị hủy
updateCancellationChart();