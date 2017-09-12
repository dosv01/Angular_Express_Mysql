# Angular_Express_Mysql

1 - Setting up the environment:
	Install node.js (https://nodejs.org/en/)
	Install express generator
		cmd> npm install express -generator -g
	Install express template of node.js
         cmd> express
	Install dependency for mysql
         cmd> npm install mysql –save
	Install Cors
        cmd> npm install cors –save
	Install all the dependency of package.json
		cmd> npm install
	Starting the api
		cmd> npm start
		
		
MySQL table example:

CREATE TABLE IF NOT EXISTS `usuario` (
 `Id` varchar(50) NOT NULL,
 `Nome` varchar(500) DEFAULT NULL,
 `Sobrenome` varchar(500) DEFAULT NULL,
 `Login` varchar(500) DEFAULT NULL,
 `Senha` varchar(500) DEFAULT NULL,
 PRIMARY KEY (`Id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=latin1;