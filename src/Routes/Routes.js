import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Pedidos from '../pages/Pedidos'
import SignUp from '../pages/SignUp'
import Clients from '../pages/Clients'


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="pedido" element={<Pedidos />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="clients" element={<Clients />} />
            </Routes>
        </BrowserRouter>
    )

} export default RoutesApp