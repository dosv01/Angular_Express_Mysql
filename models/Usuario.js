var db = require('../dbconnection'); //reference of dbconnection.js

var Usuario = {

    getAllUsuarios: function (callback) {

        return db.query("Select * from usuario", callback);
    },

    getUsuarioById: function (id, callback) {

        return db.query("select * from usuario where Id=?", [id], callback);
    },

    addUsuario: function (Usuario, callback) {
        return db.query("Insert into usuario values(?,?,?)", [Usuario.Id, Usuario.Title, Usuario.Status], callback);
    },

    deleteUsuario: function (id, callback) {
        return db.query("delete from usuario where Id=?", [id], callback);
    },

    updateUsuario: function (id, Usuario, callback) {
        return db.query("update usuario set Title=?,Status=? where Id=?", [Usuario.Title, Usuario.Status, id], callback);
    }

};
module.exports = Usuario;