Services.factory('sendDatasource',['$http',
	function sendDatasource($http) {
		var Http = {};

		Http.post = function(data) {
			$http({method:'POST',url:'http://localhost:3000/rest/model',data:data})
			.then(function(data) {
				console.log("deu certo",data);
			}, function(error) {
				console.log("deu errado",error);
			});	
		};

		return Http;
	
}]);