# README #

This README would normally document whatever steps are necessary to get your application up and running.

### O que é este formulário ? ###

* Interpretador de metadados
* Versão 0.0.0.1
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### Como ter na sua máquina? ###

* Dê um clone


### Guideline ###

Ao iniciar a sessão é construído a partir do objeto response um objeto javascript singleton(JSON), com a seguinte estrutura:

###
$rootScope.Models = { 

  nome_da_secretaria:nome_do_setor  {

    nome_do_formulario { 

      nome_da_entidade { 

        nome_do_atributo:"valor" 

      } 
    } 
  }
} 
###

Ao dar um submit no formulário os campos são recuperados e preechidos no objeto e enviado ao servidor.

### Contribuidores ###

* Danilo
* Gean