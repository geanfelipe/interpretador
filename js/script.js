$(document).ready(function(){
	$('.right.menu.open').on("click",function(e){
        e.preventDefault();
		$('.ui.horizontal.menu').toggle();
	});
	$('.ui.dropdown').dropdown();
});