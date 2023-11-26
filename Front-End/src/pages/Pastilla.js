import React from 'react'
import Layout from '../components/Layout'
 import Link from 'next/link'
 import '../conexion/Adafruit'
 import { boton_prendido } from '../conexion/Adafruit'
 import { boton_apagado } from '../conexion/Adafruit'
 import { value } from '../conexion/Adafruit'
 import Buttons from '../components/Buttons';
 
 const Pastilla = () => {

  if( value == 'ON') {
    console.log('¡EL LED SE PRENDIÓ');
  };

  if (value  == 'OFF' ) {
    console.log('¡EL LED SE APAGÓ');
  };
  

   return (
    
     <div>
      
      <h1>Dispensar Pastilla</h1>
      <h1>¿PRENDER EL LED?</h1>
      <Buttons text="Prender" onClick={boton_prendido} /> <br/>
      <h1>¿APAGAR EL LED?</h1>
      <Buttons text="Apagar" onClick={boton_apagado} />
      
    </div>


     
     
   )
 }
 
 export default Pastilla
