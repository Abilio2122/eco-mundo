import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonItem, IonList, IonSelect, IonSelectOption, IonCheckbox, IonFooter } from '@ionic/react';

const Register: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Registro de Usuario</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel position="stacked">Nombre de Usuario</IonLabel>
                        <IonInput type="text" required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">RUT</IonLabel>
                        <IonInput type="text" required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Correo Electrónico</IonLabel>
                        <IonInput type="email" required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Región</IonLabel>
                        <IonSelect placeholder="Selecciona..." required>
                            <IonSelectOption value="region1">Región de Arica y Parinacota</IonSelectOption>
                            <IonSelectOption value="region2">Región de Tarapacá</IonSelectOption>
                            <IonSelectOption value="region3">Región de Antofagasta</IonSelectOption>
                            <IonSelectOption value="region4">Región de Atacama</IonSelectOption>
                            <IonSelectOption value="region5">Región de Coquimbo</IonSelectOption>
                            <IonSelectOption value="region6">Región de Valparaíso</IonSelectOption>
                            <IonSelectOption value="region7">Región Metropolitana</IonSelectOption>
                            <IonSelectOption value="region8">Región de O’Higgins</IonSelectOption>
                            <IonSelectOption value="region9">Región del Maule</IonSelectOption>
                            <IonSelectOption value="region10">Región del Ñuble</IonSelectOption>
                            <IonSelectOption value="region11">Región del Biobío</IonSelectOption>
                            <IonSelectOption value="region12">Región de La Araucanía</IonSelectOption>
                            <IonSelectOption value="region13">Región de Los Ríos</IonSelectOption>
                            <IonSelectOption value="region14">Región de Los Lagos</IonSelectOption>
                            <IonSelectOption value="region15">Región de Aysén</IonSelectOption>
                            <IonSelectOption value="region16">Región de Magallanes</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Comuna</IonLabel>
                        <IonInput type="text" required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Contraseña</IonLabel>
                        <IonInput type="password" required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Confirmar Contraseña</IonLabel>
                        <IonInput type="password" required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonCheckbox slot="start" required />
                        <IonLabel>Acepto los términos y condiciones</IonLabel>
                    </IonItem>
                </IonList>
                <IonButton expand="block" type="submit">Registrarse</IonButton>
            </IonContent>
            <IonFooter>
                <div style={{ textAlign: 'center', padding: '1em' }}>
                    <p>&copy; Etiqueta 2023</p>
                </div>
            </IonFooter>
        </IonPage>
    );
}

export default Register;
