import './css/App.css';
import Home from './pages/home.jsx';
import Favourites from './pages/favourites.jsx';
import { MovieProvider } from './contexts/MovieContext.jsx';
import  NavBar  from './components/NavBar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {

  
  return (
    <div>
      <MovieProvider>
          <NavBar />
        <main className="main-content">
          <Routes>
             
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  );
} 
export default App;
