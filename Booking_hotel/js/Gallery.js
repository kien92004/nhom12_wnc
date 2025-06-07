$(document).ready(function() {
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



    // Ẩn tất cả nội dung tab và hiển thị tab hiện tại
    $('.tab-content').hide();
    $('.tab-content.current').show();
    
     // Chuyển đổi giữa các tab khi người dùng nhấp vào
    $('.list__tabs').click(function() {
        const target = $(this).data('tab');
        
        $('.list__tabs').removeClass('current');
        $(this).addClass('current');
        
        $('.tab-content').removeClass('current').hide();
        $('#' + target).addClass('current').show();
    });
    
     // Chức năng khi nhấp vào biểu tượng hình ảnh
    let currentGalleryImages = [];
    
    $('.gallery__icon').on('click', function(e) {
        e.preventDefault();
        const imgSrc = $(this).attr('href');
        currentGalleryImages = [];
        
        // Thêm tất cả hình ảnh trong tab hiện tại vào mảng
        const currentTab = $(this).closest('.tab-content.current');
        currentTab.find('.gallery__icon').each(function() {
            currentGalleryImages.push($(this).attr('href'));
        });
        
        openModal(imgSrc);
    });

     // Hàm mở modal và thiết lập hình ảnh
    function openModal(imgSrc) {
        $('.fullscreen img').attr('src', imgSrc);
        $('.fullscreen').fadeIn();
        
        // Ngăn cuộn nội dung khi phương thức đang mở
        $('body').css('overflow', 'hidden');
    }
     // Đóng modal khi nhấp vào nút đóng 
    $('.close').click(function() {
        closeModal();
    });
    // Đóng modal khi nhấp ngoài hình ảnh trong modal
    $('.fullscreen').click(function(e) {
        if ($(e.target).hasClass('fullscreen')) {
            closeModal();
        }
    });
     // Hàm đóng modal
    function closeModal() {
        $('.fullscreen').fadeOut();
        $('body').css('overflow', 'auto');
    }
    
    // Điều hướng giữa các hình ảnh trong modal
    $('.arrow').on('click', function(e) {
        e.stopPropagation();
        
        const currentSrc = $('.fullscreen img').attr('src');
        let currentIndex = currentGalleryImages.indexOf(currentSrc);
        
        if ($(this).hasClass('right')) {
            currentIndex = (currentIndex + 1) % currentGalleryImages.length;
        } else {
            currentIndex = (currentIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        }
        
        $('.fullscreen img').attr('src', currentGalleryImages[currentIndex]);
    });
    
   // Điều hướng bằng bàn phím trong modal 
    $(document).keydown(function(e) {
        if ($('.fullscreen').is(':visible')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowRight') {
                $('.arrow.right').click();
            } else if (e.key === 'ArrowLeft') {
                $('.arrow.left').click();
            }
        }
    });
});