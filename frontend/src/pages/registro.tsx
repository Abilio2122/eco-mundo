import React, { useState } from 'react';
import './registro.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';

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

    const validateRut = (rut: string) => {
        const rutRegex = /^[1-9]\d{7}$/;  // Acepta solo números del 1 al 9, longitud exacta de 8 dígitos
        return rutRegex.test(rut);
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateRut(formData.rut)) {
            setResponseMessage('El RUT no tiene un formato válido');
            setShowToast(true);
            return;
        }
        if (!validateEmail(formData.email)) {
            setResponseMessage('El correo electrónico no tiene un formato válido');
            setShowToast(true);
            return;
        }
        if (formData.password !== formData.confirm_password) {
            setResponseMessage('Las contraseñas no coinciden');
            setShowToast(true);
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    rut: formData.rut,
                    email: formData.email,
                    region: formData.region,
                    comuna: formData.comuna,
                    password: formData.password
                }), // Solo enviamos la contraseña, no la confirmación
            });
            const result = await response.json(); // Lee la respuesta JSON
            console.log(result); // Muestra los datos en la consola del navegador
            setResponseMessage('Registro correcto'); // Muestra un mensaje conciso en el frontend
            setShowToast(true);
            setFormData(initialFormData); // Restablece el formulario a sus valores iniciales
            history.push('/Tab3'); // Redirige a la página de inicio
        } catch (error) {       
            console.error('Error al enviar los datos:', error);
            setResponseMessage('Error al registrar los datos');
            setShowToast(true);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Registro de Usuario</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='registro'>
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
                                <option value="Región de Arica y Parinacota">Región de Arica y Parinacota</option>
                                <option value="Región de Tarapacá">Región de Tarapacá</option>
                                <option value="Región Metropolitana">Región Metropolitana</option>
                                <option value="Región de O'Higgins">Región de O'Higgins</option>
                                <option value="Región del Maule">Región del Maule</option>
                                <option value="Región del Ñuble">Región del Ñuble</option>
                                <option value="Región del Biobío">Región del Biobío</option>
                                <option value="Región de La Araucanía">Región de La Araucanía</option>
                                <option value="Región de Los Ríos">Región de Los Ríos</option>
                                <option value="Región de Los Lagos">Región de Los Lagos</option>
                                <option value="Región de Aysén">Región de Aysén</option>
                                <option value="Región de Magallanes">Región de Magallanes</option>
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
                    message={responseMessage}
                    duration={2000}
                />
            </IonContent>
        </IonPage>
    );
}

export default Register;
