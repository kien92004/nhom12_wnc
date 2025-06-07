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
    // Card hover effect
    $('.card').hover(
      function () {
        $(this).addClass('shadow-lg');
        $(this).find('.card-title').css('color', '#0d6efd');
      },
      function () {
        $(this).removeClass('shadow-lg');
        $(this).find('.card-title').css('color', '');
      }
    );
    
    // Smooth scroll to top
    $('a[href="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
    
    // Focus management for accessibility
    $('.card').on('focusin', function() {
      $(this).addClass('shadow-lg');
    }).on('focusout', function() {
      $(this).removeClass('shadow-lg');
    });
    
    // Lazy load images
    $('img[loading="lazy"]').each(function() {
      if (this.complete) {
        $(this).addClass('loaded');
      } else {
        $(this).on('load', function() {
          $(this).addClass('loaded');
        });
      }
    });
    
    
  });