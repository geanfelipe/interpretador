modelagemApp

.directive("formulario",function() {
	return {
		restrict: "A",
		replace: true,
		scope : {
			data:"=",
		},
		require: '?ngModel',
		compile: function($element, $attrs) {
			var elemento = angular.element('input[name=Nome]');

			return {
			    pre: function (scope, element, attrs) {
			    	var elemento = angular.element('input[name=Nome]');
			    	console.log(elemento);
			    },
			    post: function (scope, element, attrs) {
			        var elemento = angular.element('input[name=Nome]');
			    	console.log(elemento);
			    }
		    }
		},
		link: function(scope, element, attrs, ngModel) {
			var elemento = angular.element('input[name=Nome]');

			console.log(elemento);

			elemento.on('blur keyup change', function() {
	          
	        });
		},
	}
})

;