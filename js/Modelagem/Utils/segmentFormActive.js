var aa = 1;

function segmentFormActive() {
	console.log('EU');
	
	$('#grupo-de-dados>a.item').removeClass('active');
	$('.sessao-de-dados').addClass('hidden');
  
	$($('#grupo-de-dados>a.item')[0]).addClass('active');
	$($('.sessao-de-dados')[0]).removeClass('hidden');
	
}