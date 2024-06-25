import React from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonApp, IonButton, IonList, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonImg, IonFooter } from '@ionic/react';
import './UserHomePage.css';

const UserHomePage: React.FC = () => {
  return (
    <IonPage className="user-home-page">
      <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="page-title">Bienvenido a Eco-Mundo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonRow className="ion-justify-content-center ion-align-items-center ion-align-text-center" style={{ height: '50%' }}>
          <IonCol size="12px" size-md="6px">
            <div style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', borderRadius: '5px', maxWidth: '800px'}}>
              <h1>¡Bienvenido a nuestra aplicación!</h1>
              <p>Descubre las últimas noticias sobre el medio ambiente.</p>
            </div>
          </IonCol>
        </IonRow>

        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6" size-lg="4">
              <div style={{ border: '2px solid #007bff', borderRadius: '5px', padding: '10px' }}>
                <IonImg src="https://docs-demo.ionic.io/assets/madison.jpg" />
                <div style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', borderRadius: '5px', maxWidth: '800px'}}>
                  <h1>Se declara alerta sobre el uso de antibioticos en el ganado</h1>
                  <p>si esto no se detiene nos encontraremos con una crisis de salud mundial en unoa años</p>
                </div>
              </div>
            </IonCol>
            <IonCol size="12" size-md="6" size-lg="4">
              <div style={{ border: '2px solid #007bff', borderRadius: '5px', padding: '10px' }}>
                <IonImg src="https://culturainquieta.com/wp-content/uploads/2020/02/Coloridos_peces_koi_alegran_los_canales_y_las_calles_de_esta_localidad_japonesa_4-8a8.jpg"/>
                <div style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', borderRadius: '5px', maxWidth: '800px'}}>
                  <h1>Peces koi en las calles de japon</h1>
                  <p>las aguas de los canales de agua de japon son lo suficientemente puros como para que vivan los peces koi</p>
                </div>
              </div>
            </IonCol>
            <IonCol size="12" size-md="6" size-lg="4">
              <div style={{ border: '2px solid #007bff', borderRadius: '5px', padding: '10px' }}>
                <IonImg src="data:image/jpeg;base64,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" />
                <div style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', borderRadius: '5px', maxWidth: '800px'}}>
                  <h1>Se encuentra ballena barada en playas chilenas</h1>
                  <p>se llama a desalojar las playas de las torpederas luego que una ballena quedara barada en las misma</p>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonText color="medium" className="ion-text-center">
            En caso de tener consultas o algún aporte, llamar al +569 987 654 32
          </IonText>
        </IonToolbar>
      </IonFooter>
      <IonFooter>
        <IonToolbar>
          <IonText color="medium" className="ion-text-center">
            En caso de tener consultas o algún aporte, llamar al +569 987 654 32
          </IonText>
        </IonToolbar>
      </IonFooter>
    </IonApp>
    
    
    </IonPage>
    
  );
};



export default UserHomePage;
