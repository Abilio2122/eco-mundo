import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonRouterLink, IonButton } from '@ionic/react';
import axios from 'axios';
import './Sep4_Caract.css';
import img1 from '../MEDIA/Sep4_Caract1_img1.jpg';
import img2 from '../MEDIA/Sep4_Caract1_img2.jpg';
import img3 from '../MEDIA/Sep4_Caract1_img3.jpg';
import img4 from '../MEDIA/Sep4_Caract1_img4.jpg';

const NoticiasClimaticasGlobales: React.FC = () => {
  const [noticias, setNoticias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get('http://localhost:3000/noticias_climaticas');
        setNoticias(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error al obtener noticias:', err);
        setError(true);
        setLoading(false);
      }
    };
    fetchNoticias();
  }, []);


  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return (
      <IonPage>
        <IonContent>
          <header>
            <h1>Noticias Climáticas Globales</h1>
            <IonButton className="custom_button_ionic">
              <IonRouterLink href="/Tab1">
                <span role="img" aria-label="Inicio de Sesión"> Inicio </span>
              </IonRouterLink>
            </IonButton>
          </header>
          <section>
            <h2 className="merriweather">Actualización Continua</h2>
            <p>Eco-Mundo ofrece noticias climáticas actualizadas regularmente para mantenerte informado sobre los últimos eventos y desarrollos relacionados con el clima en todo el mundo.</p>
            <img src={img1} alt="Actualización Continua" className="content-image" />
            <h2 className="merriweather">Variedad de Fuentes</h2>
            <p>Nuestra plataforma recopila información de diversas fuentes confiables, proporcionando una visión completa y precisa del estado del clima global.</p>
            <img src={img2} alt="Variedad de Fuentes" className="content-image" />
            <h2 className="merriweather">Análisis Profundo</h2>
            <p>Además de informar sobre eventos climáticos, Eco-Mundo también ofrece análisis detallados y expertos sobre sus causas y posibles impactos.</p>
            <img src={img3} alt="Análisis Profundo" className="content-image" />
            <h2 className="merriweather">Accesibilidad</h2>
            <p>Las noticias climáticas están disponibles de forma gratuita y accesible para todos los usuarios, fomentando una mayor conciencia y comprensión del cambio climático.</p>
            <img src={img4} alt="Accesibilidad" className="content-image" />
          </section>
          <footer>
            <div className="container">
              <p>&copy; Etiqueta 2023</p>
            </div>
          </footer>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonContent>
        <header>
          <h1>Noticias Climáticas Globales</h1>
          <IonButton className="custom_button_ionic">
            <IonRouterLink href="/Tab1">
              <span role="img" aria-label="Inicio de Sesión"> Inicio </span>
            </IonRouterLink>
          </IonButton>
        </header>
        <section>
          {noticias.map(noticia => (
            <div key={noticia.id}>
              <h2 className="merriweather">{noticia.section_title}</h2>
              <p>{noticia.content}</p>
              {noticia.image_url && <img src={noticia.image_url} alt={noticia.section_title} className="content-image" />}
            </div>
          ))}
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

export default NoticiasClimaticasGlobales;
