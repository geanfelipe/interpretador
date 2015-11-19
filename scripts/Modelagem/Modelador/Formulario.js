var Formulario = {
	objectForm: function(Model) {
		objectForm = {};
		console.log(Model);

		angular.forEach(Model,function(groupsValue,groupsName) {
			objectForm[groupsName] = {};
			angular.forEach(groupsValue,function(entitysValue,entitysName) {
				Formulario.buildSegment(entitysName,entitysValue);
			});
		});

		return objectForm;
	},
	buildSegment: function(entityName,attributes) {
		var response = {};
		console.log(entityName,attributes);

		angular.forEach(attributes, function(value, name) {
			console.log(value);
		});
	},
};