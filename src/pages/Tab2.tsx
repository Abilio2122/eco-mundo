import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import React from 'react';

const NuestrosProgramas: React.FC = () => {
  return (
    <section id="nuestros-programas">
      <div className="container">
        <h2>Descubre e Infórmate Con Nosotros</h2>
        <div className="programas">
          <div className="carta">
            <h3>¿Qué es el Calentamiento Global y cómo se produce?</h3>
            <br />
            <p>Es el aumento de la temperatura promedio de la Tierra debido a la acumulación de gases de efecto invernadero. Esto provoca cambios climáticos y impactos ambientales significativos.</p>
            <button><a href="Sep3_Opcion1.html">+ info</a></button>
          </div>
          <div className="carta">
            <h3>Medidas para un Futuro Sostenible</h3>
            <br />
            <p>Se centran en reducir las emisiones de gases de efecto invernadero y mitigar el impacto del cambio climático mediante políticas y prácticas sostenibles.</p>
            <button><a href="Sep3_Opcion2.html">+ info</a></button>
          </div>
          <div className="carta">
            <h3>Compromiso Global por el Clima</h3>
            <br />
            <p>Involucra esfuerzos coordinados para abordar el cambio climático, promoviendo la sostenibilidad y la resiliencia a nivel global.</p>
            <button><a href="Sep3_Opcion3.html">+ info</a></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestrosProgramas;

