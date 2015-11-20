modelagemApp

.directive("formulario",function() {
	return {
		restrict: "E",
		replace: true,
		scope : true,
    priority: 100,
		link:{
   		 	pre:function($scope, $elem, $attrs) {
          $scope.$root.$watch(function(newer,old){
            $scope.dado = newer.campoDeFormulario;

             angular.element("form").hide();

            if($scope.$parent.formularioSelecionado) {
              angular.element("form#"+$scope.$parent.formularioSelecionado).show();
            }
          });
   		 	},
   		 	post: function($scope, $elem, $attrs) {
       	}
 		},
 		controller: function($scope, $element, $attrs) {
      
      $scope.selecionarSegmento = function(segment_name) {
          $scope.segmentoSelecionado = segment_name;
          angular.element(".sessao-de-dados").hide();
          angular.element(".sessao-de-dados#"+$scope.segmentoSelecionado).show();
      };

 			$scope.renderizar = function(key,field) {
        new Renderize().renderize(key,field);
      };
 		},
		templateUrl:'scripts/Modelagem/directives/templates/formulario.html',
	}
})	
;