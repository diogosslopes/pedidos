import  '../index.css'
import logo from '../img/Design sem nome.png'
import RoutesApp from '../Routes/Routes'
import Menu from '../components/Menu'


function Clients(){
    return(
        <div className="container">
            <Menu />
            <div className='new-client'>
                <h2>Novo Cliente</h2>
                <label>Nome</label>
                <input placeholder='Nome'/>
                <label>Teleone</label>
                <input placeholder='Telefone'/>
                <div className='container-buttons'>
                    <button>Salvar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Clients