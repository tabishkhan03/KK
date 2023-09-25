import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <AllRoutes />
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
