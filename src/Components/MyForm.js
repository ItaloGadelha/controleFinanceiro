import './MyForm.css'
import { useState } from 'react'

const MyForm = ({ user }) => {

    const [Protocolo, setProtocolo] = useState("")
    const [numProtocolo, setnumProtocolo] = useState("")
    const [anoProtocolo, setanoProtocolo] = useState("")
    const [tpDespesa, settpDespesa] = useState("")
    const [dtProtocolo, setdtProtocolo] = useState("")
    const [dtVencimento, setdtVencimento] = useState("")
    const [credorDespesa, setcredorDespesa] = useState("")
    const [descDespesa, setdescDespesa] = useState("")
    const [vlDespesa, setvlDespesa] = useState("")
    const [sitDespesa, setsitDespesa] = useState("")
    const [usuario, setusuario] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Enviando o Formulario")
        console.log(Protocolo, numProtocolo, anoProtocolo, tpDespesa, dtProtocolo, dtVencimento, credorDespesa, descDespesa, vlDespesa, sitDespesa, usuario)

        // Validação
        //envio

        // 7- Limpar Formularios
        setProtocolo("")
        setnumProtocolo("")
        setanoProtocolo("")
        settpDespesa("")
        setdtProtocolo("")
        setdtVencimento("")
        setcredorDespesa("")
        setdescDespesa("")
        setvlDespesa("")
        setsitDespesa("")
        setusuario("")

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>
                    <label >
                        <span>Busca Despesas:</span>
                        <select
                            name="Protocolo"
                            onChange={(e) => setProtocolo(e.target.value)}
                            value={Protocolo}>
                            <option value=""></option>
                            <option value="user">Usuário</option>
                            <option value="edidor">Editor</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </label>
                    <label htmlFor="sitDespesa">sitDespesa:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        onChange={(e) => setsitDespesa(e.target.value)}
                        value={sitDespesa}
                    />
                </h2>

                <div>
                    <label htmlFor="numProtocolo">Número do Protocolo:</label>
                    <input
                        type="text"
                        name="numProtocolo"
                        placeholder="Número do Protocolo"
                        onChange={(e) => setnumProtocolo(e.target.value)}
                        value={numProtocolo}
                    />
                    <label htmlFor="anoProtocolo"></label>
                    <input
                        type="text"
                        name="anoProtocolo"
                        placeholder="Ano"
                        onChange={(e) => setanoProtocolo(e.target.value)}
                        value={anoProtocolo}
                    />
                </div>
                <div>
                    <label htmlFor="dtProtocolo">Data do Protocolo:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        onChange={(e) => setdtProtocolo(e.target.value)}
                        value={dtProtocolo}
                    />
                </div>
                <div>
                    <label htmlFor="tpDespesa">tipo Despesa:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        onChange={(e) => settpDespesa(e.target.value)}
                        value={tpDespesa}
                    />
                </div>
                <div>
                    <label htmlFor="vlDespesa">Valor da Despesa:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        onChange={(e) => setvlDespesa(e.target.value)}
                        value={vlDespesa}
                    />
                </div>
                <div>
                    <label htmlFor="dtVencimento">dtVencimento:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        onChange={(e) => setdtVencimento(e.target.value)}
                        value={dtVencimento}
                    />
                </div>
                <div>
                    <label htmlFor="credorDespesa">credorDespesa:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        onChange={(e) => setcredorDespesa(e.target.value)}
                        value={credorDespesa}
                    />
                </div>
                <div>
                    <label htmlFor="usuario">usuario:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        onChange={(e) => setusuario(e.target.value)}
                        value={usuario}
                    />
                </div>
                <label>
                    Descrição da Despesa:
                    <textarea
                        name="descDespesa"
                        placeholder="Descrição da Despesa"
                        onChange={(e) => setdescDespesa(e.target.value)}
                        value={descDespesa}
                        cols="50"
                        rows="3"
                    >
                    </textarea>

                </label>

                <div>
                    <input type="submit" value="Novo" />
                    <input type="submit" value="Enviar" />
                    <input type="submit" value="Exluir" />
                </div>
            </form>

            {/*  */}
        </div>
    )
}

export default MyForm