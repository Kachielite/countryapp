import { useState } from 'react';
import './App.css';
import AppBar from './Components/AppBar'

function App() {

  const [appTheme, setAppTheme] = useState({backgroundColor:'white',color:'black'});

  const themeHandler = ()=>{
    if (appTheme.backgroundColor === 'white' && appTheme.color === 'black'){
      setAppTheme({backgroundColor:'hsl(207, 26%, 17%)',color:'white'})
    } else {
      setAppTheme({backgroundColor:'white',color:'black'})
    }
    console.log(appTheme)
  }
  return (
    <div className="App" style={appTheme}>
      <AppBar themeSwitch={themeHandler}/>
    </div>
  );
}

export default App;
