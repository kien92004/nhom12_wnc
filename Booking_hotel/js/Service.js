
$(document).ready(function(){
    fetch('header.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Có lỗi xảy ra:', error));

    // Hàm để tải nội dung của footerfooter
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Có lỗi xảy ra:', error));

    // quaylai
    fetch('quaylai.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('quaylai').innerHTML = data;
    })
    .catch(error => console.error('Có lỗi xảy ra:', error));

    const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
};


let index = 0;
const visibleCount = 2; // Số lượng phần tử muốn hiển thị
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

// Dupliate first two cards for seamless looping
for (let i = 0; i < visibleCount; i++) {
    const clone = cards[i].cloneNode(true);
    slider.appendChild(clone);
}

// Cập nhật tổng số thẻ sau khi sao chép
const newTotalCards = cards.length + visibleCount;

function slide() {
    index++;
    if (index > newTotalCards - visibleCount) {
        index = 0;
        slider.style.transition = 'none'; // Bỏ hiệu ứng chuyển tiếp
        slider.style.transform = 'translateX(0)'; // Đặt lại vị trí
    } else {
        slider.style.transition = 'transform 0.5s ease'; // Thêm hiệu ứng chuyển tiếp
    }
    const offset = -(index * (100 / visibleCount));
    slider.style.transform = `translateX(${offset}%)`;
}

setInterval(slide, 3000);
});
