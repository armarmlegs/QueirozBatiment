
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from "./Pages/Home"
import ScrollTop from "./components/ScrollTop";
import 'bootstrap/dist/css/bootstrap.min.css';





import Footer from './components/Footer/Footer';
import Operation from './Pages/Operation';
import ContactPage from "./Pages/ContactPage"
import Montmartre from './Pages/Montmartre/Montmartre.jsx';
import TourMaubourg from './Pages/TourMaubourg/TourMaubourg';
import SaintCloud from './Pages/SaintCloud/SaintCloud';
import Scheffer from './Pages/Scheffer/Scheffer';
import Boulogne from './Pages/Boulogne/Boulogne';



function App() {
  return (
  <Router>
    <ScrollTop />
    <GlobalStyle/>

<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/Contact" exact component={ContactPage} />
  <Route path="/Operations" exact component={Operation} />
  <Route path="/Operations/Boulogne" exact component={Boulogne} />
  <Route path="/Operations/TourMaubourg" exact component={TourMaubourg} />
  <Route path="/Operations/Montmartre" exact component={Montmartre} />
  <Route path="/Operations/SaintCloud" exact component={SaintCloud} />
  <Route path="/Operations/Scheffer" exact component={Scheffer} />
</Switch>
<Footer />
  </Router>
  );
}

export default App;
