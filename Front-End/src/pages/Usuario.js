import React, { useEffect, useState } from 'react';
import style from '../styles/usuario.module.css';
import Link from 'next/link';
import CenteredContainer from '../components/CenteredContainer2';
import Image from 'next/image';
import Header from '../components/Header3';

function Usuario() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const userEmail = 'correo@ejemplo.com'; // Reemplaza con el correo del usuario logueado

    // Obtener datos del usuario al cargar el componente
    fetch(`/usuario/${userEmail}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener la información del usuario');
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user information:', error);
      });
  }, []); 

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aquí deberías enviar los datos editados al backend para su actualización
    // Por ejemplo: fetch('/actualizarUsuario', { method: 'PUT', body: JSON.stringify(userData) })
  };

  return (
    <div>
      <Header />
      <div className={style.container}>
        <h1 className={style.title}>MI PERFIL</h1>
        <div className={style.img}>
          <Image width={270} height={270} src="/Image/foto.png" alt="foto" />
        </div>

        <CenteredContainer>
  <form className={style.formContainer}>
    <div className={style.formGroup}>
      <label className={style.label}> Usuario/Mail: </label>
      <input
        type="text"
        value={isEditing ? userData?.mail : ''}
        readOnly={!isEditing}
      />
    </div>
    <div className={style.formGroup}>
      <label className={style.label}> Nombre del responsable: </label>
      <input
        type="text"
        value={isEditing ? userData?.nombreResp : ''}
        readOnly={!isEditing}
      />
    </div>
    <div className={style.formGroup}>
      <label className={style.label}> Telefono del responsable: </label>
      <input
        type="text"
        value={isEditing ? userData?.telResp : ''}
        readOnly={!isEditing}
      />
    </div>
    <div className={style.formGroup}>
      <label className={style.label}> Contraseña: </label>
      <input
        type="text"
        value={isEditing ? userData?.contrasenia : ''}
        readOnly={!isEditing}
      />  <br />
    </div>
  </form>
 
          <div className={style.contenedorAbajo}>
            <div className={style.seguimiento}>
            <label className={style.cuenta}>
          ¿Olvidaste tu contraseña?
          </label>
            <Link className={style.LINK} href="/RecuperarContraseña">Recupérala</Link> <br/>
               <div className={style.buttonPosition}>
              {isEditing ? (
                <button className={style.editar} onClick={handleSave}>
                  Guardar
                </button>
              ) : (
                <button className={style.editar} onClick={handleEdit}>
                  Editar
                </button>
              )}
              </div>
            </div>
          </div>
    </CenteredContainer>
    
      </div>
    </div>
  );
}

export default Usuario;











/*
import React, { useEffect, useState } from 'react';
import style from '../styles/usuario.module.css';
import Link from 'next/link';
import CenteredContainer from '../components/CenteredContainer2';
import Image from 'next/image'
import Header from '../components/Header3';
function Usuario() {


  const editar = async (e) => {
  

    
    <button className={style.editar} onClick={(editar)}>
         Tomar foto
    </button>
    

  }


  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Realizar la solicitud al backend para obtener la información del usuario
    fetch('/usuario')
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el estado con los datos del usuario recibidos del backend
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error al obtener la información del usuario:', error);
      });
  }, []);


  return (
    <div>
    <Header/>
    <div className={style.container}>
      <h1 className={style.title}>MI PERFIL</h1>
      <div  className={style.img}>
      <Image width={270} height={270} src="/Image/foto.png" alt="foto" /> 
      </div>
      
      <CenteredContainer>
       <form className='form-container'>
       
      <div className={style.contenedorflotante}>
       <label className={style.label}> Usuario/Mail: </label>
       <label className={style.label}> Nombre del responsable: </label>
       <label className={style.label}> Telefono del Responsable: </label>
       <label className={style.label}> Contraseña: </label>
       
       </div>
       
       {userData && (
        <div className={style.p}>
          <p>Nombre: {userData.nombre}</p>
          <p>Email: {userData.email}</p>
          <p>Nombre del responsable: {userData.nombreResp}</p>
          <p>Telefono del responsable: {userData.telefonoResp}</p>
          <p>contraseña: {userData.contraseña}</p>
         
        </div>
      )}
      </form>
      <br/>
       
      <div className={style.contenedorAbajo}>
      <div className={style.seguimiento}>
      <label className={style.cuenta}>
      ¿Olvidaste tu contraseña?
       </label>
        <Link className={style.LINK} href="/RecuperarContraseña">Recupérala</Link> {/* Corregir la ruta */
       /*}
        
         
        <button className={style.editar} onClick={(editar)}>
         Editar
        </button>
        </div>
        </div>
        </CenteredContainer>
    </div>
    </div>
  )
}

export default Usuario
*/
