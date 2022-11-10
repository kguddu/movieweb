


import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import DetailsCard from './pages/DetailsCard'
import  NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies/:id' element={<DetailsCard/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </>
  );
}

export default App;
