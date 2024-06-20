import React from 'react';
import { IonPage, IonContent, IonRouterLink, IonButton } from '@ionic/react';
import './Sep4_Caract.css';
import img1 from '../MEDIA/Sep4_Caract2_img1.jpg';
import img2 from '../MEDIA/Sep4_Caract2_img2.jpg';
import img3 from '../MEDIA/Sep4_Caract2_img3.jpg';
import img4 from '../MEDIA/Sep4_Caract2_img4.jpg';

const ComparacionNivelesContaminacion: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <header>
          <h1>Comparación de Niveles de Contaminación</h1>
          <IonButton className="custom_button_ionic">
            <IonRouterLink href="/Tab1">
              <span role="img" aria-label="Inicio de Sesión"> Inicio </span>
            </IonRouterLink>
          </IonButton>
        </header>

        <section>
          <h2 className="merriweather">Datos en Tiempo Real</h2>
          <p>Eco-Mundo utiliza datos en tiempo real para permitir a los usuarios comparar la calidad del aire y los niveles de contaminación entre diferentes ubicaciones geográficas.</p>
          <img src={img1} alt="Datos en Tiempo Real" className="content-image" />

          <h2 className="merriweather">Interactividad</h2>
          <p>Nuestra plataforma ofrece herramientas interactivas que facilitan la comparación y visualización de datos sobre contaminación atmosférica.</p>
          <img src={img2} alt="Interactividad" className="content-image" />

          <h2 className="merriweather">Mapas Detallados</h2>
          <p>Los mapas detallados proporcionan una representación visual clara de la distribución de la contaminación, ayudando a identificar áreas con problemas ambientales.</p>
          <img src={img3} alt="Mapas Detallados" className="content-image" />

          <h2 className="merriweather">Información Detallada</h2>
          <p>Además de los niveles de contaminación, Eco-Mundo también proporciona información detallada sobre las fuentes de contaminación y las medidas de mitigación disponibles en cada región.</p>
          <img src={img4} alt="Información Detallada" className="content-image" />
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

export default ComparacionNivelesContaminacion;
