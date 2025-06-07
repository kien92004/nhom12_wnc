$(document).ready(function () {
    $('.thumb').click(function () {
      let index = $(this).data('bs-slide-to');
      $('#mainCarousel').carousel(index);
    });
  });

// đánh dấu
$(document).ready(function() {
  $('.card-icon').hover(function() {
    $(this).css('transform', 'scale(1.05)');
  }, function() {
    $(this).css('transform', 'scale(1)');
  });
});

// đánh dấu
$(document).ready(function(){
  $('.room-banner').hover(
    function() {
      $(this).find('.overlay').fadeTo(300, 1);
      $(this).find('.info-default').css({
        'transform': 'translate(-50%, -50%) scaleX(0)',
        'opacity': '0'
      });
      $(this).find('.info-hover').css({
        'transform': 'translate(-50%, -50%) scaleX(1)',
        'opacity': '1'
      });
    },
    function() {
      $(this).find('.overlay').fadeTo(300, 0);
      $(this).find('.info-default').css({
        'transform': 'translate(-50%, -50%) scaleX(1)',
        'opacity': '1'
      });
      $(this).find('.info-hover').css({
        'transform': 'translate(-50%, -50%) scaleX(0)',
        'opacity': '0'
      });
    }
  );
});
