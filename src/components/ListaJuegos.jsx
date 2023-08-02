import { useEffect, useState } from 'react';
import './ListaJuegos.css'
import { Loading } from './Loading';


export function ListaJuegos() {


const [juegos, setJuegos] = useState([]);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5555")
        .then((response) => response.json())
        .then((res) => {
            setJuegos(res);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
}, []);

console.log(juegos);



    return (
        <>
        

        {isLoading ? <Loading /> : ""}
        
        <div className='listado-juegos'>
            <table className='tabla-juegos'>
                <thead>
                    <tr>
                        
                        <th>Nombre</th>
                        <th>Consola</th>
                        <th>Tipo</th>
                        <th>Saga</th>
                        <th>Formato</th>
                        <th>Idioma</th>
                        <th>Estado</th>
                        <th>Compañia</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {juegos.map((item) => (
                                              
                         <tr key={item.id}>
                           
                            <td >{item.nombre}</td>
                            <td >{item.consola}</td>
                            <td >{item.tipo}</td>
                            <td >{item.saga}</td>
                            <td >{item.formato}</td>
                            <td >{item.idioma}</td>
                            <td >{item.estado}</td>
                            <td >{item.compania}</td> 
                                                       
                         </tr>                     

                    ))}
                </tbody>

            </table>

            

        </div>
    </>
    )
}


