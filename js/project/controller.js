  angular.module("modelagem", []);
  angular.module("modelagem").controller("modelagemCtrl", function($scope, $http) {

      $scope.app = "Modelagem de Páginas HTML";

      $scope.aplicativo = '';
      $scope.segmentView = '';
      $scope.formView = '';
      $scope.segAct = '';

      $http.get("../sgi/json/datamodel.json")
          .success(function(data) {
              $scope.secretarias = loadJson(data);
          })
          .catch(function() {
              alert("Falhou ao carregar o arquivo JSON");
          });

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

      $scope.alternarAba = function(abaParaRemoverOActive, abaParaAdicionarOActive) {
          var elementoAbaParaRemoverOActive = angular.element(document.querySelector(abaParaRemoverOActive));
          var elementoAbaParaAdicionarOActive = angular.element(document.querySelector(abaParaAdicionarOActive));
          elementoAbaParaRemoverOActive.removeClass('block');
          elementoAbaParaRemoverOActive.addClass('none');
          elementoAbaParaAdicionarOActive.removeClass('none');
          elementoAbaParaAdicionarOActive.addClass('block');
      };

      $scope.mudarAbaDeAplicativo = function(secretaria) {
          $scope.aplicativo = secretaria.nome;
          $scope.segmentView = '';
      };

      $scope.mudarSegmentView = function(novoNomeSegmentView) {
          $scope.segmentView = novoNomeSegmentView;
      };

      $scope.mudarSegmentAct = function(novaSegmentAct) {
          $scope.segAct = novaSegmentAct;
          console.log($scope.segAct);
      };
  });