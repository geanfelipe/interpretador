/*objeto que mostra a classe do semantic ui para os tipos devidos de showAs dos objetos*/
var classesParaTipos = {'select':'ui selection dropdown',};

var buildSegment = function (object){
    
    var formSegment = {};
    var segments = [];
    
    /*montando DOM HTML*/
    angular.forEach(object,function(value,key){
        
        if(value.show){
            
            segments.push(jsontoDOM(value));
        }
    });
    
    console.log(formSegment);
    console.log(segments);
    
    for(var i in segments){

        /*procurando os segmentos do formulário selecionado*/
        angular.forEach(segments[i],function(value,key){

            /*adiciona o nome do segmento e um array com os DOM's que lhe pertece*/
            if(Object.keys(formSegment).indexOf(key)==-1){
              
                formSegment[key]= [value];
            }else{

              formSegment[key].push(value);
            }
        })
    }
    console.log(formSegment);
};

/**
 * retorna um node a partir de um objeto JSON passado
 * 
 * @object é um json view como o seguinte:
 * "view": {
                "title": "--",
                "readOnly": true,
                "show": false,
                "showAs": "text",
                "defaultValue": "",
                "width": "",
                "mask": "",
                "segment": "Dados Pessoais"
              }
  * a partir desse objeto é retornado um objeto, tendo como chave o segmento a que ele pertence
  * e o valor é um node html, que é de acordo com o showAs desse objeto
**/
var jsontoDOM = function(object){

    var nameInput = object.title.toLowerCase();
    var value = object.title.toUpperCase();
    var defaultValues = object.defaultValue.split(",");
    var html = {};
    
    if(object.showAs=="select"){
        html={"tag":"div","class":"ui selection dropdown","children":[
            {"tag":"input","type":"hidden","name":nameInput},
            {"tag":"div","class":"text","html":""},
            {"tag":"i","class":"dropdown icon"},
            {"tag":"div","class":"menu","children":[
                {"tag":"div","class":"item","data-value":defaultValues[0],"html":defaultValues[0]},
                {"tag":"div","class":"item","data-value":defaultValues[1],"html":defaultValues[1]},
                {"tag":"div","class":"item active","data-value":"","html":""}
            ]}
        ]};
    }
    
    {'tag':'label','for':'${b}','html':'a'};
    
    /*retorna o html e o nome do segmento a que ele é pertecente*/
    var segmentName = object.segment;
    
    var response = {};
    response[segmentName]=json2html.transform(object,html);
    
    return response;
};

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