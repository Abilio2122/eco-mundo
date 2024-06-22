import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './registro.css';

const Register: React.FC = () => {
    const initialFormData = {
        username: '',
        rut: '',
        email: '',
        region: '',
        comuna: '',
        password: '',
        confirm_password: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [responseMessage, setResponseMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const history = useHistory();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            console.log(result);
            setResponseMessage(result.message); // Usa solo el mensaje del backend
            setShowToast(true); // Mostrar el toast

            // Redirigir a la página inicial después de un breve retraso
            setTimeout(() => {
                history.push('/');
            }, 2000); // Ajusta el tiempo según sea necesario

            setFormData(initialFormData); // Restablece el formulario a sus valores iniciales
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            setResponseMessage('Error al registrar los datos');
            setShowToast(true); // Mostrar el toast en caso de error también
        }
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
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Nombre de Usuario:</label><br />
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                value={formData.username}
                                onChange={handleChange}
                                required
                            /><br />
                        </div>
                        <div>
                            <label htmlFor="rut">RUT:</label><br />
                            <input 
                                type="text" 
                                id="rut" 
                                name="rut" 
                                value={formData.rut}
                                onChange={handleChange}
                                required
                            /><br />
                        </div>
                        <div>
                            <label htmlFor="email">Correo Electrónico:</label><br />
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            /><br />
                        </div>
                        <div>
                            <label htmlFor="region">Región:</label><br />
                            <select 
                                id="region" 
                                name="region"
                                value={formData.region}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona...</option>
                                <option value="region1">Región de Arica y Parinacota</option>
                                <option value="region2">Región de Tarapacá</option>
                                <option value="region3">Región Metropolitana</option>
                                <option value="region4">Región de O'Higgins</option>
                                <option value="region5">Región del Maule</option>
                                <option value="region6">Región del Ñuble</option>
                                <option value="region7">Región del Biobío</option>
                                <option value="region8">Región de La Araucanía</option>
                                <option value="region9">Región de Los Ríos</option>
                                <option value="region10">Región de Los Lagos</option>
                                <option value="region11">Región de Aysén</option>
                                <option value="region12">Región de Magallanes</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="comuna">Comuna:</label><br />
                            <input 
                                type="text" 
                                id="comuna" 
                                name="comuna"
                                value={formData.comuna}
                                onChange={handleChange}
                                required
                            /><br />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña:</label><br />
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            /><br />
                        </div>
                        <div>
                            <label htmlFor="confirm_password">Confirmar Contraseña:</label><br />
                            <input 
                                type="password" 
                                id="confirm_password" 
                                name="confirm_password"
                                value={formData.confirm_password}
                                onChange={handleChange}
                                required
                            /><br />
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                id="terms" 
                                name="terms"
                                required
                            /><br />
                            <label htmlFor="terms">Acepto los términos y condiciones</label><br />
                        </div>
                        <div>
                            <button type="submit">Registrarse</button>
                        </div>
                    </form>
                </main>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={responseMessage} // Muestra solo el mensaje
                    duration={2000}
                />
            </IonContent>
        </IonPage>
    );
}

export default Register;
