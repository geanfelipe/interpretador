 angular.module("modelagem").controller("readerJsonCtrl", function ($scope, $http) {

	$scope.statusModulesView = {};
	$scope.statusSessionView = {};
	$scope.statusSegmentView = {};
	$scope.status1View = {};

	function loadJson(){
	$http.get("../sgi/json/datamodel.json")
		.success(function(data){

				$scope.element = document.querySelector('.test');

				dataModel = angular.fromJson(data);
				
				angular.forEach(dataModel.groups, function(groups){

					//recuperando todas os módulos do json
					$scope.statusModulesView['module-'+groups.name] = false;

					//recuperando todas as sessões de cada group do json
					$scope.statusSessionView['session-'+groups.name+'-'+groups.setor] = false;

					angular.forEach(groups.fields, function(fields){
						angular.forEach(fields.entities, function(entities){
							angular.forEach(entities.attributes, function(attributes){
								$scope.statusSegmentView['segment-'+groups.name+'-'+groups.setor+'-'+attributes.view.segment] = false;
							});
						});
						
					});	

				})
				
		})
		.catch(function(){
			alert("Falhou ao carregar o arquivo JSON");
		});
	}

	  loadJson();

});	