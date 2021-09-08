import './App.css';
import HomePage from './PageComponent/HomePage/HomePage'
import {Switch, Route} from 'react-router-dom';
import Details from './PageComponent/DetailsPage/DetailsPage'

function App() {

  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/details' component={Details}/>
      </Switch>
    </div>
  );
}

export default App;