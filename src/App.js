import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './views/Home';
import Single from './views/Single';
function App() {
  return (
    <div className="App">
     
      <Router>
          <Header />
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/singleitem' element={<Single />} />
          </Routes>
      </Router>
     <Footer />
    </div>
  );
}
export default App;