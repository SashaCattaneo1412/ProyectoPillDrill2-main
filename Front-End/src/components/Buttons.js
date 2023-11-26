import React from 'react';
import styles from '../styles/Button.module.css'; // Importa los estilos CSS específicos del botón

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.boton} onClick={onClick}>
      {text}
    </button>
    
  );
};

export default Button;