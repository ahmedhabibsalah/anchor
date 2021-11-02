import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route component={Home} path="/" exact />
         <Route component={Contact} path="/contact" exact />
       </Switch>
    </BrowserRouter>
   
  );
}

export default App;
