const { usuarios } = require('.');
const connect = require('./connect');

async function todos(){
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM usuarios");
    return rows;
}

async function consultar(id) {
    const conn = await connect();
    const sql = "SELECT * FROM usuarios WHERE id = ?";
    const [rows] = await conn.query(sql, [id]);
    return rows.length > 0 ? rows[0] : null;
}

async function inserir(usuario) {
    /*const conn = await connect();
    const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    const values = [usuario.nome, usuario.email, usuario.senha];
    const [details] = await conn.query(sql, values);
    return await consultar(details.insertId);*/
    console.log(usuario);
}

async function alterar(id, usuario) {
    const conn = await connect();
    const sql = "UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?";
    const [Values] = [usuario.nome, usuario.email, usuario.senha, id];
    await conn.query(sql, values);
    return await consultar(id);
}

async function remover (id){
    const conn = connect();
    const sql = "DELETE FROM usuarios WHERE id = ?";
    const [values] = [id];
    const [details] = await conn.query(sql, values);
    return details.affectedRows > 0;
}

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