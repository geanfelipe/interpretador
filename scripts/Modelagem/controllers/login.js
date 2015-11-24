
modelagemApp.controller("LoginController",
	["Authentication","$location","$scope","$rootScope",
	
	function(Authentication,$location,$scope,$rootScope) {
		
		$scope.usuario = {};

		$scope.registrar = function() {
			$scope.enviando = true;
			Authentication.Login($scope.usuario.matricula, $scope.usuario.senha, function(response) {
				if(response.success) {
					$rootScope.user = response;
					$location.path('/');
				}else {
					$scope.enviando = false;
				}
			});
		}
	}
]);