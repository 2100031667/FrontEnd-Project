// Header.js
import React from 'react';
import './Header.css';
const Header = ({ title, date, professor, college, department, semester, group }) => {
  return (
    <header>
      <div>
        <h1>{title}</h1>
        <p>Date: {date}</p>
        <p>Professor: {professor}</p>
        <p>College: {college}</p>
        <p>Department: {department}</p>
        <p>Semester: {semester}</p>
        <p>Group: {group}</p>
      </div>
    </header>
  );
};

export default Header;
