import React from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonText } from '@ionic/react';
import './UserHomePage.css';

const UserHomePage: React.FC = () => {
  return (
    <IonPage className="user-home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="page-title">Bienvenido a Eco-Mundo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding page-content">
        <IonText>
          <h2 className="page-subtitle">¡Hola, usuario!</h2>
          <p className="page-text">Bienvenido a tu página personalizada de Eco-Mundo. Aquí encontrarás información relevante y actualizaciones sobre temas ambientales.</p>
        </IonText>
        <div className="page-footer">
          <p>&copy; Eco-Mundo 2023</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserHomePage;
