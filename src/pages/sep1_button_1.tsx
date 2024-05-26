import React from 'react';
import { Link } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonRouterLink } from '@ionic/react';
import styles from './sep1_button_1.css';

const Noticia: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <header>
          <h1>Eco-Mundo - Noticias</h1>
          <nav>
            <ul>
              <IonButton className="custom_button_ionic">
                <IonRouterLink href="/Tab3" color="primary">
                  <span role="img" aria-label="Inicio" >👤 Inicio</span>
                </IonRouterLink>
              </IonButton>
            </ul>
          </nav>
        </header>

        <section className='section_sep1'>
          <article>
            <h2>Día de la Tierra: Trabajar por un futuro sostenible</h2>
            <p>Fecha: 19 de Abril de 2024</p>
            <p>El Día de la Tierra es una ocasión para reflexionar sobre la importancia de renovar los ecosistemas dañados y cuidar nuestro planeta. Por ello, es clave tomar medidas para mitigar el impacto negativo de nuestras acciones en el medio ambiente.</p>
            <p>El transporte representa uno de los ámbitos de mayor demanda energética tanto a escala global como local, siendo el petróleo y sus subproductos la principal fuente de energía utilizada en esta área, por lo tanto, una medida fundamental en este ámbito es el fortalecimiento de la electromovilidad en el país y el mundo.</p>
            <p>Según el Balance Nacional de Energía 2020, elaborado por el Ministerio de Medio Ambiente, el sector de transporte en Chile es responsable de aproximadamente un 25,5% del total de las emisiones de Gases de Efecto Invernadero (GEI) del país.</p>
            <p>Tanto las empresas como organizaciones y el estado se han unido para trabajar en conjunto hacia la búsqueda de caminos para reducir las emisiones a corto, mediano y largo plazo. En esa línea, cabe destacar el “Acuerdo por la Electromovilidad”, donde más de 100 actores (empresas e instituciones) firmaron su compromiso por la electromovilidad. Este proyecto es un claro ejemplo de que es fundamental unir fuerzas para lograr el desarrollo de acciones y proyectos que contribuyan a desarrollar en Chile las ventajas de la movilidad eléctrica.</p>
            <p>Es por eso que esta jornada debemos estar más conscientes que nunca de que el desarrollo de políticas públicas, así como el trabajo de privados, nos llevará a un compromiso firme con la reducción de emisiones y la adopción de prácticas sostenibles.</p>
            <p>Es esencial reconocer la importancia de transformar el sector del transporte hacia prácticas más respetuosas con el medio ambiente. Apostar por tecnologías limpias y estrategias de logística sostenible no solo beneficia a nuestro planeta, sino que también impulsa la eficiencia económica y la competitividad a largo plazo.</p>
          </article>
        </section>

        <footer>
          <div className="container">
            <p>&copy; Etiqueta 2023</p>
          </div>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default Noticia;
