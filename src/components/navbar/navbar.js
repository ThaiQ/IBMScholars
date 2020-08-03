import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./footprint.png";

const { AutismColors, ADHDColors } = require("../../const");

const UserNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(initTheme());
  const [colorSet, setColorSet] = useState(2);
  const toggle = () => setIsOpen(!isOpen);
  const [user, setUser] = useState();

  useEffect(() => {
    props.home && props.home();
    props.lesson && props.lesson();
    props.autism && props.autism();
    props.adhd && props.adhd();
    props.matching && props.matching();
    props.reward && props.reward();
    props.login && props.login();
    props.signup && props.signup();
    props.soundgame && props.soundgame();
    props.forum && props.forum();
    initUser();
  }, [theme]);

  function changeColorSetAutism() {
    if (colorSet < 3) setColorSet(colorSet + 1);
    else setColorSet(1);
    if (colorSet == 1)
      setTheme(
        localStorage.setItem("theme", JSON.stringify(AutismColors.blue))
      );
    else if (colorSet == 2)
      setTheme(
        localStorage.setItem("theme", JSON.stringify(AutismColors.pink))
      );
    else if (colorSet == 3)
      setTheme(
        localStorage.setItem("theme", JSON.stringify(AutismColors.yellow))
      );
    setTheme(JSON.parse(localStorage.getItem("theme")));
  }
  function changeColorSetADHD() {
    if (colorSet < 3) setColorSet(colorSet + 1);
    else setColorSet(1);
    if (colorSet == 1)
      setTheme(localStorage.setItem("theme", JSON.stringify(ADHDColors.blue)));
    else if (colorSet == 2)
      setTheme(localStorage.setItem("theme", JSON.stringify(ADHDColors.green)));
    else if (colorSet == 3)
      setTheme(
        localStorage.setItem("theme", JSON.stringify(ADHDColors.orange))
      );
    setTheme(JSON.parse(localStorage.getItem("theme")));
  }

  function initTheme() {
    let theme = JSON.parse(localStorage.getItem("theme"));
    return theme || AutismColors.blue;
  }

  function initUser() {
    let user = JSON.parse(localStorage.getItem("user"));
    user && setUser(user);
  }

  function loggedOut() {
    localStorage.setItem("user", JSON.stringify(""));
    setUser("");
  }

  console.log(props.changeLogin, props);
  return (
    <div
      style={theme ? { backgroundColor: theme.dark, color: theme.light } : {}}
      className="user-navbar"
    >
      <Navbar light expand="md">
        <NavbarBrand
          style={{ color: theme.light }}
          className="nav-brand"
          id="nav-brand"
          href="/"
        >
          EPIC Education
          <img id="logo-image" src={logo} alt={"eedu logo"} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto d-flex align-items-end ibm-nav" navbar>
            <NavItem>
              <NavLink
                style={{ color: theme.light }}
                id="user-item"
                className="user-item"
                href="#"
              >
                Color:{" "}
                <div
                  style={{ display: "inline" }}
                  onClick={() => changeColorSetAutism()}
                  id = 'autism'
                >
                  {" "}
                  Autism
                </div>{" "}
                |
                <div
                  style={{ display: "inline" }}
                  onClick={() => changeColorSetADHD()}
                  id = 'adhd'
                >
                  {" "}
                  ADHD
                </div>
              </NavLink>
            </NavItem>
            {user ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  id="user-item"
                  className="user-item"
                  nav
                  caret
                  style={{ color: theme.light }}
                >
                  Activities
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to='/adhd'>
                  <DropdownItem className="drp-item" href="#">
                    <NavLink>
                      <div
                        id="user-item"
                        className="user-item"
                        style={{ color: theme.dark }}
                      >
                        ADHD
                      </div>
                    </NavLink>
                  </DropdownItem>
                  </Link>
                  <Link to='/autism'>
                  <DropdownItem className="drp-item" href="#">
                    <NavLink>
                      <div
                        id="user-item"
                        className="user-item"
                        style={{ color: theme.dark }}
                      >
                        Autism
                      </div>
                    </NavLink>
                  </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              ""
            )}
            <NavItem>
              {user ? (
                <NavLink id="user-item" className="user-item">
                  <Link
                    className="link-ref"
                    to="/reward"
                    style={{ color: theme.light }}
                  >
                    Rewards
                  </Link>
                </NavLink>
              ) : (
                ""
              )}
            </NavItem>
            <NavItem>
              <NavLink id="user-item" className="user-item">
                <Link
                  className="link-ref"
                  to="/forum"
                  style={{ color: theme.light }}
                >
                  Community Forum
                </Link>
              </NavLink>
            </NavItem>
            {
              user ? <NavLink><Link to = '/' id="user-item" className="user-item" style={{ color: theme.light }} onClick = {() => {loggedOut()}}>
              
              Log Out
         
              </Link> </NavLink>: 
               <UncontrolledDropdown nav inNavbar>
               <DropdownToggle id="user-item" className="user-item" nav caret style={{ color: theme.light }}>
                 Join Us!
               </DropdownToggle>
               <DropdownMenu right>
                 <DropdownItem className="user-item" style={{ color: theme.dark }}>
                   <Link to="/signUp">
                     Sign Up
                   </Link>
                 </DropdownItem>
                 <DropdownItem className="user-item" style={{ color: theme.dark }}>
                   <Link to="/login">
                     Login
                   </Link>
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default UserNavbar;
