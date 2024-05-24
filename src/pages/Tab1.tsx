import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Caracteristicas: React.FC = () => {
  return (
    <section id="caracteristicas">
      <div className="container">
        <ul>
          <h1>Características</h1>
          <li>
            {' '}
            🟢 Noticias Climáticas Globales
            <p>Mantente al tanto de los últimos eventos y desarrollos relacionados con el clima en todo el mundo.</p>
            <button><a href="Sep4_Caract1.html"> + Información</a></button>
          </li>
          <li>
            {' '}
            🟢 Comparación de Niveles de Contaminación
            <p>Compara la calidad del aire y los niveles de contaminación entre diferentes ubicaciones geográficas.</p>
            <button><a href="Sep4_Caract2.html"> + Información</a></button>
          </li>
          <li>
            {' '}
            🟢 Recomendaciones para Viajes Sostenibles
            <p>Descubre destinos y prácticas de viaje que promuevan la sostenibilidad y el respeto al medio ambiente.</p>
            <button><a href="Sep4_Caract3.html"> + Información</a></button>
          </li>
          <li>
            {' '}
            🟢 Educación y Concienciación Ambiental
            <p>Aprende sobre el cambio climático y cómo puedes contribuir a un futuro más sostenible para nuestro planeta.</p>
            <button><a href="Sep4_Caract4.html"> + Información</a></button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Caracteristicas;

