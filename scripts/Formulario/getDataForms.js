var getDataForms = function(form) {
	var Models = {'pessoal':new Pessoa(),'funcionario':new Funcionario(),'cidadao':new Cidadao()};
	var object = Models[form];
	var attributes = Object.keys(object);

	for (var i in attributes) {
		object[attributes[i]] = angular.element("input#"+attributes[i]).val();
	}
	console.log(object);
}