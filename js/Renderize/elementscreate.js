
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
    console.log(formSegment);
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

        var divPai = document.createElement('div');

        var divSelection = document.createElement('div');
        divSelection.className = "ui selection dropdown";

        var input = document.createElement("input");
        input.type = "hidden";
        input.name = object.title;

        var divText = document.createElement("div");
        divText.className = "text";

        var icon = document.createElement("i");
        icon.className = "dropdown icon";

        var divMenu = document.createElement("div");
        divMenu.className = "menu";

        var divItemOne = document.createElement("div");
        divItemOne.className = "item";
        divItemOne.setAttribute("data-value",defaultValues[0]);
        divItemOne.textContent = defaultValues[0];

        var divItemTwo = document.createElement("div");
        divItemTwo.className = "item";
        divItemTwo.setAttribute("data-value",defaultValues[1]);
        divItemTwo.textContent = defaultValues[1];        

        var divItemDefault = document.createElement("div");
        divItemDefault.className = "item";
        divItemDefault.setAttribute("data-value","");
        divItemDefault.textContent = "";

        divPai.appendChild(divSelection);

        divSelection.appendChild(input);
        input.insertAdjacentElement("afterend",divText);
        divText.insertAdjacentElement("afterend",icon);
        icon.insertAdjacentElement("afterend",divMenu);

        divMenu.appendChild(divItemOne);
        divItemOne.insertAdjacentElement("afterend",divItemTwo);
        divItemTwo.insertAdjacentElement("afterend",divItemDefault);

        html = divPai.innerHTML;
    }
    else if(object.showAs=='text') {

        var divPai = document.createElement('div');

        var input = document.createElement('input');
        input.type = object.showAs || "text";
        input.name = object.title;

        divPai.appendChild(input);

        html = divPai.innerHTML;
    }
    else if(object.showAs=='multiple select, data preloaded') {

        var divPai = divPai = document.createElement('div');

        var select = document.createElement("select");
        select.className = "ui fluid dropdown";
        select.setAttribute("multiple","");

        var optionOne = document.createElement("option");
        optionOne.value = "maca";
        optionOne.textContent = "maca";

        var optionTwo = document.createElement("option");
        optionTwo.value = "uva";
        optionTwo.textContent = "uva";

        select.appendChild(optionOne);
        divPai.appendChild(select);

        optionOne.insertAdjacentElement("afterend",optionTwo);

        html = divPai.innerHTML;

    }
    else if (object.showAs == 'search') {
       /* html = {"tag":"div","class":"ui search","children":[
                {"tag":"div","class":"ui input","children":[
                  {"tag":"input","class":"prompt","ng-model":"${title}","id":"esporte" ,"type":"text","placeholder":"${title}"}
                ]},
                {"tag":"div","class":"results"}
              ]};*/
        var divPai = document.createElement('div');

        var divSearch = document.createElement('div');
        divSearch.className = "ui search";

        var input = document.createElement('input');
        input.className = "prompt "+"ng-valid ng-dirty ng-valid-parse ng-touched";
        input.setAttribute("ng-model","nome.eu");
        input.type = "text";

        var divResults = document.createElement("div");
        divResults.className = "results";

        divSearch.appendChild(input);
        divPai.appendChild(divSearch);

        divSearch.insertAdjacentElement('afterend',divResults);

        html = divPai.innerHTML;
    }
    else {
      
    }
    console.log(label);

    response[segmentName]=[label + html,id];
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