angular.module("ModelagemDirectives",[])

.directive("segmentos",function() {
	return {
		restrict: "E",
		transclude: "element",
		replace: true,
		scope : {
			data:"=",
		},
		compile: function($element,$attrs,transcludeFn) {
			return function($scope,el,$attrs) {
				transcludeFn($scope, function (cElement) {

					

					$scope.$watch(function(scope){
						if(typeof scope.segmentos==="object") {
							for(var i in scope.segmentos) {

								var conteudoDaTAG = Object.keys(scope.segmentos[i]);
								var  contextmenu = scope.segmentos[i][conteudoDaTAG];

								var tagA = document.createElement("a");
								tagA.setAttribute("contextmenu",contextmenu);
								tagA.textContent = conteudoDaTAG;
								tagA.className="item";

								$element
								.after(tagA);
							}
						}
					})
              		// <a ng-repeat="(key,value) in campoDeFormulario" contextmenu="{{value.contextmenu}}"  class="item">{{key}}</a>
              		// 
              		// tagA.
          		});
			}
		},
		controller: function($scope,$element,$attrs) {
			$scope.segmentos = [];

			$scope.$watch(function(scope){
				if(typeof scope.data ==="object") {
					angular.forEach(scope.data,function(value,key) {
						var obj = {};
						obj[key]=value.contextmenu
						//{nome_do_segmento : nome_do_contextmenu}
						scope.segmentos.push(obj);
					});
				}
			});
		},
	}
})
;