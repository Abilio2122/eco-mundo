import React from 'react';
import { IonPage, IonContent , IonButton, IonRouterLink} from '@ionic/react';
import './Tab1.css';

const Caracteristicas: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <section id="caracteristicas">
          <div className="container">
            <ul>
              <h1>Características</h1>
              <li>
                {' '}
                🟢 Noticias Climáticas Globales
                <p>Mantente al tanto de los últimos eventos y desarrollos relacionados con el clima en todo el mundo.</p>
                                
                <IonButton className="custom_button_ionic">
                  <IonRouterLink href="/Sep4_Caract1">
                    <span role="img" aria-label="Inicio de Sesión">👤 ¡Infórmate YA!</span>
                  </IonRouterLink>
                </IonButton>

              </li>
              <li>
                {' '}
                🟢 Comparación de Niveles de Contaminación
                <p>Compara la calidad del aire y los niveles de contaminación entre diferentes ubicaciones geográficas.</p>
                
                <IonButton className="custom_button_ionic">
                  <IonRouterLink href="/Sep4_Caract2">
                    <span role="img" aria-label="Inicio de Sesión">👤 ¡Infórmate YA!</span>
                  </IonRouterLink>
                </IonButton>
                
              </li>
              <li>
                {' '}
                🟢 Recomendaciones para Viajes Sostenibles
                <p>Descubre destinos y prácticas de viaje que promuevan la sostenibilidad y el respeto al medio ambiente.</p>

                <IonButton className="custom_button_ionic">
                  <IonRouterLink href="/Sep4_Caract3">
                    <span role="img" aria-label="Inicio de Sesión">👤 ¡Infórmate YA!</span>
                  </IonRouterLink>
                </IonButton>
                
              </li>
              <li>
                {' '}
                🟢 Educación y Concienciación Ambiental
                <p>Aprende sobre el cambio climático y cómo puedes contribuir a un futuro más sostenible para nuestro planeta.</p>
                
                <IonButton className="custom_button_ionic">
                  <IonRouterLink href="/Sep4_Caract4">
                    <span role="img" aria-label="Inicio de Sesión">👤 ¡Infórmate YA!</span>
                  </IonRouterLink>
                </IonButton>
                
              </li>
            </ul>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Caracteristicas;
