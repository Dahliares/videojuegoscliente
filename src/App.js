
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Main } from './pages/Main';
import { Detalle } from './components/Detalle';


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />

        <Routes>
          <Route index path='/' element={<Main />} />
          <Route path='/videojuego/:id' element={<Detalle />} />
        
        </Routes>

      </Router>
    </div>
  );
}

export default App;
