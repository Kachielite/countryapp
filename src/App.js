import { useState } from 'react';
import './App.css';
import AppBar from './Components/AppBar';
import SearchBar from './Components/SearchBar';
import FilterComponent from './Components/FilterComponent'

function App() {

  const [appTheme, setAppTheme] = useState({backgroundColor:'hsl(0, 0%, 98%)',color:'hsl(200, 15%, 8%)'});
  const [componentTheme, setComponentTheme] = useState({backgroundColor:'hsl(0, 0%, 98%)',color:'hsl(200, 15%, 8%)'})

  const themeHandler = ()=>{
    if (appTheme.backgroundColor === 'hsl(0, 0%, 98%)' && appTheme.color === 'hsl(200, 15%, 8%)'){
      setAppTheme({backgroundColor:'hsl(207, 26%, 17%)',color:'white'})
      setComponentTheme({backgroundColor:'#2B3945',color:'white'})
    } else {
      setAppTheme({backgroundColor:'hsl(0, 0%, 98%)',color:'hsl(200, 15%, 8%)'})
      setComponentTheme({backgroundColor:'#FAFAFA',color:'#121517'})
    }
    console.log(appTheme)
  }
  return (
    <div className="App" style={appTheme}>
      <AppBar themeSwitch={themeHandler}/>
      <div className="filterDiv">
        <SearchBar theme={componentTheme}/>
        <FilterComponent theme={componentTheme}/>
      </div>
    </div>
  );
}

export default App;
