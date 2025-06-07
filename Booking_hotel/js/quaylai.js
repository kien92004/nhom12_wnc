$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top-blog').fadeIn(); // Hiện nút khi cuộn xuống
        } else {
            $('.back-to-top-blog').fadeOut(); // Ẩn nút khi ở đầu trang
        }
    });

    $(document).on('click', '.back-to-top-blog', function(e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định
        $('html, body').animate({scrollTop: 0}, 600); // Cuộn về đầu trang
    });
});