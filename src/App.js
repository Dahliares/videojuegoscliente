
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Main } from './pages/Main';
import { Info } from './pages/Info';


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />

        <Routes>
          <Route index path='/' element={<Main />} />
          <Route path='/videojuego/:id' element={<Info />} />
          <Route path='/*' element={<div>ERROR!!!! 404!!!!</div>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
