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

                    <div className="detalle-container">
                        <img className='detalle-img' src={juego?.img} alt={juego?.nombre} />

                        <div className="detalles">
                            <div><strong>Título: </strong><br />{juego?.nombre}</div>
                            <div><strong>Consola: </strong> <br />{juego?.consola}</div>
                        </div>
                    </div>


                </div>
            }

        </>
    )
}