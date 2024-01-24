import { useState } from 'react';
import './delivery.css'
function delivery(){
    const [status, setStatus] = useState("Pendente")
    return(
        <section className="container">
            <div>
                <p className="status">Status: {status}</p>

            </div>
            <div className="div-button">
                <div>
                    <a onClick={()=>setStatus("Pendente")} className="button">Pendente</a>
                </div>
                <div>
                    <a onClick={()=>setStatus("Em transito")} className="button">Em trânsito</a>
                </div>
                <div>
                    <a onClick={()=>setStatus("Entregue")} className="button">Entregue</a>
                </div>
            </div>
        </section>
    )
}
export default delivery;