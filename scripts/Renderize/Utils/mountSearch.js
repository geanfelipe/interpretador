function content(array){
  var obj = {title:""};
  var response = [];
  for(var i in array){
     obj["title"]=array[i];
     response.push(obj);
 }
 return response;
}

function sendtoServer(data,classUID,semanticFieldUID) {
	return {
		classUID:classUID,
		semanticFieldUID:semanticFieldUID,
		object: data
	}
}