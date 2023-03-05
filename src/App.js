import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './views/Home';
import Single from './views/Single';
function App() {
  return (
    <div className="App">
     
      <Router>
          <Header></Header>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/singleitem' component={Single} />
       
      </Router>
     <Footer></Footer>
    </div>
  );
}
export default App;