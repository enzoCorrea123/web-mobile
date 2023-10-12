import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';

const Formulario = () => {
    return(
        <section className='formulario'>
            <form>
                <h2>
                    Carlos solicita seus dados para um caso de vida ou morte
                </h2>
                <CampoTexto label="Nome" Placeholder="Digite seu nome:"/>
                <CampoTexto label="Sobrenome" Placeholder="Digite seu sobrenome:"/>
            </form>
        </section>
    )
}
export default Formulario;