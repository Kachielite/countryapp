import React, {useState} from 'react';
import NavBar from './Components/NavBarComponent/NavBar';
import './App.css';

function App() {

  const [backgroundTheme, setBackgroundTheme] = useState('hsl(0, 0%, 98%)')
  const [elementTheme, setElementTheme] = useState({backgroundColor:'hsl(0, 0%, 100%)', color:'hsl(200, 15%, 8%)'})
  
  const themeHandler = () =>{
    if (backgroundTheme === 'hsl(0, 0%, 98%)' ){
      setBackgroundTheme('hsl(207, 26%, 17%)')
      setElementTheme({backgroundColor:'hsl(209, 23%, 22%)', color:'hsl(0, 0%, 100%)' })
    }
  }
  
  return (
    <div className="App" style={{backgroundColor: backgroundTheme}}>
      <NavBar themeToggle={themeHandler} backgroundTheme={backgroundTheme} elementTheme={elementTheme}/>
    </div>
  );
}

export default App;
