var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'usr_admin',
 password:'021100Da00',
 database:'odonto'
 
});
 module.exports=connection;