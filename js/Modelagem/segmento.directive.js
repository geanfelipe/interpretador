angular.module("ModelagemDirectives",[])

.directive("segmentos",function() {
	return {
		restrict: "E",
		transclude: true,
		scope : {
			nome:"@",
			data:"=data",
		},
		compile: function($element,$attrs,transcludeFn) {
			return function($scope,el,$attrs) {
				transcludeFn($scope, function (cElement) {
              		console.log($element);
              		console.log($attrs);
              		console.log(el);
              		console.log($scope.nome);
              		console.log($scope.ola);
          		});
			}
		},
		controller: function($scope,$element,$attrs) {
			console.log($attrs.data);
			console.log($scope.data);
			$scope.nome="GEEEAN";
			$scope.ola = "ola GEAN";
		},
		template:'<h3>ola {{nome}}</h3>'
	}
})
;