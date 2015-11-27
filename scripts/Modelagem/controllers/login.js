
modelagemApp.controller("LoginController",
	["Authentication","$location","$scope","$rootScope","$window",
	
	function(Authentication,$location,$scope,$rootScope,$window) {
		
		$scope.usuario = {};
		$scope.error = false;
		$scope.enviando = false;

		$scope.registrar = function() {
		
			$scope.enviando = true;
			console.log($scope.enviando);

			Authentication.Login($scope.usuario.matricula, $scope.usuario.senha)
				.then(function(response) {
					console.log(response);
					if(response.message.data.status==200) {
						Authentication.SetCredentials($scope.usuario.matricula,$scope.usuario.senha);

						var data = response.message.data.message;
						$scope.enviando = false;
						$rootScope.json = angular.fromJson(data);
						$rootScope.Models = {};

						(function() {
													
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
					                				objView[formsName][entitysName+'.'+attributesName] = ViewFactory.getView(formsName,entitysName+"."+attributesName);
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

				        })();
					    $scope.error = false;
					    $location.path('/');
					} else {
						$scope.error = "Matrícula ou login incorretos";	
						$scope.enviando = false;
						
					}
				},function(error) {
					$scope.error = "Ocorreu algum erro, contacte ao administrador do sistema";
					$scope.enviando = false;
				});
		}
	}
]);