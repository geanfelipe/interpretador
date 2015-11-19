var modelagemApp = angular.module('Modelagem',[]);

modelagemApp.run(function($rootScope,getDataModel){

	$rootScope.json = angular.fromJson(getDataModel.get());
	$rootScope.Models = {};

	(function() {
			var json = $rootScope.json;

			json.$promise.then(function(data) {
				$rootScope.Models = Modelador.entityFactory(data);
				var objView = {};

                /* iteração dentro das entidades de um campo semantico */
             //    angular.forEach($rootScope.Models,function(groupsValue, groupsName) {
	            //     angular.forEach(groupsValue,function(entitysObject, entitysName) {
	            //     	angular.forEach(entitysObject,function(attributesObject, attributesName){
	            //     		if(attributesObject.constructor===Object) {
	            //     			angular.forEach(attributesObject,function(value,key) {
	            //     				objView[entitysName+'.'+attributesName+'.'+ViewFactory.getView(key).title] = ViewFactory.getView(key);
	            //     			});
	            //     		}else {
	            //     			objView[entitysName+'.'+attributesName+'.'+ViewFactory.getView(attributesName).title] = ViewFactory.getView(attributesName);
	            //     		}
	            //     	});
	            //     });
	            // });
				
	            $rootScope.campoDeFormulario = new ElementFactory().buildSegment(objView);
	            console.log($rootScope.Models);
	            Formulario.objectForm($rootScope.Models);
			});
        }
    )();
});