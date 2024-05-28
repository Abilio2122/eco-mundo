import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonRouterLink } from '@ionic/react';
import './Tab2.css';
import background from '../MEDIA/Tab2_Fondo.jpg'; // Asegúrate de que la ruta sea correcta

const NuestrosProgramas: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nuestros Programas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <section id="nuestros-programas">
          <div className="container">
            <h2>Descubre e Infórmate Con Nosotros</h2>
            <div className="programas">
              <div className="carta">
                <h3>¿Qué es el Calentamiento Global y cómo se produce?</h3>
                <br />
                <p>Es el aumento de la temperatura promedio de la Tierra debido a la acumulación de gases de efecto invernadero. Esto provoca cambios climáticos y impactos ambientales significativos.</p>
                <IonButton>
                  <IonRouterLink className='custom_button_ionic' href="/Sep3_Opcion1">+ info</IonRouterLink>
                </IonButton>
              </div>
              <div className="carta">
                <h3>Medidas para un Futuro Sostenible</h3>
                <br />
                <p>Se centran en reducir las emisiones de gases de efecto invernadero y mitigar el impacto del cambio climático mediante políticas y prácticas sostenibles.</p>
                <IonButton>
                  <IonRouterLink className='custom_button_ionic' href="/Sep3_Opcion2">+ info</IonRouterLink>
                </IonButton>
              </div>
              <div className="carta">
                <h3>Compromiso Global por el Clima</h3>
                <br />
                <p>Involucra esfuerzos coordinados para abordar el cambio climático, promoviendo la sostenibilidad y la resiliencia a nivel global.</p>
                <IonButton>
                  <IonRouterLink className='custom_button_ionic' href="/Sep3_Opcion3">+ info</IonRouterLink>
                </IonButton>
              </div>
            </div>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default NuestrosProgramas;
