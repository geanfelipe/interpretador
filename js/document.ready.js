
$(document).ready(function(){
var content = [
  { title: 'Andorra' },
  { title: 'United Arab Emirates' },
  { title: 'Afghanistan' },
  { title: 'Antigua' },
  { title: 'Anguilla' },
  { title: 'Albania' },
  { title: 'Armenia' },
  { title: 'Netherlands Antilles' },
  { title: 'Angola' },
  { title: 'Argentina' },
  { title: 'American Samoa' },
  { title: 'Austria' },
  { title: 'Australia' },
  { title: 'Aruba' },
  { title: 'Aland Islands' },
  { title: 'Azerbaijan' },
  { title: 'Bosnia' },
  { title: 'Barbados' },
  { title: 'Bangladesh' },
  { title: 'Belgium' },
  { title: 'Burkina Faso' },
  { title: 'Bulgaria' },
  { title: 'Bahrain' },
  { title: 'Burundi' }
];
$('.ui.search')
  .search({
    source: content
  })
;

	$('.right.menu.open').on("click",function(e){
        e.preventDefault();
		$('.ui.horizontal.menu').toggle();
	});
	$('.ui.dropdown').dropdown();
	$('div.row div.one.wide.column').delegate('.item.menu','click',clickSegmentActive);
	$('#aba-de-aplicativo').delegate('.item.menu');
	
});
