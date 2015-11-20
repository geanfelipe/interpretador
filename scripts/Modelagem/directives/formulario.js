modelagemApp

.directive("formulario",function() {
	return {
		restrict: "E",
		replace: true,
		scope : true,
		link:{
   		 	pre:function($scope, $elem, $attrs) {

   		 	},
   		 	post: function($scope, $elem, $attrs) {
   		 		console.log($scope.$parent.formularioSelecionado);
       		}
 		},
 		controller: function($scope, $element, $attrs) {
 			$scope.renderizaar = function(key,field) {
            	console.log(key,field);
            	new Renderize().renderize(key,field);
        	};
 		},
		template:'<button>click</button>',
	}
})	
;