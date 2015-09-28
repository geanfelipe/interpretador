var renderize = function(id,field){
    $("#"+field.contextmenu).html(HTML(id,field));
    $('.ui.dropdown').dropdown();
    multipleSelect();
    
};

/* */
var HTML = function(key,field){
  console.log(field)
  var html ='<div class="ui form segment"><div class="ui ribbon label" style="margin-bottom: 15px;">'+
  'Sessão de Dados:'+ key+'</div>'+
  '<div ng-repeat="(key,value) in campoDeFormulario">'+
    '<div class="field" id="{{value.id}}" ng-repeat="field in'+ field +'track by $index">'+
      '<div ng-repeat="(key,value) in field" id={{key}}>'+angular.forEach(field.,
          function(value,key){ 
            console.log(  value);
          }) +
        
       '</div>'+
      '</div>'+
   '</div> </div>';
  return html;
};
	

