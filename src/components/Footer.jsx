const Footer = () => {
  const integrantes = [
    { id: 1, nombre: "Ana Gómez", rol: "CEO & Fundadora" },
    { id: 2, nombre: "Carlos Pérez", rol: "Desarrollador Lead" },
    { id: 3, nombre: "Lucía Fernández", rol: "Diseñadora UX" }
  ];

  return (
    <footer style={{ background: "#34495e", color: "#fff", padding: "20px", marginTop: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <h3>Nuestra Empresa</h3>
          <p>© 2026 Mi Tienda Deportiva. Todos los derechos reservados.</p>
          <p>Políticas de Privacidad | Términos de Servicio</p>
          <p>Contacto: info@mitienda.com | Sucursal Central: Av. Corrientes 1234</p>
        </div>
        
        <div>
          <h3>Nuestro Equipo</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            {integrantes.map(persona => (
              <div key={persona.id} style={{ background: "#2c3e50", padding: "10px", borderRadius: "5px", textAlign: "center", minWidth: "120px" }}>
                <p style={{ margin: "0", fontWeight: "bold" }}>{persona.nombre}</p>
                <small style={{ color: "#bdc3c7" }}>{persona.rol}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
