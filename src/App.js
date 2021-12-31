import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  // Route, 
  // Link as LinkRoute
} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
     <Home/>
    </Router>
  );
}

export default App;
