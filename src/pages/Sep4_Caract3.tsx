import React from 'react';
import { IonPage, IonContent, IonRouterLink, IonButton } from '@ionic/react';
import './Sep4_Caract.css'

const RecomendacionesViajesSostenibles: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <header>
          <h1>Recomendaciones para Viajes Sostenibles</h1>

          <IonButton className="custom_button_ionic">
            <IonRouterLink href="/Tab1">
              <span role="img" aria-label="Inicio"> Inicio </span>
            </IonRouterLink>
          </IonButton>
          
        </header>

        <section>
          <h2>Destinos Eco-Amigables</h2>
          <p>Eco-Mundo destaca destinos turísticos que están comprometidos con prácticas de viaje sostenibles y la preservación del medio ambiente.</p>
          <img src="MEDIA/inicio_1.jpg" alt="Imagen 1" />

          <h2>Alojamientos Respetuosos con el Medio Ambiente</h2>
          <p>Nuestra plataforma recomienda una variedad de alojamientos que han implementado medidas para reducir su huella ambiental, como hoteles ecológicos y eco-lodges.</p>
          <img src="MEDIA/inicio_1.jpg" alt="Imagen 2" />

          <h2>Actividades Responsables</h2>
          <p>Eco-Mundo sugiere actividades de viaje que promueven el turismo responsable, como excursiones guiadas por expertos locales en conservación ambiental.</p>
          <img src="MEDIA/inicio_1.jpg" alt="Imagen 3" />

          <h2>Consejos Prácticos</h2>
          <p>Además de las recomendaciones de destinos y alojamientos, Eco-Mundo proporciona consejos prácticos para viajar de manera más sostenible, como reducir el consumo de plástico y apoyar a las comunidades locales.</p>
        </section>

        <footer>
          <div className="container">
            <p>&copy; Etiqueta 2023</p>
          </div>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default RecomendacionesViajesSostenibles;
