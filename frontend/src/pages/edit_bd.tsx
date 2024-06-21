import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonTextarea } from '@ionic/react';
import axios from 'axios';

const EditarNoticiasClimaticas: React.FC = () => {
  const [noticias, setNoticias] = useState<any[]>([]);
  const [editingNoticia, setEditingNoticia] = useState<any | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      const response = await axios.get('http://localhost:3000/noticias_climaticas');
      setNoticias(response.data);
    };
    fetchNoticias();
  }, []);

  const handleEdit = (noticia: any) => {
    setEditingNoticia(noticia);
  };

  const handleSave = async () => {
    if (editingNoticia) {
      const response = await axios.put(`http://localhost:3000/noticias_climaticas/${editingNoticia.id}`, editingNoticia);
      if (response.data.success) {
        setNoticias(noticias.map(n => (n.id === editingNoticia.id ? editingNoticia : n)));
        setEditingNoticia(null);
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Editar Noticias Climáticas Globales</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {noticias.map(noticia => (
          <div key={noticia.id}>
            <h2>{noticia.section_title}</h2>
            <p>{noticia.content}</p>
            <IonButton onClick={() => handleEdit(noticia)}>Editar</IonButton>
          </div>
        ))}
        {editingNoticia && (
          <div>
            <IonInput
              value={editingNoticia.section_title}
              onIonChange={e => setEditingNoticia({ ...editingNoticia, section_title: e.detail.value })}
            />
            <IonTextarea
              value={editingNoticia.content}
              onIonChange={e => setEditingNoticia({ ...editingNoticia, content: e.detail.value })}
            />
            <IonInput
              value={editingNoticia.image_url}
              onIonChange={e => setEditingNoticia({ ...editingNoticia, image_url: e.detail.value })}
            />
            <IonButton onClick={handleSave}>Guardar</IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default EditarNoticiasClimaticas;
