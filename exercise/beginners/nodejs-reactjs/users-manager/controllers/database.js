var mysql = require('mysql2');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'users_manager',
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});

var getConnection = function (cb) {
    pool.getConnection(function (err, connection) {
        //if(err) throw err;
        //pass the error to the cb instead of throwing it
        if(err) {
            return cb(err);
        }
        cb(null, connection);
    });
};

module.exports = getConnection;
