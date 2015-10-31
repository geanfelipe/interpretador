angular.module("ModelagemDirectives",[])

.directive("segmentos",function() {
	return {
		restrict: "E",
		transclude: true,
		replace: true,
		scope : {
			data:"=",
		},
		compile: function($element,$attrs,transcludeFn) {
			return function($scope,el,$attrs) {
				transcludeFn($scope, function (cElement) {
              		// <a ng-repeat="(key,value) in campoDeFormulario" contextmenu="{{value.contextmenu}}"  class="item">{{key}}</a>
              		// var tagA = document.createElement("a");
              		// tagA.
          		});
			}
		},
		controller: function($scope,$element,$attrs) {
			$scope.$watch(function(scope){
				/*console.log($scope.data);
				console.log($scope.tipo);*/
			});
		},
	}
})
;