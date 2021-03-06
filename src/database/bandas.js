const connect = require('./connect');

async function  todos(){
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM bandas");
    return rows;
}

async function consultar(id) {
    const conn = await connect();
    const sql = "SELECT * FROM bandas WHERE id = ?";
    const [rows] = await conn.query(sql, [id]);
    return rows.length > 0 ? rows[0] : null;
}

async function inserir(bandas) {
    const conn = await connect();
    const sql = "INSERT INTO bandas (nome, descricao, foto) VALUES (?, ?, ?)"
    const values = [bandas.nome, bandas.descricao, bandas.foto];
    const [details] = await conn.query(sql, values);
    return await consultar(details.insertId);
}

async function alterar(id, bandas) {
    const conn = await connect();
    const sql = "UPDATE bandas SET nome = ?, descricao = ?, foto = ? WHERE id = ?";
    const [values] = [bandas.nome, bandas.descricao, bandas.foto, id];
    await conn.query(sql, values);
    return await consultar(id);
}

async function remover(id) {
    const conn = await connect();
    const sql = "DELETE FROM bandas WHERE id = ?";
    const [values] = [id];
    const [details]= await conn.query(sql, values);
    return details.affectedRows > 0;    
}

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