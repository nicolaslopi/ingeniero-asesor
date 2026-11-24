import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import WhatsApp from "@mui/icons-material/WhatsApp";
import { storeProducts, storeCategories, STORE_WHATSAPP } from "./storeProducts";
import "./VirtualStore.css";

const whatsappLink = (text) =>
  `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(text)}`;

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="card-image-wrapper">
      <span className="badge-id">{product.id}</span>
      <img src={product.image} alt={product.title} loading="lazy" />
    </div>
    <div className="card-content">
      <span className="card-format">{product.format}</span>
      <h3 className="card-title">{product.title}</h3>
      <div className="card-price-row">
        <span className="price-label">Inversión</span>
        <span className="price-value">{product.price}</span>
      </div>
      <a href={product.buyUrl} target="_blank" rel="noopener noreferrer" className="btn-buy">
        <i className="fa-solid fa-cart-shopping"></i> Comprar en Hotmart
      </a>
      <a
        href={whatsappLink(`Hola Ingeniero, quisiera información sobre el producto ${product.id}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp-consult"
      >
        <i className="fa-brands fa-whatsapp"></i> Consultar por WhatsApp
      </a>
    </div>
  </div>
);

const VirtualStore = () => {
  const [category, setCategory] = useState("all");
  const rootRef = useRef(null);

  // App.jsx deja 120px de margen superior (pt: 15) para el navbar fijo, que mide menos.
  // Se sube la página lo que sobra para que la barra superior quede pegada al navbar.
  useLayoutEffect(() => {
    const adjustOffset = () => {
      const root = rootRef.current;
      const navbar = document.querySelector(".MuiAppBar-root");
      if (!root || !navbar || !root.parentElement) return;
      const parentPadding = parseFloat(getComputedStyle(root.parentElement).paddingTop) || 0;
      root.style.marginTop = `${Math.min(0, navbar.offsetHeight - parentPadding)}px`;
    };
    adjustOffset();
    window.addEventListener("resize", adjustOffset);
    return () => window.removeEventListener("resize", adjustOffset);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    document.title = "Catálogo Oficial de Infoproductos y Servicios SG-SST & PESV | IngeAsesor";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const visibleProducts =
    category === "all" ? storeProducts : storeProducts.filter((p) => p.category === category);

  return (
    <>
    <div className="catalogo-ingeasesor" ref={rootRef}>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="top-bar-info">
          <span>
            <i className="fa-solid fa-location-dot" style={{ color: "var(--accent-orange)" }}></i> Cali - Colombia
          </span>
          <span>
            <i className="fa-solid fa-envelope" style={{ color: "var(--accent-orange)" }}></i>{" "}
            <a href="mailto:gerencia@ingeasesorsst.com">gerencia@ingeasesorsst.com</a>
          </span>
        </div>
        <div className="top-bar-info">
          <span>
            <i className="fa-brands fa-whatsapp" style={{ color: "var(--success-green)" }}></i>{" "}
            <a href={`https://wa.me/${STORE_WHATSAPP}`} target="_blank" rel="noopener noreferrer">
              +57 312 237 7845
            </a>
          </span>
          <span>
            <i className="fa-solid fa-globe" style={{ color: "var(--accent-orange)" }}></i>{" "}
            <Link to="/">ingeasesorsst.com</Link>
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="catalog-header">
        <div className="header-container">
          <h1>Catálogo Oficial de Infoproductos &amp; Servicios</h1>
          <p className="subtitle">
            Soluciones digitales, software automatizado, herramientas técnicas y asesorías de vanguardia en
            SG-SST y PESV para profesionales, empresas y consultores en Colombia.
          </p>
        </div>
      </header>

      <div className="catalog-container">
        {/* Author Biography Card */}
        <section className="author-card">
          <div className="author-photo-wrapper">
            <img src="/images/tienda/autor-eduard-gonzalez.jpg" alt="Eduard A. González T." />
          </div>
          <div className="author-details">
            <span className="author-badge">
              <i className="fa-solid fa-user-check"></i> Creador &amp; Director General
            </span>
            <h2>Eduard A. González T.</h2>
            <div className="author-title">Ingeniero Industrial | Especialista SG-SST &amp; PESV</div>
            <p className="author-bio">
              Con más de 10 años de experiencia técnica en Seguridad y Salud en el Trabajo (SG-SST) y Plan
              Estratégico de Seguridad Vial (PESV), lidera <strong>IngeAsesor SST</strong> integrando la
              consultoría de campo con el desarrollo de herramientas de software automatizado con Inteligencia
              Artificial. Diseñador de metodologías prácticas y formador de profesionales a nivel nacional en
              Colombia.
            </p>
          </div>
        </section>

        {/* Category Filter Buttons */}
        <div className="filter-section">
          {storeCategories.map((c) => (
            <button
              key={c.value}
              type="button"
              className={`filter-btn${category === c.value ? " active" : ""}`}
              onClick={() => setCategory(c.value)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Catalog Product Grid */}
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Hotmart Affiliate Section */}
        <section className="affiliate-section">
          <span className="affiliate-badge">
            <i className="fa-solid fa-handshake"></i> Programa VIP de Afiliados
          </span>
          <h2>¿Eres Consultor o Profesional SST? ¡Gana Comisiones Promocionando Nuestros Infoproductos!</h2>
          <p>
            Únete a nuestro programa de afiliados en Hotmart y gana comisiones por cada venta generada con tus
            enlaces. Accede a nuestros kits digitales, software y plantillas para comercializarlos con tu
            audiencia.
          </p>
          <a
            href="https://app-vlc.hotmart.com/affiliates"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-affiliate"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i> Registrarme como Afiliado en Hotmart
          </a>
        </section>
      </div>
    </div>

      {/* Botón flotante de WhatsApp (mismo estilo que el de la página de inicio) */}
      <Box sx={{ position: "fixed", bottom: 20, right: 3, zIndex: 1000 }}>
        <IconButton
          size="medium"
          href={whatsappLink("Hola Ingeniero Eduard, vengo desde su catálogo web y deseo información.")}
          target="_blank"
          rel="noopener noreferrer"
          title="Contacto Directo WhatsApp"
          aria-label="Contacto Directo WhatsApp"
          sx={{ color: "white", bgcolor: "green", "&:hover": { color: "white", bgcolor: "green" } }}
        >
          <WhatsApp sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </>
  );
};

export default VirtualStore;
