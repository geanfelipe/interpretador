var mainApp= angular.module('mainApp',[
  'Modelagem',
  'Services',
  'ModelagemFilters',
  'ngRoute',
  ]);

mainApp.config(['$compileProvider','$routeProvider','$locationProvider', 
	function ($compileProvider,$routeProvider,$locationProvider) {
    	$compileProvider.debugInfoEnabled(false);
		
		$routeProvider
			.when("/", {
				controller: 'ModelagemController',
				template:'/home.html'
			})
			.otherwise({redirectTo: '/'});
	}
]);