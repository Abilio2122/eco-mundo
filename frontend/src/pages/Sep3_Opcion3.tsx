import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink } from '@ionic/react';
import './Sep3_Opcion.css';
import img1 from '../MEDIA/Sep3_Opcion3_img1.jpg'; // Asegúrate de que la ruta es correcta
import img2 from '../MEDIA/Sep3_Opcion3_img2.jpg';
const GlobalCommitmentForClimate: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Compromiso Global por el Clima</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <header>
          <h1>Compromiso Global por el Clima</h1>
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
              <h2 className="merriweather">Compromiso Global</h2>
              <p>El "Compromiso Global" es un término amplio que puede referirse a varias iniciativas, acuerdos o compromisos a nivel mundial para abordar desafíos específicos que enfrenta la humanidad.</p>
              <p>En resumen, un "Compromiso Global" implica la cooperación y la acción coordinada a nivel mundial para abordar desafíos que afectan a toda la humanidad. Esto puede implicar la firma de tratados internacionales, la adopción de políticas y medidas a nivel nacional, así como la participación activa de gobiernos, organizaciones internacionales, empresas y la sociedad civil.</p>
              <img src={img1} alt="Imagen 1" className="content-image" />
            </section>

            <section id="servicios">
              <h2 className="merriweather">Clima</h2>
              <p>Compromiso Global para Combatir el Cambio Climático:</p>
              <p>Este compromiso se refiere a los esfuerzos de la comunidad internacional para reducir las emisiones de gases de efecto invernadero y mitigar los impactos del cambio climático. Incluye acuerdos como el Acuerdo de París y otras iniciativas para limitar el calentamiento global.</p>
              <img src={img2} alt="Imagen 1" className="content-image" />
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

export default GlobalCommitmentForClimate;
