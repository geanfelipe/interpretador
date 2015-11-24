Services
.factory("Authentication",['$http', '$cookieStore', '$rootScope', '$timeout', 
	function Authentication ($http, $cookieStore, $rootScope, $timeout) {
		var service = {};

		service.Login = function(matricula,senha,callback) {
			var Authorization = 'Basic '+window.btoa(matricula+':'+senha);
			$timeout(function() {
				var response;
				$http({method:'GET',url:'//localhost:8080/datasource/rest/login',headers:{'Authorization':Authorization},params: {matricula: matricula,senha:senha}}).
					then(function (res) {
            			if(res) {
            				response = {sucess:true};
            			}else {
            				response = {sucess:false,message:"Matrícula ou senha incorretos"};
            			}
        			}, function(error) {
        				response = {sucess:false,message:error}
        			});
			},1000);
		};
		return service;
}]);