import React from 'react';

const Subscription: React.FC = () => {
  return (
    <section id="subscription" className="subscription">
      <h2>Subscription Plans</h2>
      <div className="subscription-cards">
        <div className="subscription-card">
          <h3>Basic Plan</h3>
          <p>Details of the Basic Plan.</p>
        </div>
        <div className="subscription-card">
          <h3>Standard Plan</h3>
          <p>Details of the Standard Plan.</p>
        </div>
        <div className="subscription-card">
          <h3>Premium Plan</h3>
          <p>Details of the Premium Plan.</p>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
