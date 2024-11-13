import React, { useState, useEffect } from 'react';
import axios from 'axios';
//tset
function Header() {
  const [navItems, setNavItems] = useState([]);

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

  return (
    <header className="navbar">
      <h1 className="logo">W.</h1>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
