import {Route, Routes} from 'react-router-dom';
import styles from './App.module.css';
import Home from './pages/Home';
import Nearby from './pages/Nearby';
import Jobs from './pages/Jobs';
import Realty from './pages/Realty';
import Car from './pages/Car';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/nearby-stores' element={<Nearby/>} />
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/realty' element={<Realty/>}/>
        <Route path='car' element={<Car/>}/>
      </Routes>
    </div>
  );
}

export default App;
