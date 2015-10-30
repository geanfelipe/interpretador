angular.module("ModelagemDirectives",[])

.directive("segmentos",function() {
	return {
		restrict: "E",
		transclude: true,
		replace: true,
		scope : {
			tipo:"=",
			data:"=",
		},
		compile: function($element,$attrs,transcludeFn) {
			return function($scope,el,$attrs) {
				transcludeFn($scope, function (cElement) {
              		
          		});
			}
		},
		controller: function($scope,$element,$attrs) {
			
		},
		// template:'<input name="teste" ng-model="data" type="text">'
	}
})
;