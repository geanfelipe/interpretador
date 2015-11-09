Services.factory('getDataModel',[
    '$resource',
    function($resource) {
    	return $resource('json/datamodel.json',{}, {
        	get:{method:'GET',isArray:false,headers:{'Authorization':'Basic Z2VhbmZlbGlwZToxMjM0NQ=='} }
      	});
    }]);