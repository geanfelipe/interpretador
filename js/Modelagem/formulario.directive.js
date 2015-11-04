modelagemApp

.directive("formulario",function() {
	return {
		restrict: "E",
		replace: true,
		scope : {
			data:"=",
		},
		compile: function($scope,$element,$attrs) {
			console.log($scope.data);
			return  {
				
				// angular.forEach($scope.data,function(value,key) {
				// 	var formulario = new Renderize().renderize(key,value);	
				// 	console.log(formulario);
				// });

				// Pre-link function
		        post: function (scope, element, attrs) {
		        	console.log($scope.data);
		        },
		          // Post-link function
		        pre: function (scope, element, attrs) {
		        	console.log($scope.data);
		        }
			}
		},
	}
})
;