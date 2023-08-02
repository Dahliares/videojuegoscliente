import './Main.css';
import { ListaJuegos } from '../components/ListaJuegos';

export const Main = () => {

   
    return (
        <div className="main">
            <h1>Listado de juegos</h1>
           <ListaJuegos />

        </div>
    )
}