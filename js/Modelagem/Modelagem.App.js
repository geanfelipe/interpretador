var modelagemApp = angular.module('Modelagem',['modelagemService','ModelagemFilters']);

modelagemApp.run(function($rootScope){
   $rootScope.autor = "Gean" ;
});