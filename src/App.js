
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Main } from './pages/Main';
import { Info } from './pages/Info';
import { Add } from './pages/Add';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">





      <Router>

        <NavBar />


        <Routes>

          <Route index path='/' element={<Main />} />
          <Route path='/videojuego/:id' element={<Info />} />
          <Route path='/add' element={<Add />} />
          <Route path='/*' element={<div>ERROR!!!! 404!!!!</div>} />

        </Routes>

        <Footer />
        
      </Router>




    </div>
  );
}

export default App;
