import { Routes,Route } from 'react-router-dom';
import {SearchPage} from './pages/SearchPage';
import {PropertyPage} from './pages/PropertyPage'; 
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage/>}/>
        <Route path="/properties/:id" element={<PropertyPage/>}/>
      </Routes>
    </>
  )
}

export default App
