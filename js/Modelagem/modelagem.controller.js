modelagemApp.controller('modelagemCtrl',[
    '$scope',
    'modelagemService',
    function($scope,modelagemService){
        $scope.aba = 1;
        $scope.tabAplicativo=false;
        $scope.secretaria ='';
        $scope.salvado='';
        $scope.user ='';
        $scope.secretarias = '';
        $scope.secretariaSeleciodada='';
        $scope.secretariaSeleciodada=null;
        $scope.formulariosDeSecretaria=null;
        $scope.formulario='';
        $scope.formularioSelecionado = false;
        
        var lista_de_secretarias= {};
        var json =angular.fromJson(modelagemService.query());
      
        $scope.trocarAba = function(secretaria){
            $scope.secretariaSeleciodada=secretaria;
            $scope.aba = $scope.aba==1 ? $scope.aba=2:$scope.aba=1;
            
            if($scope.secretariaSeleciodada===null){
              //FACA NADA
            }else{
              $scope.tabAplicativo = $scope.tabAplicativo===false ? $scope.tabAplicativo=true:$scope.tabAplicativo=false;
            }
        };
        
        /*retornado o json faca as seguintes operacoes*/
        /*Vide: o promise é a ultima coisa que é carregada no controller*/
        json.$promise.then(function(data){
          
            $scope.user = data.user;
            
            $scope.secretarias = Object.keys(data.groups);
            
            $scope.listarFormularioDeSecretaria = function(secretaria){
                if(secretaria!==null){
                  console.log(Object.keys(data.groups[secretaria]));
                  return Object.keys(data.groups[secretaria]);
                }
            };
            
            $scope.lista = Object.keys(data.groups['sesad:almoxarifado']);
        });
      }
]);