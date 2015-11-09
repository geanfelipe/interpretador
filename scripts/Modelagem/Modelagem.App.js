var modelagemApp = angular.module('Modelagem',[]);

modelagemApp.run(function($rootScope,getDataModel){
   $rootScope.json = angular.fromJson(getDataModel.get());
});