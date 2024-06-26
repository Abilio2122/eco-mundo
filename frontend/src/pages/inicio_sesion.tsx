import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonRouterLink, IonToast } from '@ionic/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./Inicio_sesion.css";

const Login: React.FC = () => {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const history = useHistory();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', { rut, password });
      if (response.data.success) {
        setToastMessage('Inicio de sesión exitoso');
        setShowToast(true);
        // Redirige según el tipo de usuario
        if (response.data.tipo === 'admin') {
          history.push('/edit_bd');
        } else {
          history.push('/UserHomePage');
        }
      } else {
        setToastMessage(response.data.message);
        setShowToast(true);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setToastMessage('Error al iniciar sesión');
      setShowToast(true);
    }
  };

  return (
    <IonPage className="login-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='login' fullscreen>
        <header>
          <h1>¡Bienvenido!</h1>
          <p>Por favor, inicia sesión para continuar.</p>

          <IonButton className="custom_button_ionic">
            <IonRouterLink href="/Tab3" color="primary">
              <span role="img" aria-label="Inicio">Inicio</span>
            </IonRouterLink>
          </IonButton>

          <IonButton className="custom_button_ionic">
            <IonRouterLink href="/registro" color="primary">
              <span role="img" aria-label="Registrarse">Registro</span>
            </IonRouterLink>
          </IonButton>
        </header>

        <main>
          <form onSubmit={handleLogin}>
            <label htmlFor="rut">RUT:</label><br />
            <input
              type="text"
              id="rut"
              name="rut"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              required
            /><br />

            <label htmlFor="password">Contraseña:</label><br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /><br />

            <input type="submit" value="Iniciar Sesión" />
          </form>
        </main>

        <footer>
          <div className="container">
            <p>&copy; Etiqueta 2023</p>
          </div>
        </footer>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
