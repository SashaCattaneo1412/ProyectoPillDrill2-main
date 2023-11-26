//import { useEffect } from 'react';
import Button from '../components/Buttons';
//import { boton_prendido } from '../conexion/Adafruit'
//import { boton_apagado } from '../conexion/Adafruit'
//import { value } from '../conexion/Adafruit'



const Pastilla1 = () => {
    const comp1 = () => {fetch('http://localhost:5000/on1')};{

    }
    const comp2 = () => {fetch('http://localhost:5000/on2')};{

    }
    const comp3 = () => {fetch('http://localhost:5000/on3')};{

    }
    const comp4 = () => {fetch('http://localhost:5000/on4')};{
        
    }

    return (
        <div>
            <h1>Dispensar Pastilla</h1>
            <h1>¿PRENDER EL LED?</h1>
            <Button text="Prender" onClick={() => turnOn()} /> <br />
            <h1>¿APAGAR EL LED?</h1>
            <Button text="Apagar" onClick={() => turnOff()} />
            <input type="INPUT" className="grados" id="InputGrado" placeholder="grados" />
            <Button  text="OK" onClick={() => turnOff()} />
        </div>
    )
}

export default Pastilla1
