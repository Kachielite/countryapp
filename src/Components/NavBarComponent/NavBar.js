import React from 'react';
import './NavBar.css';


const NavBar = ({themeToggle, backgroundTheme, elementTheme}) => {

    return(
        <main className="container" style={{backgroundColor:backgroundTheme}}>
            <nav className="nav-bar" style={elementTheme} onClick={themeToggle} >
                <h3>Where in the world?</h3>
                <div className="theme">
                <ion-icon name="moon-outline"></ion-icon>
                <p>Dark Mode</p>
                </div>
            </nav>
        </main>
    )
}

export default NavBar;