/*objeto que mostra a classe do semantic ui para os tipos devidos de showAs dos objetos*/
var classesParaTipos = {'select':'ui selection dropdown',};

/**
*@object é um objeto como este:
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
* 
* O retorno é um objeto que possui a estrutura: 
* {"Dados Pessoais":{
   "fields":
     ["<label for="Nome">Nome</label><input type="text" name="Nome"></input>",
     "<label for="Sexo">Sexo</label><div class="ui selection dropdown"><input type="hidden" name=\"Sexo\"></input><div class=\"text\"></div><i class=\"dropdown icon\"></i><div class=\"menu\"><div class=\"item\" data-value=\"Masculino\">Masculino</div><div class=\"item\" data-value=\"Feminino\">Feminino</div><div class=\"item active\" data-value=\"\"></div></div></div>"],
   "contextmenu":"dados-pessoais, "id": "Dados-Pessoais.cpf"
   }
* }
* 
**/

var buildSegment = function (object){
    
    var formSegment = {};
    var segments = [];
    
    /*montando DOM HTML*/
    angular.forEach(object,function(value,key){
        
        if(value.show){
            
            segments.push(jsontoDOM(value));
        }
    });
    
    for(var i in segments){

        /*procurando os segmentos do formulário selecionado*/
        angular.forEach(segments[i],function(value,key){
            var valor = {};
            valor[value[1]] = value[0];
            /*adiciona o nome do segmento e um array com os DOM's que lhe pertece*/
            if(Object.keys(formSegment).indexOf(key)==-1){
                formSegment[key]= {};
                formSegment[key]['fields']= [valor];
            }else{
              formSegment[key]['fields'].push(valor);
            }
            
            var contextmenu = buildContextMenu(key);

            formSegment[key]['contextmenu']=contextmenu.toLowerCase();
        })
    }
    return formSegment;
};

/**
 * retorna um node a partir de um objeto JSON passado
 * 
 * @object é um json view como o seguinte:
 * "view": {
                "title": "CPF",
                "readOnly": true,
                "show": true,
                "showAs": "text",
                "defaultValue": "",
                "width": "",
                "mask": "",
                "segment": "Dados Pessoais"
              }
  * a partir desse objeto é retornado um array de objeto, tendo como chave o segmento a que 
  * ele pertence e o valor um node html que é de acordo com o showAs desse objeto
  * no outro índice é um objeto com tendo como chave ID e o valor o nomedocampo
**/
var jsontoDOM = function(object){

    var nameInput = object.title;
    var value = object.title.toUpperCase();
    var defaultValues = object.defaultValue.split(",");
    var html = {};
    /* label do elemento */
    var data = {'tag':'label','for':'${title}','html':'${title}'};
    var label = json2html.transform(object,data);
    /*retorna o html e o nome do segmento a que ele é pertecente*/
    var segmentName = object.segment;
    var response = {};
    var id = buildContextMenu(object.segment)+'_'+object.title.toLowerCase();
    
    if(object.showAs=="select") {
        html={"tag":"div","class":"ui selection dropdown","children":[
            {"tag":"input","type":"hidden","name":"${title}"},
            {"tag":"div","class":"text","html":""},
            {"tag":"i","class":"dropdown icon"},
            {"tag":"div","class":"menu","children":[
                {"tag":"div","class":"item","data-value":defaultValues[0],"html":defaultValues[0]},
                {"tag":"div","class":"item","data-value":defaultValues[1],"html":defaultValues[1]},
                {"tag":"div","class":"item active","data-value":"","html":""}
            ]}
        ]};
    }
    else if(object.showAs=='text') {
        html = {"tag":"input","type":"${showAs}","name":"${title}","html":""};
    }
    else if(object.showAs=='multiple select, data preloaded') {
        html = {"tag":"div","class":"ui fluid dropdown selection multiple","tabindex":"0",
          "children":[
              {"tag":"select","name":"${title}","multiple":"","children":[
                {"tag":"option","value":"maca","html":"Maca"},  
                {"tag":"option","value":"uva","html":"Uva"}  
              ]},
              {"tag":"i","class":"dropdown icon"},
              {"tag":"div","class":"menu transition hidden preload","tabindex":"2",
                "children":[
                  {"tag":"div","class":"item","data-value":"maca","html":"Maca"},
                  {"tag":"div","class":"item","data-value":"uva","html":"Uva"}
              ]}
        ]};
    }
    else if (object.showAs == 'search') {
      html = {"tag":"div","class":"ui search","children":[
          {"tag":"div","class":"ui input","children":[
            {"tag":"input","class":"prompt","type":"text","placeholder":"Nome"}
          ]},
          {"tag":"div","class":"results"}
        ]};
    }
    else {
      
    }
    
    response[segmentName]=[label + json2html.transform(object,html),id];
    
    return response;
};

var buildContextMenu= function(key){
  var contextmenu;
   if(key.toLowerCase().split(' ').length==1) {
      contextmenu = key.split(' ')[0];
   }else {
      contextmenu = key.split(' ')[0]+'-'+key.split(' ')[1];
  }
  return contextmenu;
};