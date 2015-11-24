Services
.factory("Authentication",['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService',
	function Authentication ($http, $cookieStore, $rootScope, $timeout, UserService) {
		var service = {};

		service.Login = function(matricula,password,callback) {
			var Authorization = 'Basic '+window.btoa(matricula+':'+password);
			$timeout(function() {
				var response;
				$http.get('http://localhost:8080/datasource/rest/login',headers:{'Authorization':Authorization}).
					then(function (res) {
            			if(res) {
            				response = {sucess:true};
            			}else {
            				response = {sucess:false,message:"Matrícula ou senha incorretos"};
            			}
            			callback(response);
        			}, handleError('Error getting user by matricula'));
			},1000);
		};
		return service;
}]);