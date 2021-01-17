import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          
          <Route path="/projects" component={Projects}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
