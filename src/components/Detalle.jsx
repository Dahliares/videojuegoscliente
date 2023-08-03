import './Detalle.css';
import { Loading } from './Loading';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"


export const Detalle = () => {

    const [juego, setJuego] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5555/videojuego/${id}`)
            .then((response) => response.json())
            .then((res) => {
                setJuego(res[0]);
                console.log(res);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));

    }, [id]);

    return (

        <>
            {isLoading ?
                <Loading /> :
                <div className="detalle">
                    <h2>{juego?.nombre}</h2>
                    <div className="detalle-container">
                        
                        <img className='detalle-img' src={juego?.img} alt={juego?.nombre} />

                        <div className="detalles">
                            
                            <div><strong>Consola: </strong> <br />{juego?.consola}</div>
                            <div><strong>Tipo: </strong> <br />{juego?.tipo}</div>
                            <div><strong>Saga: </strong> <br />{juego?.saga}</div>
                            <div><strong>Formato: </strong> <br />{juego?.formato}</div>
                            <div><strong>Idioma: </strong> <br />{juego?.idioma}</div>
                            <div><strong>Estado: </strong> <br />{juego?.estado}</div>
                            <div><strong>Compañia: </strong> <br />{juego?.compania}</div>
                            <div><strong>Comentarios: </strong> <br />{juego?.comentario}</div>
                        </div>
                    </div>


                </div>
            }

        </>
    )
}