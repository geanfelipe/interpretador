var multipleSelect = function(){
  var clicksCounter = 1;
  
  /*múltiplo select*/
  $('.menu.transition.hidden.preload div.item').on('click',function() {
        console.log();
        $($(this).parent().parent()
          .children()[clicksCounter++])
            .after(
            '<a class="ui label transition visible" data-value="'+$(this).data().value+ '" style="display: inline-block !important;">'+
            this.textContent+'<i class="delete icon"></i></a>'
            );
      $(this).remove();
      
      /*retirando da área de seleção*/
      $('i.delete.icon').on('click',function(){
          console.log('delete');
          var textContent = $($(this)[0].parentNode).text();
          var dataValue = $($(this)[0].parentNode).data().value;
          
          $('div.menu.transition.preload.ui.visible').
            wrap('<div class="item" data-value="'+ dataValue+'">'+textContent+'</div>');
          
          $($(this)[0].parentNode).remove();
      });
  
    });
};