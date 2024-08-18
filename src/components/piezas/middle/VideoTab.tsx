// src/components/VideoTab.js
import React from 'react';
import '../../../styles/components/VideoTab.css'; // Importa el archivo de estilos

const VideoTab = () => {
  return (
    <div className="video-tab">
      <h2>Video</h2>
      <video width="600" controls>
        <source src="tu-video.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};

export default VideoTab;
