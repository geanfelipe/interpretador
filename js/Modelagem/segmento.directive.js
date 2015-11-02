angular.module("ModelagemDirectives",[])

.directive("segmentos",function() {
	return {
		restrict: "E",
		replace: true,
		scope : {
			data:"=",
		},
		template:'<a ng-repeat="(key,value) in data" contextmenu="{{value.contextmenu}}"  class="item">{{key}}</a>'
	}
})
;