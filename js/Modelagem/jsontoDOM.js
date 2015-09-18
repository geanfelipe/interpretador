/*objeto que mostra a classe do semantic ui para os tipos devidos de showAs dos objetos*/
var classesParaTipos = {'select':'ui selection dropdown',};

var buildSegment = function (object){
    var segmentNames = [];
    var segments = [];
    
    /*montando DOM HTML*/
    angular.forEach(object,function(value,key){
        if(value.show){
            // console.log(key,value);
            segments.push(jsontoDOM(value));
        }
    });
    
    console.log(segmentNames);
    // console.log(segments);
    
    for(var i in segments){
        /*procurando os segmentos do formulário selecionado*/
        angular.forEach(segments[i],function(value,key){
            /*ver se o segmento já foi adicionado, se não adicionado então é retornado -1 */
            // if(segments.indexOf(value.segment)==-1){
            //     segments.push(value.segment);
            // }
            console.log(key,value);
        })
    }
    
};

/* retorna um node a partir de um objeto JSON passado*/
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