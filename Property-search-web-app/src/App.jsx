import { Routes,Route } from 'react-router-dom';
import {SearchPage} from './pages/SearchPage';
import { PropertyPage } from './pages/PropertyPage';
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import "./App.css"

function App() {
  return (
    <div className='app-root'>
      <Header/>
      <main className='site-main'>
        <Routes>
          <Route path="/" element={<SearchPage/>}/>
          <Route path="/property/:id" element={<PropertyPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App
