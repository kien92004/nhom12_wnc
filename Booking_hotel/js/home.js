$(document).ready(function() {
     // Hàm để tải nội dung của header
     fetch('header.html')
     .then(response => response.text())
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

/////////////////////////////////////////////////////////////////////////////////////////////////

    // Initialize AOS
    AOS.init();
            
    // Load header and footer
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Có lỗi xảy ra:', error));
    
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Có lỗi xảy ra:', error));
    
    fetch('quaylai.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('quaylai').innerHTML = data;
        })
        .catch(error => console.error('Có lỗi xảy ra:', error));
    
    // Hero Image Slider
    const backgrounds = [
        '../img/resort-1.jpg',
        '../img/nen1.jpg',
        '../img/nen2.jpg'
    ];
    let currentIndex = 0;
    
    function changeBackground() {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        
        // Tạo hiệu ứng mượt mà với jQuery
        $('.hero-bg').fadeOut(500, function() {
            $(this).css('background-image', `url(${backgrounds[currentIndex]})`).fadeIn(500);
        });
    }
    
    // Tự động chuyển ảnh sau mỗi 5 giây
    setInterval(changeBackground, 5000);
    
    // Thêm sự kiện click cho nút
    $('#nextButton').on('click', changeBackground);
    
    // Room Cards
    const rooms = [
        {
            name: "Phòng Suite Cao Cấp",
            price: "700.000 VNĐ/đêm",
            stars: "★★★★★",
            description: "Phòng Suite Sang Trọng với không gian rộng rãi, nội thất cao cấp, bao gồm phòng khách và phòng ngủ riêng.",
            img: "../img/resort-4.jpg"
        },
        {
            name: "Phòng Suite Hạng Sang",
            price: "1.000.000 VNĐ/đêm",
            stars: "★★★★☆",
            description: "Phòng Suite Cao Cấp, tiện nghi tốt hơn, không gian thoải mái, thường có dịch vụ bổ sung.",
            img: "../img/resort-8.jpg"
        },
        {
            name: "Phòng Đôi Tiêu Chuẩn",
            price: "800.00 VNĐ/đêm",
            stars: "★★★☆☆",
            description: "Phòng Đôi Tiêu Chuẩn, có hai giường hoặc một giường lớn, trang bị tiện nghi cơ bản, phù hợp cho cặp đôi.",
            img: "../img/resort-14.jpg"
        }
    ];
    
    rooms.forEach((room, index) => {
        $('#roomsContainer').append(`
            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="${index * 100}">
                <div class="room-card">
                    <div class="room-image">
                        <img src="${room.img}" alt="${room.name}">
                    </div>
                    <div class="room-info">
                        <h4 class="fw-bold">${room.name}</h4>
                        <p class="text-danger fw-bold">${room.price}</p>
                        <p class="text-warning">${room.stars}</p>
                    </div>
                    <div class="room-overlay">
                        <h4 class="mb-3 fw-bold">${room.name}</h4>
                        <p class="mb-3">${room.description}</p>
                        <div class="d-flex gap-3">
                            <button class="btn btn-danger px-3 py-2"><a href="phong1.html" style="color:white;text-decoration:none">CHI TIẾT</a></button>
                            <a href="bookingNow.html" class="btn btn-primary px-3 py-2">ĐẶT PHÒNG</a>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
    
    // Restaurant Cards
    const restaurants = [
        {
            name: "Vị trí thuận lợi",
            description: "Nằm ngay trung tâm thành phố, dễ dàng di chuyển đến các điểm tham quan",
            icon: "fa-solid fa-location-dot"
        },
        {
            name: "Phòng nghỉ sang trọng",
            description: "Các phòng được thiết kế hiện đại, đầy đủ tiện nghi, mang lại sự thoải mái tối đa.",
            icon: "fa-solid fa-house"
        },
        {
            name: "Dịch vụ spa",
            description: "Cung cấp các liệu pháp thư giãn và làm đẹp, giúp khách hàng tái tạo năng lượng",
            icon: "fa-solid fa-spa"
        },
        {
            name: "Bể bơi ngoài trời",
            description: "Khu vực hồ bơi ngoài trời lý tưởng cho việc thư giãn và tắm nắng.",
            icon: "fa-solid fa-water-ladder"
        }
    ];
    
    restaurants.forEach((restaurant, index) => {
        $('#restaurantContainer').append(`
            <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="${index * 100}">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="${restaurant.icon}"></i>
                    </div>
                    <h4 class="mb-3 fw-bold">${restaurant.name}</h4>
                    <p class="text-muted">${restaurant.description}</p>
                </div>
            </div>
        `);
    });
    
    // Video Modal
    $('#playButton').on('click', function() {
        $('#videoModal').css('display', 'flex').addClass('show');
    });
    
    $('#closeButton').on('click', function() {
        $('#videoModal').removeClass('show');
        setTimeout(() => {
            $('#videoModal').css('display', 'none');
            $('#videoModal video')[0].pause();
        }, 500);
    });
    
    $(document).on('click', function(event) {
        if ($(event.target).is('#videoModal')) {
            $('#videoModal').removeClass('show');
            setTimeout(() => {
                $('#videoModal').css('display', 'none');
                $('#videoModal video')[0].pause();
            }, 500);
        }
    });
    
   
  
// ===== GYM SECTION EFFECTS =====
let currentSlide = 0;
    const totalSlides = 3;
    const slider = $('#gym-slider');
    
    // Hàm chuyển đến slide cụ thể
    function goToSlide(index) {
        // Ẩn tất cả nội dung gym
        $('.gym-content').removeClass('active');
        
        // Tính toán vị trí mới
        const translateValue = -index * 33.333 + '%';
        
        // Thêm hiệu ứng trượt sang trái
        slider.css({
            'transform': 'translateX(' + translateValue + ')'
        });
        
        // Hiển thị nội dung gym của slide hiện tại sau khi hoàn thành hiệu ứng trượt
        setTimeout(function() {
            $('.gym-content').eq(index).addClass('active');
        }, 400);
        
        // Cập nhật chỉ số hiện tại
        currentSlide = index;
    }
    
    // Xử lý sự kiện khi nhấn nút Next
    $('.next-btn').on('click', function() {
        const nextSlide = (currentSlide + 1) % totalSlides;
        goToSlide(nextSlide);
    });
    
    // Xử lý sự kiện khi nhấn nút Prev
    $('.prev-btn').on('click', function() {
        const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(prevSlide);
    });
    
    // Thêm hiệu ứng hover
    $('.gym-image-card').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-10px)',
                'box-shadow': '0 15px 40px rgba(0, 0, 0, 0.2)'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0)',
                'box-shadow': '0 10px 30px rgba(0, 0, 0, 0.1)'
            });
        }
    );
    
    // Tự động chuyển đổi slide sau mỗi 5 giây
    setInterval(function() {
        $('.next-btn').click();
    }, 5000);


    // ===== HOLIDAY SECTION EFFECTS =====
const holidayImages = $('.img-left img');
const totalHolidayImages = holidayImages.length;
let currentHolidayIndex = 0;
let holidayInterval;

// Thiết lập ban đầu
function initHolidaySlider() {
    // Hiển thị hình ảnh đầu tiên
    showHolidayImage(currentHolidayIndex);

    // Bắt đầu slideshow
    startHolidaySlideshow();
}

// Hiệu ứng chuyển đổi hình ảnh
function changeHolidayImage() {
    currentHolidayIndex = (currentHolidayIndex + 1) % totalHolidayImages;
    showHolidayImage(currentHolidayIndex);
}

// Hiển thị hình ảnh với hiệu ứng
function showHolidayImage(index) {
    holidayImages.stop(true, true).css({
        'opacity': 0,
        'transform': 'scale(1)'
    });

    holidayImages.eq(index).css({
        'opacity': 0,
        'transform': 'scale(1.1)'
    }).animate({
        opacity: 1,
        transform: 'scale(1)'
    }, 1200, 'easeOutCubic');
}

// Bắt đầu slideshow
function startHolidaySlideshow() {
    holidayInterval = setInterval(changeHolidayImage, 3000);
}

// Gọi hàm khởi tạo khi tài liệu đã sẵn sàng
$(document).ready(initHolidaySlider);

// Thêm easing functions cho jQuery
$.easing.easeInCubic = function(x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
};

$.easing.easeOutCubic = function(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
};

$.easing.easeInOutCubic = function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
};

// Thiết lập ban đầu cho cả hai section
function initAllEffects() {
    // Khởi tạo các slider
    initHolidaySlider();

    // Khởi tạo testimonials
    initTestimonials();

    // Khởi tạo blog cards
    initBlogs();
}

// Testimonials
const commentsData = [
    {
        img: '../img/cm1.jpg',
        text: 'Tôi rất ấn tượng với chất lượng phục vụ tại đây. Nhân viên luôn niềm nở và sẵn sàng giúp đỡ, khiến tôi cảm thấy như đang ở nhà.',
        name: 'Alex Latham',
        role: 'UI/UX Designer',
        rating: '★★★★★'
    },
    {
        img: '../img/cm2.jpg',
        text: 'Phòng nghỉ thật sự sạch sẽ và thoải mái. Tôi rất thích cách bài trí và trang thiết bị hiện đại, giúp tôi có những giấc ngủ ngon.',
        name: 'John Doe',
        role: 'Web Developer',
        rating: '★★★★★'
    },
    {
        img: '../img/cm3.jpg',
        text: 'Thực phẩm ở đây thật tuyệt! Tôi đã thưởng thức nhiều món ăn ngon và đa dạng, mỗi bữa ăn đều là một trải nghiệm tuyệt vời',
        name: 'Jane Smith',
        role: 'Graphic Designer',
        rating: '★★★★★'
    },
    {
        img: '../img/cm4.jpg',
        text: 'Vị trí khách sạn rất thuận lợi, chỉ cần vài phút đi bộ là tới các điểm tham quan nổi tiếng. Điều này thật sự giúp tôi tiết kiệm thời gian!',
        name: 'Michael Brown',
        role: 'Product Manager',
        rating: '★★★★★'
    }
];

// Hiển thị testimonial đầu tiên
function initTestimonials() {
    $('.comment-container').append(createTestimonialHTML(0));

    // Thay đổi testimonial mỗi 4 giây
    let testimonialIndex = 0;
    setInterval(() => {
        testimonialIndex = (testimonialIndex + 1) % commentsData.length;
        $('.testimonial-card').fadeOut(500, function() {
            $(this).remove();
            $('.comment-container').append(createTestimonialHTML(testimonialIndex)).find('.testimonial-card').fadeIn(500);
        });
    }, 4000);
}

function createTestimonialHTML(index) {
    return `
        <div class="testimonial-card">
            <p class="mb-4">${commentsData[index].text}</p>
            <div class="d-flex align-items-center">
                <div class="testimonial-avatar">
                    <img src="${commentsData[index].img}" alt="${commentsData[index].name}" class="img-fluid">
                </div>
                <div>
                    <h5 class="mb-1 fw-bold">${commentsData[index].name}</h5>
                    <p class="mb-0 text-muted">${commentsData[index].role}</p>
                    <div class="testimonial-stars">${commentsData[index].rating}</div>
                </div>
            </div>
        </div>
    `;
}

// Blog Cards
function initBlogs() {
    const blogs = [
        {
            title: "Khách sạn Hibtel đã được cải tạo, nâng cấp",
            date: "25 July, 2025",
            author: "Kien Dang",
            img: "../img/resort-11.jpg"
        },
        {
            title: "Tiện nghi mới đã được thêm vào khách sạn ",
            date: "25 July, 2025",
            author: "Huy Lee",
            img: "../img/resort-12.jpg"
        },
        {
            title: "Nhiều ưu đãi đặc biệt cho mùa hè",
            date: "25 July, 2025",
            author: "Khoa Cao",
            img: "../img/resort-13.jpg"
        }
    ];

    blogs.forEach((blog, index) => {
        $('#blogContainer').append(createBlogHTML(blog, index));
    });
}

function createBlogHTML(blog, index) {
    return `
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="${index * 100}">
            <div class="blog-card">
                <div class="blog-image">
                    <img src="${blog.img}" alt="${blog.title}">
                </div>
                <div class="card-body" style="padding: 0 15px;">
                    <h5 class="card-title fw-bold mb-3 mt-3">${blog.title}</h5>
                    <div class="d-flex justify-content-between text-muted mb-3" >
                        <small><i class="far fa-clock me-1"></i> ${blog.date}</small>
                        <small><i class="fas fa-user me-1"></i> by ${blog.author}</small>
                    </div>
                    <a href="phong1.html" class="text-danger text-decoration-underline">XEM THÊM </a>
                </div>
            </div>
        </div>
    `;
}

// Khởi tạo tất cả hiệu ứng
$(document).ready(function() {
    initAllEffects();

    // Smooth Scroll
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
});
    // Gym Center
    $('#img-slide-content').addClass('active-overlay');
    
    // Smooth Scroll
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
});


