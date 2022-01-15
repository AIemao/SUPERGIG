const connect = require('./connect');

async function create() {
    const conn = await connect();
    const sql = `CREATE TABLE IF NOT EXISTS bandas (
        id int not null auto_increment primary key,
        usuario_id int not null,
        nome varchar(255) not null,
        descricao text,
        foto varchar(255)
    )`;

    return await conn.query(sql);
}

async function drop() {
    const conn = await connect();
    const sql = `DROP TABLE IF EXISTS bandas`;
    return await conn.query(sql);
}

module.exports = {
    ddl: {
    create,
    drop
    }
}