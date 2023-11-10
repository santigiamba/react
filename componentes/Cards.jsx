import React from 'react';
import PropTypes from 'prop-types';



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
    width: '300px',
    margin: '40px', 
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    maxWidth: '100%',
  };

  return (
    <div style={cardGridStyle}>
      {Cards.map((alimento) => (
        <div key={alimento.id} style={cardStyle}>
          <img src={alimento.imagen} alt={alimento.title} style={imageStyle} />
          <h2>{alimento.title}</h2>
          <p>Preparación: {alimento.preparación}</p>
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
