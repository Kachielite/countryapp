import React, {useState} from 'react';
import NavBar from '../../Components/NavBarComponent/NavBar';
import Search from '../../Components/SearchComponent/Search';
import DropDown from '../../Components/DropDownComponent/DropDown';
import Card from '../../Components/CardComponent/Card'
import './Homepage.css';

function HomePage() {

  const [backgroundTheme, setBackgroundTheme] = useState('hsl(200, 20%, 97%)')
  const [elementTheme, setElementTheme] = useState({backgroundColor:'hsl(0, 0%, 100%)', color:'hsl(200, 15%, 8%)'})
  
  const themeHandler = () =>{
    if (backgroundTheme === 'hsl(200, 20%, 97%)' ){
      setBackgroundTheme('hsl(207, 26%, 17%)')
      setElementTheme({backgroundColor:'hsl(209, 23%, 22%)', color:'hsl(0, 0%, 100%)' })
    } else {
      setBackgroundTheme('hsl(200, 20%, 97%)')
      setElementTheme({backgroundTheme:'hsl(0, 0%, 100%)', color:'hsl(200, 15%, 8%)'})
    }
  }

  console.log(backgroundTheme)
  
  return (
    <div className="HomePage" style={{backgroundColor: backgroundTheme}}>
      <NavBar themeToggle={themeHandler} backgroundTheme={backgroundTheme} elementTheme={elementTheme}/>
      <div className="filter-div">
        <Search className="search" elementTheme={elementTheme}/>
        <div className="dropdown-div">
        <DropDown className="drop-down" elementTheme={elementTheme}/>
        </div>
      </div>
      <Card elementTheme={elementTheme}/>
    </div>
  );
}

export default HomePage;
