import React, { useState } from 'react';
import '../styles/TypeText.css';
import HoverTapComponent from './piezas/headers/HoverTapComponent';
import BounceComponent from './piezas/headers/BounceComponent';
type ServiceType = 'redes' | 'sitioWeb' | 'branding' | 'plantillas' | 'guias' | 'recursos' | '';

const Subscription= () => {

  // Define the state with the type ServiceType
  const [selectedService, setSelectedService] = useState<ServiceType>('');
  const [isExpandedLoHacemos, setIsExpandedLoHacemos] = useState(false);
  const [isExpandedHazloTu, setIsExpandedHazloTu] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  const handleServiceClickLoHacemos = (service : ServiceType) => {
    setSelectedService(service);
    setIsExpandedLoHacemos(!isExpandedLoHacemos);
  };

    const handleServiceClickHazloTu = (service : ServiceType) => {
    setSelectedService(service);
    setIsExpandedHazloTu(!isExpandedHazloTu);
  };

   const handleButtonClickHazloTu = () => {
     setIsExpandedHazloTu(!isExpandedHazloTu); // Transformar el componente
  };
   const handleButtonClickLoHacemos = () => {
     setIsExpandedLoHacemos(!isExpandedLoHacemos); // Transformar el componente
  };


   const serviceContent = {
    redes: (
      <div style={{transition: 'all 0.5s ease'}}>
        <h3>Paquete de Redes</h3>
        <ul>
          <li>Análisis de competencia</li>
          <li>Estrategia de marketing digital</li>
          <li>Estrategia de contenidos</li>
          <li>Calendario de contenidos</li>
        </ul>
      </div>
    ),
    sitioWeb: (
      <div>
        <h3>Sitio Web</h3>
        <ul>
          <li>Diseño personalizado</li>
          <li>Desarrollo web</li>
          <li>SEO básico incluido</li>
          <li>Soporte técnico</li>
        </ul>
      </div>
    ),
    branding: (
      <div>
        <h3>Kit de Branding</h3>
        <ul>
          <li>Diseño de logotipo</li>
          <li>Manual de marca</li>
          <li>Colores y tipografías</li>
        </ul>
      </div>
    ),
    plantillas:(
      <div>
        <h3>COMO LOS CREADORES CONVIERTEN VISTAS EN DINERO</h3>
      </div>
    ),
    guias:(
      <div>
        <h3>EL SISTEMA OPERATIVO NOMADA</h3>
      </div>),
    recursos:(
      <div>
        <h3>60 Ideas de contenido</h3>
      </div>
    ),
  };

  return (
    <section id="subscription" className="subscription text-white" >
      <h2 style={
        {
          fontFamily:"Helvetica",
          fontSize:"70px",
        }
      }>Nuestros servicios</h2>

      <div className="subscription-cards">
        <div className={`subscription-card text-black ${isExpandedLoHacemos ? 'expanded' : ''}`}>
          <h3 style={{fontSize:'24px'}}>Lo Hacemos por ti</h3>
          <div className={`card-content text-black ${isExpandedLoHacemos ? '' : ''}`}>
            {isExpandedLoHacemos ? (
              <>
              
              <div className="card-container-servicios">
              <div className="card-content-servicios">
                  <div className="text-section-servicios">
                    <div className="service-details">
                      {selectedService ? serviceContent[selectedService] : <p>Seleccione un servicio para ver más detalles</p>}
                    </div>
                    <p>PRECIO/Producto o servicio</p>
                    <button  className='subscription-button' onClick={handleButtonClickLoHacemos}>{isExpandedLoHacemos ? "Cerrar" : "Explorar Biblioteca"}</button>
                    
                  </div>
              <div className="image-section">
                <div className="image-placeholder">
                  <p>Aesthetic SM visuals</p>
                </div>
              </div>
              </div>
          </div>
              </>
            ) : (
              <>
                <p className='clickable-text' onClick={() => handleServiceClickLoHacemos('redes')}>Paquete de redes</p>
                <p className='clickable-text' onClick={() => handleServiceClickLoHacemos('sitioWeb')}>Sitio Web</p>
                <p className='clickable-text' onClick={() => handleServiceClickLoHacemos('branding')}>Kit de Branding</p>
                {showButton && <button  className='subscription-button' onClick={handleButtonClickLoHacemos}>{isExpandedLoHacemos ? "Cerrar" : "Explorar Biblioteca"}</button>}
              </>
            )}
        </div>
        </div>
        
        

        <BounceComponent>
        <HoverTapComponent>
        <div className="subscription-card text-black">
          <h3 style={{fontSize:'24px'}}>Asesorias personalizadas</h3>
          <p>Agenda un experto</p>
          <p>Sesion de diagnostico uno a uno</p>
          <p>Plan de accion</p>
          {/* <p>Biblioteca de recursos</p>
          <p>Radiografia de marketing</p>
          <p>Analisis de competencia</p>
          <p>Sesion de resultados</p>
          <p>Reporte de estado de resultados</p>
          <p>Plan de correccion</p>
          <p>Analisis estrategico de areas de oportunidad</p> */}
          <button style={{justifyContent:"flex-end"}} className='subscription-button'> Agenda tu sesion </button>
        </div>
        </HoverTapComponent>
        </BounceComponent>

        
        
        <div className={`subscription-card text-black ${isExpandedHazloTu ? 'expanded' : ''}`}>
          <h3 style={{fontSize:'24px'}}>Hazlo tu mismo</h3>
          <div className={`card-content text-black ${isExpandedHazloTu ? '' : ''}`}>
            {isExpandedHazloTu ? (
              <>
              
              <div className="card-container-servicios">
              <div className="card-content-servicios">
                  <div className="text-section-servicios">
                    <div className="service-details">
                      {selectedService ? serviceContent[selectedService] : <p>Seleccione un servicio para ver más detalles</p>}
                    </div>
                    <p>PRECIO/Producto o servicio</p>
                    <button  className='subscription-button' onClick={handleButtonClickHazloTu}>{isExpandedHazloTu ? "Cerrar" : "Explorar Biblioteca"}</button>
                    
                  </div>
              <div className="image-section">
                <div className="image-placeholder">
                  <p>Aesthetic SM visuals</p>
                </div>
              </div>
              </div>
          </div>
              </>
            ) : (
              <>
                <p className='clickable-text' onClick={() => handleServiceClickHazloTu('plantillas')}>Plantillas</p>
                <p className='clickable-text' onClick={() => handleServiceClickHazloTu('guias')}>Guias, manuales y estrategias</p>
                <p className='clickable-text' onClick={() => handleServiceClickHazloTu('recursos')}>Recursos gratuitos</p>
                    {showButton && <button  className='subscription-button' onClick={handleButtonClickHazloTu}>{isExpandedHazloTu ? "Cerrar" : "Explorar Biblioteca"}</button>}
              </>
            )}
        </div>
        </div>
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
