import './App.css';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </div>
  );
}

export default App;
