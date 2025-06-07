$(document).ready(function () {
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
   
  let slides = $(".slider-image");
  let index = 0;

  function showSlide(i) {
    slides.removeClass("active").eq(i).addClass("active");
  }

  setInterval(function () {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000); // đổi ảnh sau mỗi 3 giây
});