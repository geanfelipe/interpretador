angular.module("ModelagemDirectives",[])

.directive("formulario",function() {
	return {
		restrict: "E",
		replace: true,
		scope : {
			data:"=",
		},
		controller : function($scope) {
			console.log("HELLO");
		},
		template:'<a ng-repeat="(key,value) in data" contextmenu="{{value.contextmenu}}"  class="item">{{key}}</a>'
	}
})
;