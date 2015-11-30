# README #

This README would normally document whatever steps are necessary to get your application up and running.
___
### O que é este projeto ? 

* Interpretador de metadados
* Versão 0.0.0.1
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

___
### Como ter na sua máquina? 

* Dê um clone

___
### Benefícios

* Não precisará mais construir dezenas de formulários que fazem a mesma coisa para setores diferentes.
* A partir do Interpretador, haverá apenas um módulo que atenderá toda a demanda de cadastros e afins.

__
### Libs usada
* Angular 1.3.15
* Semantic UI
___
### Guideline

Ao iniciar a sessão é construído a partir do objeto response um objeto javascript singleton(JSON), com a seguinte estrutura:

    $rootScope.Models  { 

       nome_da_secretaria:nome_do_setor {

            nome_do_formulario  { 

                nome_da_entidade  { 

                    nome_do_atributo:"valor" 

                }      
            }    
        }
    }   


Ao dar um submit no formulário os campos são recuperados e preechidos no objeto e enviado ao servidor.

___
### Contribuidores 

* Danilo
* Gean