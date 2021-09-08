import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../Components/NavBarComponent/NavBar';
import './DetailsPage.css'




const DetailsPage = () => {
    return (
        <div className="details">
            <NavBar className="navbar"/>
            <button>
            <Link to='/' className="link">
            ← Back
            </Link>
          </button>
          <div className="content">
              <div className="flag">
                <img src='https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017_1280.png' alt='flag'/>
              </div>
              <div className="details">

              </div>
          </div>
        </div>
    )
}

export default DetailsPage;