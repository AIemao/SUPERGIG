const connect = require('./connect');

async function create() {
    const conn = await connect();
    const sql = `
    CREATE TABLE IF NOT EXISTS usuarios (
        id int not null auto_increment primary key,
        nome varchar(255) not null,
        email varchar(255) not null,
        senha varchar(50) not null
    )`;

    return await conn.query(sql);
}

async function drop() {
    const conn = await connect();
    const sql = `DROP TABLE IF EXISTS usuarios`;

    return await conn.query(sql);
}

module.exports = {
    ddl: {
    create,
    drop
    }
}