import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Card from './Card/Card';
import Movielist from './Components/Movielist/Movielist';
import Movie from './Pages/movieDetail/movie';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Routes>
          <Route index element = {<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<Movielist/>}></Route>
          <Route path="/*" element={<h1>Error</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
