
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Main } from './pages/Main';


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />

        <Routes>
          <Route index path='/' element={<Main />} />
          <Route path='/videojuego/:id' element={<div>detalle</div>} />
        
        </Routes>

      </Router>
    </div>
  );
}

export default App;
