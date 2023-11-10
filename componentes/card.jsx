import { useState } from 'react';
import estilo from '../esrilos/estilo.css'

function Card(props) {

    const botonLike = {
		height: '60px',
		backgroundColor: '#adf7df',
		color: "#000",
		fontSize: '29px',
		cursor: "pointer",
		borderRadius: "15px",
		boxShadow: '2px 2px 5px rgba(89, 63, 200)',
		margin: "2px",
		marginTop: '80px',
		padding: "7px"
	}
	
    const [likes, setLikes] = useState(0);
return (
    <div style={cardStyle} className="card">
        <div style={cardContent}>
        <div style={tt}>
        <h2 style={titleStyle}>{props.title}</h2>
        <h5 style={tripStyle}>Tripulación: {props.tripulacion}</h5>
        </div>
        <div style={buttonsContent}>
        <button
            style={botonLike}
            onClick={() => setLikes(likes + 1)}
        >
            Like
        </button>
        <button
            style={botonLike}
            onClick={() => props.eliminarCarta(props.id)}
        >
            Delete
        </button>
        </div>
        </div>
        <div style={textContainerStyle}>
            <p>{props.description}</p>
        </div>
        <img src={props.imageUrl} style={imageStyle} alt="Card" />
        <h4 style={likesStyle}>♥ {likes}</h4>

    </div>
);
}

export default Card;