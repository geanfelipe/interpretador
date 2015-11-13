var Modelador = {
    Models: {},
    searchEntityForPackage: function(data,package_name) {
    	var continuar = true;
    	var response=[];

    	angular.forEach(data.groups,function(objectGroup,groupName) {
            if(continuar){
    			angular.forEach(objectGroup,function(entityArray,formsName) {
                    if(continuar) {
    					angular.forEach(entityArray,function(entity,entityName) {
                            if(continuar) {
                            	if(package_name==entity.package+'.'+entityName) {
                                	continuar=false; 
                                	if(entity.inherits) {
                                		var recursive_called = Modelador.searchEntityForPackage(data,entity.inherits);
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
    },
    entityFactory: function(data) {
        var Models = {};
        angular.forEach(data.groups,function(objectGroup,groupName) {
            angular.forEach(objectGroup,function(entityArray,formsName) {
                Models[groupName] = {};
                angular.forEach(entityArray,function(entity,entityName) {
                    if(entityName!="asDefined") {
                        Models[groupName][entityName] = {};
                        console.log(entityName);
                    }
                    if(entity.inherits) {
                        var packageInheritance = entity.inherits;
                        var entity_extended = Modelador.searchEntityForPackage(data,packageInheritance);
                        var inheritance = Modelador.entityInheritance(entity_extended);

                        angular.forEach(inheritance,function(attributeValue,attributeName){
                            Models[groupName][entityName][attributeName] = attributeValue;
                        });
                    }
                    angular.forEach(entity.attributes,function(attributes,attributesName) {
                        if(attributesName!="asDefined") {
                            Models[groupName][entityName][attributesName] = attributes.view.defaultValue;
                            var attributesArray = Object.keys(data.groups[groupName][formsName][entityName].attributes);
                            
                            ViewFactory.setView(attributesName,attributes.view);
                        }
                    });
                    angular.forEach(entity.associations,function(association,association_key) {
                        if(association_key!="asDefined") {
                            var entitysArray = Object.keys(Models[groupName]);
                            for(var i in entitysArray) {
                                if(entitysArray[i]==association_key.capitalizeFirstLetter()) {
                                    Models[groupName][entityName][association_key] = Models[groupName][entitysArray[i]];
                                }
                            }
                        }
                    });
                });
            });
        });
        this.Models = Models;
        return this.Models;
    },
    entityInheritance: function(entity_extended) {
        var response = {};

        angular.forEach(entity_extended,function(value,key){
            if(value.constructor===Array) {
                angular.forEach(value,function(entityObj,index){
                    angular.forEach(entityObj.attributes,function(attributeObject,attributesName){
                        if(attributeObject) {
                            response[attributesName] = attributeObject.view.defaultValue;
                        }   
                    });
                });
            }else {
                angular.forEach(value.attributes,function(attributeObject,attributesName){
                    if(attributeObject) {
                        response[attributesName] = attributeObject.view.defaultValue;
                    }
                });
            }
        });
        return response;
    },
}