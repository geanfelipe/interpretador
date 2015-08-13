var modelagemService = angular.module('modelagemService',[
  'ngResource'
  ]);
  
modelagemService.factory('modelagemService',[
    '$resource',
    function($resource){
      return $resource('json/datamodel.json',{},{
        query:{method:'GET',isArray:false}
      });
    }]);