var mainApp= angular.module('mainApp',[
  'Modelagem',
  'modelagemService',
  'ModelagemFilters',
  'ModelagemDirectives',
  ]);

mainApp.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);