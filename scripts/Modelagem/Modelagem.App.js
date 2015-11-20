var modelagemApp = angular.module('Modelagem',[]);

modelagemApp.run(function($rootScope,getDataModel,$q){

	$rootScope.json = angular.fromJson(getDataModel.get());
	$rootScope.Models = {};

	(function() {
			var json = $rootScope.json;

			json.$promise.then(function(data) {
				$rootScope.Models = Modelador.entityFactory(data);
				var objView = {};

                /* iteração dentro das entidades de um campo semantico */
                angular.forEach($rootScope.Models,function(groupsValue, groupsName) {
	                angular.forEach(groupsValue,function(formsObject, formsName) {
	                	objView[formsName] = {};
		                angular.forEach(formsObject,function(entitysObject,entitysName) {
		                	angular.forEach(entitysObject,function(attributesObject, attributesName) {
		                		if(attributesObject.constructor!==Object) {
		                			if(entitysName!=="Pessoa" && entitysName!=="PessoaFisica") {
		                				/*angular.forEach(data.groups[groupsName], function(formsValue,formsName) {
		                					if(Object.keys(formsValue).indexOf(entitysName)!=-1) {
		                						objView[formsName] = {};
		                						objView[formsName][entitysName+'.'+attributesName] = ViewFactory.getView(attributesName);
		                						console.log("entidade "+entitysName+" esta no form "+formsName);
		                					}else {
		                						console.log("entidade "+entitysName+" NAO esta no form "+formsName);
		                					}
		                				});*/
		                				objView[formsName][entitysName+'.'+attributesName] = ViewFactory.getView(entitysName+"."+attributesName);
		                			}
		                		}
		                	});
		                });
	                });
	            });
				
				$rootScope.campoDeFormulario = {};
	            angular.forEach(objView,function(entitysObject, formsName){
	            	$rootScope.campoDeFormulario[formsName] = new ElementFactory().buildSegment(entitysObject)
	            });
				console.log($rootScope.Models);

			});
        }
    )();
});