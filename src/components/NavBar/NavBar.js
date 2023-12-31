import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Pdf from '../../files/Robert Saunders Front-End Web Development CV.pdf'
import CoveringLetter from '../../files/Robert Saunders Covering Letter.pdf'

function NavBar() {
  return (
    <header>

      <nav className="navbar fixed-top navbar-expand-lg navbar-light customNav">
        <Link to='/#' className="navbar-brand"><img id="logoImg" src="/assets/images/rob-saunders-logo2.png" alt="Purple and white logo for Rob Saunders" /></Link>

        <div id="mobile">
          <button aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav mr-auto">

              <li className="nav-item">
                <Link to='/development-projects/#' className="nav-link">Development Projects</Link>
              </li>

              <li className="nav-item">
                <Link to='/contact/#' className="nav-link">Contact Rob</Link>
              </li>

            </ul>

            <a href={Pdf} target='_blank'>
              <button className='btn btn-primary navCTA'>Rob's CV</button>
            </a>

            <a href={CoveringLetter} target='_blank'>
              <button className='btn btn-primary navCTA'style={{marginLeft:15}}>Covering Letter</button>
            </a>

          </div>
        </div>
      </nav>
  </header>
  );
};

export default NavBar;