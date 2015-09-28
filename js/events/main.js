/*
* Evento de ativar e desativar segmento de formulário
*/
var clickSegmentActive = function(){
    
    $('.item.menu').click(function(){
      $($('.item.menu.active')).removeClass('active');
      $(this).addClass('active');
    });  
  
  
};