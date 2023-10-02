import React from "react";
import PropTypes from "prop-types";

function Cards({ Cards, setRecetas }) {
  const deleteCard = (id) => {
    const updatedRecetas = Cards.filter((alimento) => alimento.id !== id);
    setRecetas(updatedRecetas);
  };

  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    margin: '50px',
    justifyContent: 'center',
  };

  const cardStyle = {
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%', // Asegura que la imagen ocupa el 100% del contenedor
    height: 'auto', // Permite que la altura se ajuste proporcionalmente para mantener la relación de aspecto
    maxWidth: '100%', // Garantiza que la imagen no se extienda más allá de su tamaño original
    maxHeight: '150px', // Establece una altura máxima para las imágenes
  };

  return (
    <div style={cardGridStyle}>
      {Cards.map((alimento) => (
        <div key={alimento.id} style={cardStyle}>
          <img src={alimento.imagen} alt={alimento.title} style={imageStyle} />
          <h2>{alimento.title}</h2>
          <p>Preparación: {alimento.preparacion}</p>
          <button onClick={() => deleteCard(alimento.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

Cards.propTypes = {
  Cards: PropTypes.array.isRequired,
  setRecetas: PropTypes.func.isRequired,
};

export default Cards;
