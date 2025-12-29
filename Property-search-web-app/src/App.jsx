// Main application component that sets up routing and layout structure
import { Routes,Route } from 'react-router-dom';
import {SearchPage} from './pages/SearchPage';
import { PropertyPage } from './pages/PropertyPage';
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import "./App.css"

function App() {
  return (
    <div className='app-root'>
      {/* Site header with navigation */}
      <Header/>
      <main className='site-main'>
        {/* Define application routes */}
        <Routes>
          {/* Home page - property search */}
          <Route path="/" element={<SearchPage/>}/> 
          {/* Individual property details page */}
          <Route path="/property/:id" element={<PropertyPage/>}/>
        </Routes>
      </main>
      {/* Site footer */}
      <Footer/>
    </div>
  );
}

export default App
