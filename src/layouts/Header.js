import react from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-aqua">
        <div className="container px-4 px-lg-5">
            <Link class="navbar-brand" to={'/home'}>TheRich Shop</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="NavbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><Link className="nav-link active" to="/home">Home</Link></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" 
                    data-bs-toggle="dropdown" aria-expanded="false">Shop</a>

                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item"  >All Products</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" >Popular Items</a></li>
                            <li><a className="dropdown-item"  >New Arrivals</a></li>
                        </ul>

                    </li>
                </ul>

            </div>
        </div>
        </nav>
    );
}

export default Header;