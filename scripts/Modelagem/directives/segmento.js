modelagemApp

.directive("segmentos",function($q) {
	return {
		restrict: "E",
		replace: false,
		scope : false,
		link:function($scope, $elem, $attrs) {
   		 	// pre:
	   		 	$scope.$root.$watch(function(newer,old){
	            	$scope.dado = newer.campoDeFormulario;
	       		});
   		 	// },
   		 	// post: function($scope, $elem, $attrs) {
   		 		 $elem.bind('click', function() {
   		 			var segmentName = $elem.children(".active").text();
   		 			segmentName = segmentName.replace(' ','-').toLowerCase();
   		 			segmentName = segmentName.replace(' ','-').toLowerCase();
   		 			angular.element(".sessao-de-dados#"+segmentName).removeClass("hidden");
   		 			
   		 		});
       		// }
 		},
		template:'<div ng-repeat="(form_name,form) in dado" id={{form_name}}><a ng-repeat="(segment_name,segment) in form" class="item" ng-class="{active: $index==0 }">{{segment_name}}</a></div>',
	}
})	
;