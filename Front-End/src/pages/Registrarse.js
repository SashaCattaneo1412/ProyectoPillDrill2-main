import React, { useRef, useState } from 'react';
import Link from 'next/link';
import style from '../styles/Registrarse.module.css';
import Button from '../components/Buttons';
import Header from '../components/Header3';
import { Router } from 'next/router';
import { useRouter } from 'next/router';

const Registrarse = () => {
  const form = useRef();
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Nuevo estado para la confirmación de la contraseña

  const router = useRouter();
  //ccheckbox
  const [isChecked, setIsChecked] = useState(false);

  //const [Confirmpassword, setConfirmPassword] = useState("");
  const registrarse = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/registrarse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, mail, password }),
      });

      if (response.ok) {
        // La solicitud fue exitosa, manejar la respuesta del servidor
        const data = await response.text();
        console.log('Respuesta del servidor:', data);
        // Realizar la redirección si la respuesta es exitosa
        if (data === 'Registro exitoso') {
          router.push('/InicioSesion');
        }
      } else {
        // La solicitud falló, manejar el error aquí si es necesario.
        console.error('Error al registrar');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const checked = async (e) => {

    <input type="email" className="form-control" id="nombreResp" placeholder="nombre del responsable" onChange={(event) => setPassword(event.target.value)} />;
    <input type="telefono" className="form-control" id="TELEFONO" placeholder="Telefono del responsable" onChange={(event) => setPassword(event.target.value)} />;
  }

  return (
    <form ref={form}>

      <Header />

      <h1 className={style.title}>Crea tu cuenta</h1>
      <div className={style.flexbox}>

        <div className={style.row}>
          <div className={style.contenedorflotante}>
            <input type="email" className="form-control" id="nombre" placeholder="Nombre Completo" onChange={(event) => setNombre(event.target.value)} />
          </div>

          <div className={style.contenedorflotante}>
            <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" onChange={(event) => setMail(event.target.value)} />
          </div>

        </div>


        <div className={style.row}>
          <div className={style.contenedorflotante}>
            <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" onChange={(event) => setPassword(event.target.value)} />
          </div>

          <div className={style.contenedorflotante}>
            <input type="password" className="form-control" id="repcontraseña" placeholder="Repetir Contraseña" onChange={(event) => setConfirmPassword(event.target.value)} />
          </div>

        </div>


      </div>



      <label className={style.seguimiento}>
        Hay alguna persona que realizara un seguimiento sobre su actividad en la app?
        <div className={style.checkBox}> SI
          <input type="checkbox" defaultChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />  </div>
      </label>

      {isChecked && (
        <div className={style.check}>
          <div className={style.contenedorflotante1}>
            <input type="email" className={`${style['form-control']} ${style['space-right']}`} id="nombreResp" placeholder="nombre del responsable" onChange={(event) => setPassword(event.target.value)} />
            <input type="email" className="form-control" id="TELEFONO" placeholder="Telefono del responsable" onChange={(event) => setPassword(event.target.value)} />
          </div>
        </div>
      )} <br />

      <div className={style.container1}>
        <button className={style.IR} onClick={registrarse}>IR</button> <br />
      </div>




    </form>

  );
};

export default Registrarse;