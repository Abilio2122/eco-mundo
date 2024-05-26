import React from 'react';
import { IonPage, IonContent ,IonRouterLink, IonButton} from '@ionic/react';
import './Sep4_Caract.css'

const NoticiasClimaticasGlobales: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <header>
          <h1>Noticias Climáticas Globales</h1>

          <IonButton className="custom_button_ionic">
            <IonRouterLink href="/Tab1">
              <span role="img" aria-label="Inicio de Sesión"> Inicio </span>
            </IonRouterLink>
          </IonButton>

        </header>

        <section>
          <h2>Actualización Continua</h2>
          <p>Eco-Mundo ofrece noticias climáticas actualizadas regularmente para mantenerte informado sobre los últimos eventos y desarrollos relacionados con el clima en todo el mundo.</p>
          <img src="MEDIA/inicio_1.jpg" alt="Imagen 1" />

          <h2>Variedad de Fuentes</h2>
          <p>Nuestra plataforma recopila información de diversas fuentes confiables, proporcionando una visión completa y precisa del estado del clima global.</p>
          <img src="MEDIA/inicio_1.jpg" alt="Imagen 2" />

          <h2>Análisis Profundo</h2>
          <p>Además de informar sobre eventos climáticos, Eco-Mundo también ofrece análisis detallados y expertos sobre sus causas y posibles impactos.</p>
          <img src="MEDIA/inicio_1.jpg" alt="Imagen 3" />

          <h2>Accesibilidad</h2>
          <p>Las noticias climáticas están disponibles de forma gratuita y accesible para todos los usuarios, fomentando una mayor conciencia y comprensión del cambio climático.</p>
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

export default NoticiasClimaticasGlobales;
