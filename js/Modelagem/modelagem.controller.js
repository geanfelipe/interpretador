modelagemApp.controller('modelagemCtrl',['$scope','modelagemService',
    function($scope,modelagemService){
      var metadados =modelagemService.query();
      //$scope.nome=metadados.user;
      $scope.aba = 1;
      $scope.tabAplicativo=false;
      $scope.secretaria ='';
      $scope.salvado='';
      
      console.log(metadados.$get());
    }
]);