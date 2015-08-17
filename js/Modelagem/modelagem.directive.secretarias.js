modelagemApp.directive("listaSecretaria", function($compile) {
    
  return {
    // look for the component element
    restrict: "E",
    link: function(scope, element, attrs) {
      // simple implementation will use ng-repeat in a template
      var tpl = "<ul><li ng-repeat='" + element.attr("data") + "'>" + element.html() + "</li></ul>";
      var html =
        "<a ng-repeat='"+element.attr("data")+"'>"+
        "<span class='item sessao itemmenuhorizontal' contextmenu='funcionario' ng-click='aba=2;tabAplicativo=true; secretariaSeleciodada=secretaria'>"+
        element.html()+"</span></a>";
      // compile the template, link it to a scope
      var linkingFn = $compile(html);
      var domElements = linkingFn(scope);
      console.log(element.html());
      // replace the component element with the live DOM elements
      element.replaceWith(domElements);
    }
  };
});