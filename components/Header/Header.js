import React from 'react';
import { NavLink } from 'react-router-dom';

//import '../sideDrawer/drawerToggleButton.css';
//import './toolbar.css';
import DrawerToggleButton from '../sideDrawer/drawerToggleButton';

const toolbar = props => {
  let visible = ['toolbar__toggle-button'];
  if (props.hide) {
    visible = ['toolbar__toggle-button onClickToggle'];
  }

  /*
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (window.location.href === "http://localhost:3000/test/" && document.body.scrollTop < 360 && document.documentElement.scrollTop < 360) {
            document.querySelector("header").classList = ""
        } else {
                document.querySelector("header").className = "toolbar-bg"
            }
        } 
*/

  return (
    <header className="toolbar-bg">
      <nav className="toolbar__navigation">
        {/*old toggle*/}

        <div className="logo">
          <a href="/">
            <img src={require('../../Assets/imgs/logo.png')} alt="logo" />
          </a>
        </div>

        <div className="spacer" />
        <div className="toolbar_navigation-items menu">
          <ul>
            <li>
              <NavLink activeClassName="active-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/case-studies">
                Case Studies
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/how-we-work">
                How We work
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={visible}>
          <DrawerToggleButton click={props.drawerToggleClickHandler} />
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
