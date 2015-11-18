modelagemApp

.directive("formulario",function() {
	return {
		restrict: "E",
		replace: true,
		scope : true,
		link:{
   		 	pre:function($scope, $elem, $attrs) {
	   		 	$scope.$root.$watch(function(newer,old){
	            	$scope.dado = newer.campoDeFormulario;
	       		});
   		 	},
   		 	post: function($scope, $elem, $attrs) {
       		}
 		},
 		controller: function($scope, $element, $attrs) {
 			$scope.renderizaar = function(key,field) {
            	console.log(key,field);
            	new Renderize().renderize(key,field);
        	};
 		},
		template:'<div id="{{value.contextmenu}}" class="sessao-de-dados" ng-repeat="(key,value) in dado | orderBy "key" ">{{formulariosDeSecretaria}}</div>',
	}
})	
;