  angular.module("modelagem", []);
  angular.module("modelagem").controller("modelagemCtrl", function($scope, $http) {

      $scope.app = "Modelagem de Páginas HTML";

      //variáveis de controle
      $scope.aplicativo = '';
      $scope.segmentView = '';
      $scope.formView = '';
      $scope.segAct = '';

      //requisição get para 'baixar' o json. futuramente será alterado para autenticacao

      $http.get("../sgi/json/datamodel.json")
          .success(function(data) {
              $scope.secretarias = loadJson(data);
          })
          .catch(function() {
              alert("Falhou ao carregar o arquivo JSON");
          });


          //essa função é responsável por identificar a ABA PRINCIPAL SELECIONADA atualmente.
      $scope.alternarAbaPrincipal = function(elementoComActive) {
          var abaAplicativo = angular.element(document.querySelector('#aba-de-aplicativo'));
          var abaPortalAdministrativo = angular.element(document.querySelector('#aba-do-portal-administrativo'));

          if (elementoComActive == 'aba-de-aplicativo') {
              abaAplicativo.addClass('active');
              abaPortalAdministrativo.removeClass('active');
          } else {
              abaPortalAdministrativo.addClass('active');
              abaAplicativo.removeClass('active');
          }
      };

      //ESSA FUNÇÃO PODERÁ SER SUBSTITUIDA POR UM NG-CLASS na div necessária (vou alterar)
      $scope.alternarAba = function(abaParaRemoverOActive, abaParaAdicionarOActive) {
          var elementoAbaParaRemoverOActive = angular.element(document.querySelector(abaParaRemoverOActive));
          var elementoAbaParaAdicionarOActive = angular.element(document.querySelector(abaParaAdicionarOActive));
          elementoAbaParaRemoverOActive.removeClass('block');
          elementoAbaParaRemoverOActive.addClass('none');
          elementoAbaParaAdicionarOActive.removeClass('none');
          elementoAbaParaAdicionarOActive.addClass('block');
      };

      //identificar a secretaria selecionada atualmente
      $scope.mudarAbaDeAplicativo = function(secretaria) {
          $scope.aplicativo = secretaria.nome;
          $scope.segmentView = '';
      };

      //identificar o segmenteView selecionado atualmente
      $scope.mudarSegmentView = function(novoNomeSegmentView) {
          $scope.segmentView = novoNomeSegmentView;
      };

      //identificar segmento ativado.
      //para inserir a classe 'active' na opção do menu de segmentos possíveis
      $scope.mudarSegmentAct = function(novaSegmentAct) {
          $scope.segAct = novaSegmentAct;
          console.log($scope.segAct);
      };
  });