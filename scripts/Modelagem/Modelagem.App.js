var modelagemApp = angular.module('Modelagem',[]);

modelagemApp.run(function($rootScope,getDataModel){

	$rootScope.json = angular.fromJson(getDataModel.get());
	$rootScope.Models = {};

	(function() {
			var json = $rootScope.json;
			var Models = $rootScope.Models;
				
			json.$promise.then(function(data) {
				console.log(data);
				angular.forEach(data.groups,function(objectGroup,groupName) {
					angular.forEach(objectGroup,function(entityArray,formsName) {
						Models[groupName] = {};
						angular.forEach(entityArray,function(entity,entityName) {
							if(entityName!="asDefined") {
								Models[groupName][entityName] = {}
							}
							if(entity.inherits) {
								var packageInheritance = entity.inherits;
								
							}
							angular.forEach(entity.attributes,function(attributes,attributesName) {
								if(attributesName!="asDefined") {
									Models[groupName][entityName][attributesName] = "";
								}
							});
						});
					});
				});
				console.log(Models);
			});
        }
    )();
	
});