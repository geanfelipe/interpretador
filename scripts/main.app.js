var mainApp= angular.module('mainApp',[
  'Modelagem',
  'Services',
  'ModelagemFilters',
  ]);

mainApp.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);