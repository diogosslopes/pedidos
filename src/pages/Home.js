import  '../index.css'
import logo from '../img/Design sem nome.png'
import RoutesApp from '../Routes/Routes'


function Home(){
    return(
        <div className="container">
            <img src={logo} id='logo' />
            <div className="container-login">
                <form className="form-login">
                    <label>E-mail</label>
                    <input placeholder="E-mail"></input>
                    <label>Senha</label>
                    <input placeholder="Senha"></input>
                    <div className="container-buttons">
                        <button>Entrar</button>
                        <button>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home