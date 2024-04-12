import {Route, Switch} from 'react-router-dom'
import HomePage from './HomePage'
import Chat from './Chat'
import Form from './Form'
import './App.css';

function App() {
  return (
    <Switch>
    <Route exact path="/" component={HomePage} />
   
    <Route path="/chat" component={Chat} />
    <Route path="/form" component={Form} />


  </Switch>
  );
}

export default App;
