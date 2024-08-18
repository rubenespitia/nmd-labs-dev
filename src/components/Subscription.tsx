import React, { useState } from 'react';
import '../styles/TypeText.css';
import HoverTapComponent from './piezas/headers/HoverTapComponent';
import BounceComponent from './piezas/headers/BounceComponent';
const Subscription: React.FC = () => {

   const [showTwoDivs, setShowTwoDivs] = useState(false);

  const handleButtonClick = () => {
    setShowTwoDivs(true); // Mostrar el componente TwoDivs cuando se hace clic
  };

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
          <button style={{justifyContent:"flex-end"}} className='subscription-button'> Consultar disponibilidad </button>
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
          <button style={{justifyContent:"flex-end"}} className='subscription-button' onClick={handleButtonClick}>Explorar Biblioteca</button>
        </div>
        </HoverTapComponent>
        </BounceComponent>

        {showTwoDivs && <TwoDivs />}

      </div>
    </section>
  );
};

// Componente TwoDivs que cambia entre Div1 y Div2
class TwoDivs extends React.Component {
  state = {
    div1Shown: true,
  };

  handleButtonClick = () => {
    this.setState({
      div1Shown: !this.state.div1Shown, // Alterna entre Div1 y Div2
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Show {this.state.div1Shown ? "Div2" : "Div1"}</button>
        {this.state.div1Shown ? (
          <div className="div1">Div1</div>
        ) : (
          <div className="div2">Div2</div>
        )}
      </div>
    );
  }
}

export default Subscription;
