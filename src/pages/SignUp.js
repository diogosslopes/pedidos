import  '../index.css'
import logo from '../img/Design sem nome.png'
import RoutesApp from '../Routes/Routes'

function SignUp(){
    return(
        <div className="container">
            <img src={logo} id='logo' />
            <div className="container-login">
                <form className="form-login">
                    <label>Nome</label>
                    <input placeholder="Nome"></input>
                    <label>Senha</label>
                    <input placeholder="Senha"></input>
                    <label>Senha</label>
                    <input placeholder="Senha"></input>
                    <div className="container-buttons">
                        <button>Cadastrar</button>
                        <button>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp