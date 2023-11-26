import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import style from '../styles/SignUp.module.css';
import Image from 'next/image';
import PhotoCarousel from '../components/PhotoCarousel';
import { useRouter } from 'next/router';
import HeaderB from '../components/HeaderB';



const images = ['/Image/1.png', '/Image/3.png', '/Image/2.png'];


const InicioSesion = () => {

  const router = useRouter();
  const form = useRef();
  const [mailfront, setMail] = useState('');
  const [passwordfront, setPassword] = useState('');
  const [ eventName, setEventName ] = useState("");


  const iniciosesion = async (e) => {
    e.preventDefault();
    try {   
      const response = await fetch('http://localhost:5000/InicioSesion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({mailfront,passwordfront}), // Corregir aquí
      });

      const data = await response.json(); // Espera la respuesta JSON

      // Manejar la respuesta del servidor aquí
      if (data.success) {
        // Los datos coinciden
        
        router.push('/Compartimento');
      
        //history.push('/compartimiento'); // Esto requiere acceso a la variable history
      } else {
        // Los datos no coinciden
        alert('Inicio de sesión fallido: ' + data.message);

      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
       <HeaderB/>
      <PhotoCarousel images={images} />
             <form ref={form}>
        <div className={style.flexbox}>
          <div className={style.contenedorflotante}>
            <input
              type="email" // Cambiado de 'INPUT' a 'email'
              className="form-control"
              id="floatingInput"
              placeholder="Mail"
              onChange={(event) => setMail(event.target.value)}
            />
          </div>

          <div className={style.contenedorflotante}>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Contraseña"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className={style.seguimiento}>
            <div>
              <label className={style.cuenta}>
                ¿Olvidaste tu contraseña?
              </label>
              <Link href="/RecuperarContraseña">Recupérala</Link> {/* Corregir la ruta */}
            </div>

            <div>
              <label className={style.cuenta}>
                ¿No tienes cuenta?
              </label>
              <Link href="/Registrarse">Crea cuenta nueva</Link> 
            </div>
            
          </div>
          </div>
       
      </form>

      <div className={style.btnPosition}>
           
      <button className={style.IR} onClick={iniciosesion}>
            IR
          </button>
      </div>
    </div>
  );
};

export default InicioSesion;