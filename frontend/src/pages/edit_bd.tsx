import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonTextarea, IonItem, IonLabel, IonAlert } from '@ionic/react';
import axios from 'axios';
import './edit_bd.css';

const EditarNoticiasClimaticas: React.FC = () => {
  const [noticias, setNoticias] = useState<any[]>([]);
  const [editingNoticia, setEditingNoticia] = useState<any | null>(null);
  const [rutToDelete, setRutToDelete] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

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

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/usuarios/${rutToDelete}`);
      if (response.data.success) {
        setAlertMessage('Usuario eliminado exitosamente');
        setShowAlert(true);
      } else {
        setAlertMessage('Error al eliminar el usuario');
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      setAlertMessage('Error al eliminar el usuario');
      setShowAlert(true);
    }
  };

  return (
    <IonPage className="editar-noticias-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Editar Noticias Climáticas Globales</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="editar-noticias-content">
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
              className="editar-noticias-input"
            />
            <IonTextarea
              value={editingNoticia.content}
              onIonChange={e => setEditingNoticia({ ...editingNoticia, content: e.detail.value })}
              className="editar-noticias-textarea"
            />
            <IonInput
              value={editingNoticia.image_url}
              onIonChange={e => setEditingNoticia({ ...editingNoticia, image_url: e.detail.value })}
              className="editar-noticias-input"
            />
            <IonButton onClick={handleSave}>Guardar</IonButton>
          </div>
        )}
        <IonItem>
          <IonLabel position="stacked">RUT del Usuario a Eliminar</IonLabel>
          <IonInput
            value={rutToDelete}
            onIonChange={e => setRutToDelete(e.detail.value!)}
            placeholder="Ingrese el RUT"
            className="editar-noticias-input"
          />
          <IonButton onClick={handleDelete} color="danger">Eliminar Usuario</IonButton>
        </IonItem>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default EditarNoticiasClimaticas;
