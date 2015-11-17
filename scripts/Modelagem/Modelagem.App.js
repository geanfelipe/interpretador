var modelagemApp = angular.module('Modelagem',[]);

modelagemApp.run(function($rootScope,getDataModel){

	$rootScope.json = angular.fromJson(getDataModel.get());
	$rootScope.Models = {};

	(function() {
			var json = $rootScope.json;

			json.$promise.then(function(data) {
			$rootScope.Models = Modelador.entityFactory(data);

				$rootScope.formsFacotry = function() {
               
	                var objView = {};
	                /* iteração dentro das entidades de um campo semantico */
	                angular.forEach(data.groups[secretaria][formulario],function(value1,key1) {
	                    if(key1!='asDefined'){
	                        /* iteração dentro dos atributos das entidades */
	                        angular.forEach(value1.attributes,function(value2,key2){
	                            if(key2!='asDefined') {
	                                objView[key1+'.'+key2+'.'+value2.view.title] = value2.view;
	                            }
	                        });
	                    }
	                });
	                $scope.campoDeFormulario = new ElementFactory().buildSegment(objView);
            	};
			});
        }
    )();
});