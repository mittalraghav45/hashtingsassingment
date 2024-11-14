import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Header() {
  const [navItems, setNavItems] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/data")
      .then((response) => {
        setNavItems(response.data.navItems);  
      })
      .catch((error) => {
        console.error("Error fetching navigation data:", error);
      });
  }, []);

  const renderSlideMenu = () => {
    return (
      <div className='side-menu'>
        <div className='close-btn' onClick={() => setShowMenu(false)}>
          X
        </div>
        <ul className='menu-links'>
          {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.url} className='menu-link'>{item.name}</a>
              </li>
            ))}
        </ul>
      </div>
    );
  };

  return (
    <>
    <header className="navbar">
      <img src='/images/logo.svg' alt='logo' height={30}/>
      <nav className='nav-links'>
        <ul >
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} className='header-link'>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='hamburger' onClick={() => setShowMenu(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
    {showMenu && renderSlideMenu()}
    </>
  );
}

export default Header;
