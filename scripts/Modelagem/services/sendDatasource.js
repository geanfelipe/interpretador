Services.factory('sendDatasource',[
    '$resource',
    function($resource){
    	return $resource('https://api.github.com/users/:user',{},{
        query:{method:'GET',isArray:false,headers:{'Authorization':'Basic Z2VhbmZlbGlwZToxMjM0NQ=='} },
        save: {method : "POST", params:{}, data: {someDataKey: someDataValue}}
      });
    }]);