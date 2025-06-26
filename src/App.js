import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
