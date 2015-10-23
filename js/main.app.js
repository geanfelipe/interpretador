var mainApp= angular.module('mainApp',[
  'Modelagem',
  'modelagemService',
  ]);

mainApp.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);