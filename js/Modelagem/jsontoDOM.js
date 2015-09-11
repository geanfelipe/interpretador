/*objeto que mostra a classe do semantic ui para os tipos devidos de showAs dos objetos*/
var classesParaTipos = {'select':'ui selection dropdown',};

function jsontoDOM(object){
    var segmentos = [];
    
    /*procurando os segmentos do formulário selecionado*/
    angular.forEach(object,function(value,key){
      segmentos.push(value.segment);
    });
  
    /*montando DOM HTML*/
    angular.forEach(object,function(value,key){
        if(value.show){
            
        }
    });
}

/* representacao de um node no formato json*/
function modelos(object){
    nameInput = object.title.toLowerCase();
    var value = object.title.toUpperCase();
    var defaultValues = object.default.split(",");
    
    select={"tag":"div","class":"ui selection dropdown","children":[
        {"tag":"input","type":"hidden","name":nameInput},
        {"tag":"i","class":"dropdown icon"},
        {"tag":"div","class":"default text","html":"${title}"},
        {"tag":"div","class":"menu","children":[
            {"tag":"div","class":"item","data-value":defaultValues[0].toUpperCase(),"html":defaultValues[0]},
            {"tag":"div","class":"item","data-value":defaultValues[1].toUpperCase(),"html":defaultValues[1]},
        ]}
    ]} ;

}

/*
<div class="ui selection dropdown">
  <input type="hidden" name="gender">
  <i class="dropdown icon"></i>
  <div class="default text">Gender</div>
  <div class="menu">
    <div class="item" data-value="1">Male</div>
    <div class="item" data-value="0">Female</div>
  </div>
</div>
*/