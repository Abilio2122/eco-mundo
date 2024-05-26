import React from 'react';
import { IonPage, IonContent, IonRouterLink, IonButton } from '@ionic/react';
import './Sep4_Caract.css'

const EducacionConcienciacionAmbiental: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <header>
          <h1>Educación y Concienciación Ambiental</h1>

          <IonButton className="custom_button_ionic">
            <IonRouterLink href="/Tab1">
              <span role="img" aria-label="Inicio"> Inicio </span>
            </IonRouterLink>
          </IonButton>
          
        </header>

        <section>
          <h2>Recursos Educativos</h2>
          <p>Eco-Mundo ofrece una amplia gama de recursos educativos, como artículos, videos y guías, para ayudar a los usuarios a comprender mejor el cambio climático y sus impactos.</p>
          <img src="MEDIA/inicio_1.jpg" alt="Imagen 1" />

          <h2>Información Científica</h2>
          <p>Nuestra plataforma presenta información respaldada por la ciencia, proporcionando una comprensión sólida y fundamentada sobre cuestiones ambientales.</p>
          <img src="MEDIA/inicio_1.jpg" alt="Imagen 2" />

          <h2>Acciones Prácticas</h2>
          <p>Además de la educación, Eco-Mundo fomenta la acción práctica al ofrecer consejos sobre cómo reducir la huella ambiental y contribuir a la sostenibilidad.</p>
          <img src="MEDIA/inicio_1.jpg" alt="Imagen 3" />

          <h2>Comunidad de Concienciación</h2>
          <p>Eco-Mundo crea una comunidad de concienciación ambiental al facilitar la interacción y el intercambio de ideas entre usuarios comprometidos con la protección del medio ambiente.</p>
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

export default EducacionConcienciacionAmbiental;
