import React, { useState } from 'react';
import style from '../styles/Dropdown.module.css';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    fetch('http://localhost:5000/compartimentoHora', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedOption}),
      });
  };

  return (
    <div className={style.dropdown} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={style.dropbtn} onClick={toggleDropdown}>
        {selectedOption ? selectedOption : ''}
      </button>
      {isOpen && (
        <div className={style.dropdownContent}>
          <a href="#" onClick={() => handleOptionClick('00:00')} className={selectedOption === '00:00' ? style.selected : ''}>00:00</a>
          <a href="#" onClick={() => handleOptionClick('09:00')} className={selectedOption === '09:00' ? style.selected : ''}>09:00</a>
          <a href="#" onClick={() => handleOptionClick('12:00')} className={selectedOption === '12:00' ? style.selected : ''}>12:00</a>
          <a href="#" onClick={() => handleOptionClick('16:00')} className={selectedOption === '16:00' ? style.selected : ''}>16:00</a>
          <a href="#" onClick={() => handleOptionClick('22:00')} className={selectedOption === '22:00' ? style.selected : ''}>22:00</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;