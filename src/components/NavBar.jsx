import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav style={{ display: "flex", gap: "15px" }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Inicio</Link>
            <Link to="/productos" style={{ color: "#fff", textDecoration: "none" }}>Productos</Link>
            <Link to="/carrito" style={{ color: "#fff", textDecoration: "none" }}>Carrito</Link>
        </nav>
    );
}

export default NavBar;