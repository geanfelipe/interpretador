var searchEntityForPackage = function(data,package_name) {
	var continuar = true;
	var response=[];
	// console.log(package_name);
	angular.forEach(data.groups,function(objectGroup,groupName) {
        if(continuar){
			angular.forEach(objectGroup,function(entityArray,formsName) {
                if(continuar) {
					angular.forEach(entityArray,function(entity,entityName) {
                        if(continuar) {
                        	if(package_name==entity.package+'.'+entityName) {
                            	// console.log('passou');
                            	continuar=false; 
                            	if(entity.inherits) {
                            		var recursive_called = searchEntityForPackage(data,entity.inherits);
                            		response.push(recursive_called);
                            	}
                            	response.push(entity);
                          	}
                        }
					});
				}
			});
		}
	});
	return response;
}

