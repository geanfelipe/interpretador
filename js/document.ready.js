
$(document).ready(function(){

var esportes = [
    "Natação", "Futebol", "Vôlei", "Basquete"
  ];

$(function() {
  
  
  
  $("#esporte" ).autocomplete({ source: esportes });
  
});


	$('.right.menu.open').on("click",function(e){
        e.preventDefault();
		$('.ui.horizontal.menu').toggle();
	});
	$('.ui.dropdown').dropdown();
	$('div.row div.one.wide.column').delegate('.item.menu','click',clickSegmentActive);
	$('#aba-de-aplicativo').delegate('.item.menu');
	
});
