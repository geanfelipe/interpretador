modelagemApp

.directive("buttonSend",["sendDatasource",function(sendDatasource){
	return {
		restrict: 'E',
		replace: true,
		scope:{},
		template: '<div class="large ui buttons" style="float: left;">'+
            			'<button class="ui button"><i class="search icon"></i>LOCALIZAR</button>'+
            			'<button class="ui button" ><i class="plus icon"></i>ADICIONAR</button>'+
            		'</div>',
        link: function($scope,$elem,$attrs) {
        	$elem.bind("click",function() {
        		var object = {};
        		var inputs = angular.element('input[name]');
        		var divs = angular.element('div.text[id]');
        		var multiplesAnsw = angular.element('a[data-value]');

        		if(multiplesAnsw.length){ object["uso"]=[]; }

        		for (var i = inputs.length - 1; i >= 0; i--) {
        			if(inputs[i]!==undefined) {
        				object[inputs[i].name] = inputs[i].value;
        				inputs[i].value = "";
        			}
        			if(divs[i]!==undefined) {
        				object[divs[i].id] = divs[i].textContent;	
        				divs[i].textContent = "";
        			}
        			if(multiplesAnsw[i]!==undefined) {
        				object["uso"].push(multiplesAnsw[i].textContent);
        				multiplesAnsw[i].textContent = "";
        			}
        		};
        		console.log(object);

        		sendDatasource.save({
        			"classUID":"br.gov.rn.parnamirim.datasource.domain.pessoal",
					"semanticFieldUID":$scope.$parent.formularioSelecionado,
					"object": object
        		});
        	});
        },
	}
}]);