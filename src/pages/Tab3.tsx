import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <p className="logo">ECO-MUNDO !</p>
        <nav>
          <a href="#somos-proya">Quienes Somos</a>
          <a href="#nuestros-programas">Infórmate Con Nosotros</a>
          <a href="#caracteristicas">Características</a>
          <button><a href="register.html">👤Regístrate!</a></button>
          <br />
          <button><a href="login.html">👤Login</a></button>
        </nav>
      </div>
    </header>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section id="hero">
      <h1>Explora y Actúa por un Futuro Sostenible</h1>
      <button><a href="sep1_button_1.html">¡Infórmate YA!</a></button>
    </section>
  );
};

const SomosProyaSection: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <section id="somos-proya">
        <div className="container">
          <div className="texto">
            <h2>Somos <span className="color-acento"><br />ECO-MUNDO!</span></h2>
            <p>
              <span className="color-parrafo">"Eco-Mundo" es una plataforma en línea dedicada a promover la conciencia climática y la sostenibilidad ambiental. Desde noticias sobre el cambio climático hasta recomendaciones para viajes eco-amigables, Eco-Mundo te sumerge en un mundo de información y acción para un futuro más verde.</span>
            </p>
            <br />
            <p>
              <span className="color-parrafo">Noticias Climáticas Globales: Explora las últimas noticias sobre el cambio climático de todo el mundo. Desde informes sobre eventos climáticos extremos hasta avances en tecnologías sostenibles, Eco-Mundo te mantiene informado sobre los desafíos y las soluciones para enfrentar el cambio climático.</span>
            </p>
            <p>
              <span className="color-parrafo">Comparación de Niveles de Contaminación: Compara los niveles de contaminación entre ciudades de todo el mundo o de Chile. Con escalas visuales y datos actualizados, Eco-Mundo te ayuda a entender mejor el impacto de la contaminación atmosférica y tomar medidas para reducir tu propia huella ambiental.</span>
            </p>
            <p>
              <span className="color-parrafo">Recomendaciones para Viajes Sostenibles: Planifica tu próximo viaje de manera responsable con las recomendaciones de Eco-Mundo. Descubre hoteles ecológicos, destinos naturales preservados y actividades eco-amigables que te permitirán disfrutar del mundo de manera sostenible.</span>
            </p>
            <p>
              <span className="color-parrafo">Eco-Mundo no solo te brinda información sobre el cambio climático, sino que también te inspira a tomar medidas concretas para proteger nuestro planeta. Únete a la comunidad de Eco-Mundo y juntos trabajemos hacia un futuro más saludable y sostenible para todos.</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SomosProyaSection;
