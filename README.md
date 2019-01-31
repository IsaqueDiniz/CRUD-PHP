# Create, Read, Update and Delete  

#### Essa é uma aplicação web simples, que tem como funcionalidade o gerenciamento de livros


***

##### Tecnologias usadas nesse projeto: 
	
* HTML
* CSS ( Bootstrap )
* Javascript
* PHP
* MySql

***

#### Começando:

Clone o repositório em **_public_html_**, e dentro da pasta do projeto rode os seguintes comandos:

```SHELL
npm install
npm start
``` 
***
Está configurado os seguintes scripts em **_package.json_**:

```json
"scripts": {
    "build:prod": "webpack --mode production",
    "watch": "webpack --watch --mode development",
    "start": "webpack --mode production"
  }
```
Esse comandos irão gerar o arquivo **_bundle.js_** na pasta **_dist_**.
***
Também é necessário importar o Banco de Dados que está em:
> ./src/server/mysql/database.sql
***
Para configurar as permissões de acesso de acordo com o seu usuário e senha do seu banco de dados MySql entre no arquivo  **_./src/server/php/Database.php_** :

```php
	private static $user = 'Isaque';
	private static $password = '1234';
	private static $dsn = 'mysql:host=127.0.0.1;dbname=db_BookList';
```

#### Preview: 

![alt text](preview.png 'Interface')

