import React, { useState, useEffect } from 'react';
import './registro.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonItem, IonList, IonSelect, IonSelectOption, IonCheckbox, IonFooter } from '@ionic/react';
import data from '../data/cuenta.json';

const Register: React.FC = () => {

    const [formData, setFormData] = useState({
        username: '',
        rut: '',
        email: '',
        region: '',
        comuna: '',
        password: '',
        confirm_password: ''
    });

    useEffect(() => {
        // Cargar datos del JSON al estado del formulario
        setFormData(data);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Registro de Usuario</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <main>
                    <form action="#" method="post">
                        <div>
                            <label id="username">Nombre de Usuario:</label><br />

                            {/*aca hago que en el input del nombre de usuario muestre el json leeido del campo usuario*/}

                            {/*<input type="text" id="username" name="username" required/><br />*/}
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                value={formData.username} // Asigna el valor del estado formData al campo de entrada
                                onChange={handleChange} // Proporciona la función handleChange para manejar los cambios en el campo
                                required
                            />
                        </div>
                        <div>
                            <label id="rut">RUT:</label><br />
                            <input type="text" id="rut" name="rut" required/><br />
                        </div>
                        <div>
                            <label id="email">Correo Electrónico:</label><br />
                            <input type="email" id="email" name="email" required/><br />
                        </div>
                        <div>
                            <label id="region">Región:</label><br />
                            <select id="region" name="region" required>
                                <option value="">Selecciona...</option>
                            <option value="region1">Región de Arica y Parinacota</option>
                            <option value="region2">Región de Tarapacá</option>
                            <option value="region2">Región de Antofagasta</option>
                            <option value="region2">Región de Atacama</option>
                            <option value="region2">Región de Coquimbo</option>
                            <option value="region2">Región de Valparaíso</option>
                            <option value="region2">Región Metropolitana</option>
                            <option value="region2">Región de O’Higgins</option>
                            <option value="region2">Región del Maule</option>
                            <option value="region2">Región del Ñuble</option>
                            <option value="region2">Región del Biobío</option>
                            <option value="region2">Región de La Araucanía</option>
                            <option value="region2">Región de Los Ríos</option>
                            <option value="region2">Región de Los Lagos</option>
                            <option value="region2">Región de Aysén</option>
                            <option value="region2">Región de Magallanes</option>
                            </select>
                        </div>
                        <div>
                            <label id="comuna">Comuna:</label><br />
                            <input type="text" id="comuna" name="comuna" required/><br />
                        </div>
                        <div>
                            <label id="password">Contraseña:</label><br />
                            <input type="password" id="password" name="password" required/><br />
                        </div>
                        <div>
                            <label id="confirm_password">Confirmar Contraseña:</label><br />
                            <input type="password" id="confirm_password" name="confirm_password" required/><br />
                        </div>
                        <div>
                            <input type="checkbox" id="terms" name="terms" required/><br />
                            <label id="terms">Acepto los términos y condiciones</label><br />
                        </div>
                        <div>
                            <button type="submit">Registrarse</button>
                        </div>
                    </form>
                </main>
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
