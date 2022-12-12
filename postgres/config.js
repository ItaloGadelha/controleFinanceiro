
const Client = require('pg').Client
const cliente = new Client({
    user: "postgres",
    password: "123456789",
    host: "127.0.0.1",
    port: 5432,
    database: "cont_despesas"
})


//getDespesas()
InsDespesas(2, 2)
//DelDespesas(2)

async function getDespesas() {
    try {
        console.log("Iniciando a conexão")
        await cliente.connect()
        console.log("Sucesso")
        const resultado = await cliente.query("select * from despesas")
        console.table(resultado.rows)
    }
    catch (ex) {
        console.log("erro" + ex)
    }
    finally {
        await cliente.end()
        console.log("desconectado")
    }
}

async function InsDespesas(iddespesa, numprotocolo) {
    try {
        console.log("Iniciando a conexão")
        await cliente.connect()
        console.log("Sucesso")
        await cliente.query('INSERT INTO despesas("iddespesa", "numprotocolo") VALUES (' + "'" + iddespesa + "','" + numprotocolo + "');")
        console.log("Valor Inserido")

        const resultado = await cliente.query("select * from despesas")
        console.table(resultado.rows)
    }
    catch (ex) {
        console.log("erro" + ex)
    }
    finally {
        await cliente.end()
        console.log("desconectado")
    }
}

async function DelDespesas(iddespesa) {
    try {
        console.log("Iniciando a conexão")
        await cliente.connect()
        console.log("Sucesso")
        await cliente.query('DELETE FROM despesas WHERE "iddespesa" = ' + iddespesa + ';')
        console.log("Valor removido")

        const resultado = await cliente.query("select * from despesas")
        console.table(resultado.rows)
    }
    catch (ex) {
        console.log("erro" + ex)
    }
    finally {
        await cliente.end()
        console.log("desconectado")
    }
}