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

$(function(){
  $(".happy_client_chastica").on({
   mouseenter: function(){
    $(this).attr('src','raw-images/happyClient/chastica_higlighted.png');
  },
  mouseleave: function(){
    $(this).attr('src','raw-images/happyClient/chastica.png');
  }
  });
  
});

$(function(){
  $(".happy_client_ozi").on({
   mouseenter: function(){
    $(this).attr('src','raw-images/happyClient/OZ_highlighted.png');
  },
  mouseleave: function(){
    $(this).attr('src','raw-images/happyClient/ozi.png');
  }
  });
  
});

$(function(){
  $(".happy_client_freshes").on({
   mouseenter: function(){
    $(this).attr('src','raw-images/happyClient/freshes_highlighted.png');
  },
  mouseleave: function(){
    $(this).attr('src','raw-images/happyClient/freshes.png');
  }
  });
  
});

$(function(){
  $(".happy_client_daisy_clean").on({
   mouseenter: function(){
    $(this).attr('src','raw-images/happyClient/daisyclean_highlighted.png');
  },
  mouseleave: function(){
    $(this).attr('src','raw-images/happyClient/daisyclean.png');
  }
  });
  
});