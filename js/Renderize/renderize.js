
var renderize = function(id,field){
    $("#"+field.contextmenu).html(HTML(id,field));
    $('.ui.dropdown').dropdown();
    multipleSelect();
    
};

/* construcao de UMA SESSAO DE DADOS*/
var HTML = function(key , sessaoDeDados){
  
  var classField = '';
  
  for(var i in sessaoDeDados.fields) {
    
      var dataObj = sessaoDeDados.fields[i] ;
      var idField = Object.keys(dataObj)[0];
      var field = dataObj[idField];
      
      classField +='<div class="field" id='+ idField +' >'+ field + '</div>';
  }
  
  var html ='<div class="ui form segment"><div class="ui ribbon label" style="margin-bottom: 15px;">'+
  'Sessão de Dados : '+ key+'</div>'+ classField + '</div>';

  return html;
};
	

// <div class="ui form segment">
// 					<div class="ui ribbon label" style="margin-bottom: 15px;">
// 						Sessão de Dados: Família</div>
// 					<div class="field">
// 						<label for="Cidadao-pPai">Pai</label> <input name="Cidadao-pPai" class="semAcentosECaracteres semEspaco semNumeros" type="text">
// 					</div>
// </div>