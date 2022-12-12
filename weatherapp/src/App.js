import './App.css';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites'
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [cityKey, setCityKey] = useState();

  return (
    <div>
      <AppContext.Provider value={{ city, setCity, country, setCountry, cityKey, setCityKey }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
