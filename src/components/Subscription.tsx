import React from 'react';
import '../styles/TypeText.css';
import HoverTapComponent from './piezas/headers/HoverTapComponent';
import BounceComponent from './piezas/headers/BounceComponent';
const Subscription: React.FC = () => {
  return (
    <section id="subscription" className="subscription text-white">
      <h2>Planes de suscripciones</h2>

      <div className="subscription-cards">
        <BounceComponent>
        <HoverTapComponent>
        <div className="subscription-card text-black">
          <h3>Basic Plan</h3>
          <p>Details of the Basic Plan.</p>
        </div>
        </HoverTapComponent>
        </BounceComponent>
        <BounceComponent>
        <HoverTapComponent>
        <div className="subscription-card text-black">
          <h3>Standard Plan</h3>
          <p>Details of the Standard Plan.</p>
        </div>
        </HoverTapComponent>
        </BounceComponent>
        <BounceComponent>
        <HoverTapComponent>
        <div className="subscription-card text-black">
          <h3>Premium Plan</h3>
          <p>Details of the Premium Plan.</p>
        </div>
        </HoverTapComponent>
        </BounceComponent>
      </div>
    </section>
  );
};

export default Subscription;
