const mysql = require("mysql2/promise");

const connect = async () => {
    if (global.connection && global.connection.state !== "disconnected") 
        return global.connection;
    

    global.connection = await mysql.createConnection(
        "mysql://root:@localhost:3306/supergig");
        return global.connection;
};

module.exports = connect;