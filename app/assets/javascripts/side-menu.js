jQuery(document).ready(function(){
  /*open*/
  $('.header__icon').on('click',function(){
    $('.sidebar').css(
      'display','block'
    ).animate({
      right:'0'
    }, 
      300
    );
    $('.sidebar-bg').css(
      'display','block'
    ).animate({
      opacity:'0.5'
    },
      300
    )
  });
  /*close*/
  $('.sidebar__inner__ttl__icon').on('click',function(){
    $('.sidebar').animate({
      right:'-200px'
    },
      300
    );
    $('.sidebar-bg').animate({
      opacity:'0'
    },
      300
    );
    setTimeout(function(){
      $('.sidebar').css('display','none');
      $('.sidebar-bg').css('display','none');
    },
      300
    );
  });
});