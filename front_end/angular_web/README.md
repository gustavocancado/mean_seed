# Mean-Seed Website Front-End

Website Front-End para o projeto Mean-Seed, usando AngularJS. Desenvolvido por Bruno Duarte Brito, como projeto Open-Source.

### Versão
1.0.0

### Tecnologia envolvida

Lista de tecnologias e linguagens de programação envolvidas:

* [TypeScript](https://www.typescriptlang.org/)
* [Angular CLI](https://cli.angular.io/)
* [AngularJS 4](https://angular.io/)

### Instalação

Antes de baixar o repositório, tenha certeza que sua máquina possui [NodeJS](https://nodejs.org/en/) e [Angular CLI](https://cli.angular.io/)

Prepare a plataforma, baixe os módulos e abra o projeto no navegador:

```sh
$ npm install # instala todos os módulos do npm
$ ng serve # abre um servidor local de desenvolvimento
```

Os arquivos do website estarão na pasta ```src```.

### Produção

Para realizar a build final do projeto (versão para produção, minificada), execute o seguinte comando:

```sh
$ ng build --prod # realiza a build em ambiente de produção
```

Os arquivos minificados e prontos para envio ao servidor estarão na pasta ```dist```.

*Passe o argumento ```--aot``` para realizar a compilação [ahead-of-time](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)*

Para abrir um servidor local em modo produção, basta executar:

```sh
$ ng serve --prod
```

*Confira a pasta ```environments``` para mais informações sobre os ambientes disponíveis*

*Para saber mais sobre o processo de build utilizado, visite [Angular CLI](https://cli.angular.io/)*

**Bruno Duarte Brito - 2017**