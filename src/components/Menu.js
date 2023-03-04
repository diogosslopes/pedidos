import { Link } from "react-router-dom";
import logo from '../img/Design sem nome.png'

function Menu(){
    return(
        <nav>
            <div className="container-menu">
                <img src={logo}/>
                
                <Link to='/'>Home</Link>
                <Link to='pedidos'>Pedidos</Link>
                <Link to='clients'>Clientes</Link>
            </div>
            <Link to='/'>Sair</Link>
        </nav>
    )
} export default Menu