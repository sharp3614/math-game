import { Route, Routes } from 'react-router-dom';
import './App.css';
import  { useData } from './context/use-data';
import Game from './pages/game';
import Home from './pages/home';
import Result from './pages/result';
function App() {
  const { thema } = useData()
  return (
    <div className={'App ' + thema}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
