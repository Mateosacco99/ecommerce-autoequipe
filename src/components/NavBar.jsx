import '../styles/navBar.module.scss';
import Cart from './Cart';
import AutoEquipe from '../assets/AutoEquipe.png';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <h1><img className="logo" src={AutoEquipe} alt="AutoEquipe Logo" /></h1>
            <a href="#" className="nav-item">Home</a>
            <a href="#" className="nav-item">Products</a>
            <a href="#" className="nav-item">About</a>
            <a href="#" className="nav-item">Contact</a>
            <Cart />
        </nav>
    );
}

export default NavBar;