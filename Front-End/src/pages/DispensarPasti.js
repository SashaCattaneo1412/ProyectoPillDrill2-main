import React from 'react'
import style from '../styles/Dispensar.module.css'
import Button from '../components/Buttons';
import Image from 'next/image'
import dispensarP from '../pages/pastilla1'
import Header from '../components/Header.jsx';
function DispensarPastilla() {
  return (
   <div>
    <Header/>
    <div className={style.container}>
    <Image
      src={'/Image/DISPENSAR.png'}
      alt="Dispensar"
      width={350}
      height={350}
     />
      <button className={style.dispensar} onClick={() => dispensarP()}>
        <div className={style.contenidoEncima}>DISPENSAR PASTILLA</div>
      </button>
              
    </div>
    </div>
  )
}

export default DispensarPastilla