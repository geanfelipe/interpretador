var modelagemApp = angular.module('Modelagem',[]);

modelagemApp.run(function($rootScope,getDataModel){

	$rootScope.json = angular.fromJson(getDataModel.get());
	$rootScope.Models = {};

	(function() {
			var json = $rootScope.json;
				
			json.$promise.then(function(data) {
				$rootScope.Models = Modelador.EntityInheritance(data);
			});
        }
    )();
});