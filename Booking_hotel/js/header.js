$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top-blog').fadeIn(); // Hiện nút khi cuộn xuống
    } else {
        $('.back-to-top-blog').fadeOut(); // Ẩn nút khi ở đầu trang
    }
});

$('.back-to-top-blog').click(function(e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định
    $('html, body').animate({scrollTop: 0}, 600); // Cuộn về đầu trang
});