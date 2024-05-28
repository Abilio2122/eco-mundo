import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink } from '@ionic/react';
import './Sep3_Opcion.css';
import img1 from '../MEDIA/Sep3_Opcion1_img1.jpg'; // Asegúrate de que la ruta es correcta
import img2 from '../MEDIA/Sep3_Opcion1_img2.jpg';
const MainPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>¿Qué es el Calentamiento Global y cómo se produce?</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <header>
          <h1>¿Qué es el Calentamiento Global y cómo se produce?</h1>
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
              <h2 className="merriweather">¿Qué es el Calentamiento Global?</h2>
              <p>El calentamiento global es un fenómeno climático caracterizado por el aumento gradual de la temperatura promedio de la atmósfera terrestre y los océanos en las últimas décadas. Este aumento de la temperatura se atribuye principalmente a la actividad humana, especialmente a la emisión de gases de efecto invernadero, como el dióxido de carbono (CO2), el metano (CH4) y el óxido nitroso (N2O), que atrapan el calor en la atmósfera y causan un efecto invernadero excesivo.</p>
              <img src={img1} alt="Imagen 1" className="content-image" />
            </section>

            <section id="servicios">
              <h2 className="merriweather">¿Cómo se produce?</h2>
              <p>El calentamiento global se produce principalmente debido a la liberación de gases de efecto invernadero (GEI) a la atmósfera como resultado de actividades humanas. Estos gases atrapan el calor en la atmósfera y aumentan la temperatura promedio de la Tierra.</p>
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

export default MainPage;
