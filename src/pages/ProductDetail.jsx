import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((p) => p.id === id);
        setProducto(encontrado);
        setCargando(false);
      })
      .catch(() => setCargando(false));
  }, [id]);

  if (cargando) return <p>Cargando detalle...</p>;
  if (!producto) return <p>El producto no existe. <Link to="/productos">Volver al catálogo</Link></p>;

  return (
    <div style={{ display: "flex", gap: "30px", maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #eee" }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "250px", height: "250px", objectFit: "cover" }} />
      <div>
        <h2>{producto.nombre}</h2>
        <p style={{ color: "#7f8c8d", fontStyle: "italic" }}>Categoría: {producto.categoria}</p>
        <p>{producto.descripcion}</p>
        <h3 style={{ color: "#2c3e50" }}>${producto.precio.toLocaleString()}</h3>
        <button style={{ background: "#27ae60", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer" }}>
          Añadir al Carrito (Próximamente)
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
