import './css/App.css'
import MovieCard from "./components/MovieCard";
import Favourites from './pages/Favourites';
import Home from "./pages/Home";
import NavBar from "./components/NavBar"
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return ( //has only one parent return element or use fragement <> in case multiple
    <MovieProvider>
      <NavBar/>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path = "/favourites" element={<Favourites />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
