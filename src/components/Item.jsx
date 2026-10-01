import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", width: "200px", textAlign: "center" }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "100%", borderRadius: "4px" }} />
      <h3>{producto.nombre}</h3>
      <p style={{ fontWeight: "bold" }}>\${producto.precio.toLocaleString()}</p>
      <Link to={`/producto/${producto.id}`} style={{ display: "inline-block", background: "#e67e22", color: "white", padding: "8px 12px", textDecoration: "none", borderRadius: "4px" }}>
        Ver Detalle
      </Link>
    </div>
  );
};

export default Item;
