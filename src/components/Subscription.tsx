import React from 'react';
import '../styles/TypeText.css';
import HoverTapComponent from './piezas/headers/HoverTapComponent';
import BounceComponent from './piezas/headers/BounceComponent';
const Subscription: React.FC = () => {
  return (
    <section id="subscription" className="subscription text-white">
      <h2 style={
        {
          fontFamily:"Helvetica",
          fontSize:"70px",
        }
      }>Nuestros servicios</h2>

      <div className="subscription-cards">
        <BounceComponent>
        <HoverTapComponent>
        <div className="subscription-card text-black">
          <h3>Lo hacemos por ti</h3>
          <p>Paquete de redes.</p>
          <p>Sitio web.</p>
          <p>Kit de Branding.</p>
          <button className='subscription-button'>Ver servicios</button>
        </div>
        </HoverTapComponent>
        </BounceComponent>
        <BounceComponent>
        <HoverTapComponent>
        <div className="subscription-card text-black">
          <h3>Lo hacemos contigo</h3>
          <p>Consultorías Personalizadas.</p>
          <button style={{justifyContent:"flex-end"}}> Consultar disponibilidad </button>
        </div>
        </HoverTapComponent>
        </BounceComponent>
        <BounceComponent>
        <HoverTapComponent>
        <div className="subscription-card text-black" >
          <h3>Hazlo tu mismo...</h3>
          <p>Plantillas.</p>
          <p>Guías, manuales y estrategias.</p>
          <p>Recursos gratuitos.</p>
          <button style={{justifyContent:"flex-end"}}>Explorar Biblioteca</button>
        </div>
        </HoverTapComponent>
        </BounceComponent>
      </div>
    </section>
  );
};

export default Subscription;
