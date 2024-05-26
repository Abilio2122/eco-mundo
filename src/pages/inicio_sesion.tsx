import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton, IonRouterLink} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import "./Inicio_sesion.css"

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <header>
          <h1>¡Bienvenido!</h1>
          <p>Por favor, inicia sesión para continuar.</p>

          <IonButton className="custom_button_ionic">
            <IonRouterLink href="/Tab3" color="primary">
              <span role="img" aria-label="Inicio" >Inicio</span>
            </IonRouterLink>
          </IonButton>

          <IonButton className="custom_button_ionic">
            <IonRouterLink href="/registro" color="primary">
              <span role="img" aria-label="Registrarse" >Registro</span>
            </IonRouterLink>
          </IonButton>

        </header>

        <main>
          <form action="#" method="post">
            <label htmlFor="username">Usuario:</label><br />
            <input type="text" id="username" name="username" required /><br />

            <label htmlFor="password">Contraseña:</label><br />
            <input type="password" id="password" name="password" required /><br />

            <input type="submit" value="Iniciar Sesión" />
          </form>
        </main>

        {/* pie de pagina */}
        <footer>
          <div className="container">
            <p>&copy; Etiqueta 2023</p>
          </div>
        </footer>
      </IonContent>
    </IonPage>
  );
}

export default Login;
