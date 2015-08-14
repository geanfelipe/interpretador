modelagemApp.controller('modelagemCtrl',[
    '$scope',
    'modelagemService',
    '$log',
    function($scope,modelagemService,$log){
      $scope.$log = $log;
      $scope.aba = 1;
      $scope.tabAplicativo=false;
      $scope.secretaria ='';
      $scope.salvado='';
      $scope.user ='';
      $scope.secretarias = '';
      var lista_de_secretarias= {};
      
      var json =angular.fromJson(modelagemService.query());
      
      json.$promise.then(function(data){
        $scope.user = data.user;
        $scope.secretarias = Object.keys(data.groups);
        
        //console.log($scope.secretarias);
        
      });
    }
]);