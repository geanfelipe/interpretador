
//variável global
secretariasModel = [];

//inicialização de variáveis
var secretaria = {};
var setores = [];
var setorObj = {};
var segments = [];
var segmentObj = {};
var inputs = [];
var inputObj = {};
var segmentsName = [];

//método para retornar elementos único de um array
Array.prototype.getUnique = function() {
	var u = {},
		a = [];
	for (var i = 0, l = this.length; i < l; ++i) {
		if (u.hasOwnProperty(this[i])) {
			continue;
		}
		a.push(this[i]);
		u[this[i]] = 1;
	}
	return a;
}

//método para retonar inputs de um segmento em um grupo
var getInputsBySegment = function(segment, list) {

	//limpar variáveis
	inputs = [];
	inputObj = {};

	list.forEach(function(group) {
		angular.forEach(group.entities, function(entities) {
			angular.forEach(entities.attributes, function(attributes) {

				//verifica se o input atual é do segmento desejado
				if (attributes.view.segment == segment) {

					inputObj["name"] = attributes.name;
					inputObj["title"] = attributes.view.title;
					inputObj["readonly"] = attributes.view.readonly;
					inputObj["show"] = attributes.view.show;
					inputObj["showAs"] = attributes.view.showAs;
					inputObj["defaultValue"] = attributes.view.defaultValue;
					inputObj["width"] = attributes.view.width;
					inputObj["mask"] = attributes.view.mask;

					inputs.push(angular.copy(inputObj));

					inputObj = {};

				}
			});
		});
	});
	return inputs;
}

//função principal para leitura do json
function loadJson(data) {
	//requisição ajax para baixar o arquivo json
	//conversão do JSON para objeto javascript
	dataModel = angular.fromJson(data);

	dataModel.groups.forEach(function(groups) {

		//adiciona o nome das secretaria no json
		secretaria["nome"] = groups.name;

		//adiciona o nome dos setores no json
		setorObj["nome"] = groups.setor;

		angular.forEach(groups.fields, function(fields) {
			angular.forEach(fields.entities, function(entities) {
				angular.forEach(entities.attributes, function(attributes) {

					//adiciona todos os nomes de segmentos possíveis encontrados no json
					segmentsName.push(attributes.view.segment);


				});
			});
		});

		//varre um array retonado pelo getUnique, que por sua vez 
		//retorna um array de elementos não repetidos
		segmentsName.getUnique().forEach(function(segmentName) {

			segmentObj["nome"] = angular.copy(segmentName);

			segmentObj["inputs"] = getInputsBySegment(segmentObj["nome"], groups.fields);

			segments.push(angular.copy(segmentObj));

		});

		setorObj["segments"] = segments;
		setores.push(angular.copy(setorObj));
		secretaria["setor"] = setores;

		secretariasModel.push(angular.copy(secretaria));

		//limpeza de variáveis
		secretaria = {};
		setores = [];
		setorObj = {};
		segments = [];
		segmentObj = {};
		segmentsName = [];

	});
	
	console.log(secretariasModel);
	return secretariasModel;
}