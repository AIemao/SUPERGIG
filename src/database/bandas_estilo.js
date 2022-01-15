const connect = require('./connect');

async function  todos(){
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM bandas_estilo");
    return rows;
}

async function consultar(id) {
    const conn = await connect();
    const sql = "SELECT * FROM bandas_estilo WHERE id = ?";
    const [rows] = await conn.query(sql, [id]);
    return rows.length > 0 ? rows[0] : null;
}

async function inserir(bandas_estilo) {
    const conn = await connect();
    const sql = "INSERT INTO bandas_estilo (nome) VALUES (?)"
    const values = [bandas_estilo.nome];
    const [details] = await conn.query(sql, values);
    return await consultar(details.insertId);
}

async function alterar(id, bandas_estilo) {
    const conn = await connect();
    const sql = "UPDATE bandas_estilo SET nome = ? WHERE id = ?";
    const [values] = [bandas_estilo.nome, id];
    await conn.query(sql, values);
    return await consultar(id);
}

async function remover(id) {
    const conn = await connect();
    const sql = "DELETE FROM bandas_estilo WHERE id = ?";
    const [values] = [id];
    const [details]= await conn.query(sql, values);
    return details.affectedRows > 0;    
}

async function create() {
    const conn = await connect();
    const sql = `CREATE TABLE IF NOT EXISTS bandas_estilo (
        id int not null auto_increment primary key,
        nome varchar(255) not null 
    )`;

    return await conn.query(sql);
}

async function drop() {
    const conn = await connect();
    const sql = `DROP TABLE IF EXISTS bandas_estilo`;
    return await conn.query(sql);
}

module.exports = {
    todos,
    consultar,
    inserir,
    alterar,
    remover,
    ddl: {
    create,
    drop
    }
}