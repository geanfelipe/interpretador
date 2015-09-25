var clickSegmentActive = function(){
    
    $('.item.menu').click(function(){
      $($('.item.menu.active')).removeClass('active');
      $(this).addClass('active');
    });  
  
  
};