import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink } from '@ionic/react';
import './Sep3_Opcion.css';

const MeasuresForSustainableFuture: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Medidas para un Futuro Sostenible</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <header>
          <h1>Medidas para un Futuro Sostenible</h1>
        </header>

        <nav>

        <IonButton className="custom_button_ionic">
            <IonRouterLink href="/Tab2">
              <span role="img" aria-label="Inicio"> Inicio </span>
            </IonRouterLink>
          </IonButton>
          
        </nav>

        <main>
          <div className="container">
            <section id="quienes_somos">
              <h2>Medidas</h2>
              <p>Para abordar el calentamiento global y asegurar un futuro sostenible, se requieren una serie de medidas a nivel global, nacional y local. Aquí hay algunas acciones clave que se pueden tomar:</p>
              <ol>
                <li>Reducción de emisiones de gases de efecto invernadero (GEI)</li>
                <li>Conservación de bosques y reforestación</li>
                <li>Adaptación al cambio climático</li>
                <li>Educación y concienciación</li>
                <li>Cooperación internacional</li>
                <li>Investigación y desarrollo tecnológico</li>
              </ol>
              <img src="MEDIA/inicio_1.jpg" alt="Imagen 1" />
            </section>

            <section id="servicios">
              <h2>Sostenibilidad</h2>
              <p>Dentro del marco de la sostenibilidad, se promueven acciones y prácticas que permiten satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer sus propias necesidades. Esto implica equilibrar los aspectos económicos, sociales y ambientales para garantizar un desarrollo sostenible a largo plazo.</p>
              <img src="MEDIA/inicio_1.jpg" alt="Imagen 1" />
            </section>
          </div>
        </main>

        <footer>
          <div className="container">
            <p>&copy; Etiqueta 2023</p>
          </div>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default MeasuresForSustainableFuture;
