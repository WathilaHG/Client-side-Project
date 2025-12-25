import { Routes,Route } from 'react-router-dom';
import {SearchPage} from './pages/SearchPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage/>}/>
        <Route path="/property/:id" element={<PropertyPage/>}/>
      </Routes>
    </>
  )
}

export default App
