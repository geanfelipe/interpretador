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
        $scope.secretariaSelecionada=null;
        $scope.formulariosDeSecretaria=null;
        $scope.formulario='';
        $scope.formularioSelecionado = false;
        
        var lista_de_secretarias= {};
        var json =angular.fromJson(modelagemService.query());
      
        $scope.trocarAba = function(secretaria){
            $scope.secretariaSelecionada=secretaria;
            $scope.aba = $scope.aba==1 ? $scope.aba=2:$scope.aba=1;
            
            if($scope.secretariaSelecionada===null){
              //FACA NADA
            }else{
              $scope.tabAplicativo = $scope.tabAplicativo===false ? $scope.tabAplicativo=true:$scope.tabAplicativo=false;
            }
        };

        $scope.selecionarFormulario = function(formulario){
            $scope.formularioSelecionado = formulario;
        };
        
        $scope.construtorDoSegmento = function(objView){
            
        };
        /*retornado o json faca as seguintes operacoes*/
        /*Vide: o promise é a ultima coisa que é carregada no controller*/
        json.$promise.then(function(data){
          
            $scope.user = data.user;
            
            $scope.secretarias = Object.keys(data.groups);
            
            $scope.listarFormularioDeSecretaria = function(secretaria){
                if(secretaria!==null){
                  return Object.keys(data.groups[secretaria]);
                }
            };
            $scope.segmetos = function(secretaria,formulario){
                /* objeto contruido com as views de cada entidade do campo semantico selecionado*/
                var objView = {};
                /* iteração dentro das entidades de um campo semantico */
                angular.forEach(data.groups[secretaria][formulario],function(value1,key1){
                    if(key1!='asDefined'){
                        // console.log(key1+':',value1.attributes);
                        /* iteração dentro dos atributos das entidades */
                        angular.forEach(value1.attributes,function(value2,key2){
                            if(key2!='asDefined'){
                                /*console.log(key1+':'+key2+':',value2.view);*/
                                objView[key1+'.'+key2+'.'+value2.view.title] = value2.view;
                            }
                        });
                    }
                });
                console.log(objView);
            };
        });
      }
]);