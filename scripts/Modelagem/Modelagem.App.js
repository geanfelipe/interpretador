var modelagemApp = angular.module('Modelagem',[]);

modelagemApp.run(function($rootScope,modelagemService){
   $rootScope.json = angular.fromJson(modelagemService.query());
});