
modelagemApp.controller("ModelagemController",
	["Authentication","$location","$scope","$rootScope",
	
	function(Authentication,$location,$scope,$rootScope) {
		
		$scope.registrar = function() {
			Authentication.Login(usuario.matricula, usuario.senha)
		}
	}
]);