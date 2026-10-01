import NavBar from "./NavBar"; 

const Header = () => {
    return (
        <header style={{ background: "#2c3e50", color: "#fff", padding: "10px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1>Mi Tienda Deportiva</h1>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;