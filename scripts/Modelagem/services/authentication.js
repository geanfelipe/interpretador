Services
.factory("Authentication",['$http', '$cookieStore', '$rootScope', '$timeout','$q', 
	function Authentication ($http, $cookieStore, $rootScope, $timeout,$q) {
		var service = {};
		var deferred = $q.defer();

		service.Login = function(matricula,senha,callback) {
			var Authorization = 'Basic '+window.btoa(matricula + ':'+ senha);
			$timeout(function() {
				var response;
				$http({method:'GET',url:'http://localhost:3000/rest/model',headers:{'Authorization':Authorization}}).
					then(function (res) {
            			if(res) {
            				deferred.resolve({success:true,message:res});
            				return deferred.promise;
            			}else {
            				deferred.resolve({success:false,message:"Matrícula ou senha incorretos"});
            				return deferred.promise;
            			}
        			}, function(error) {
        				deferred.reject({success:false,message:error}); 
        				return deferred.promise;
        			});
			},1000);
			return deferred.promise;
		};

		service.SetCredentials = function(matricula, senha) {
            var authdata = window.btoa(matricula + ':' + senha);
             $rootScope.globals = {
                sessao: {
                    matricula: matricula,
                    authdata: authdata
                }
            };
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('sessao', $rootScope.globals);
        };

		return service;
}]);