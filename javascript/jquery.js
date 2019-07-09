$(document).ready(function(){
    $('.slick_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    centerMode: false
  });
})

$(function(){
  $(".what_we_do_down_triangle").on({
   mouseenter: function(){
    $(this).attr('src','raw-images/what we do/red_triangle.png');
  },
  mouseleave: function(){
    $(this).attr('src','raw-images/what we do/grey_triangle.png');
  }
  });
  
});