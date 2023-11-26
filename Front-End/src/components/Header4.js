import style from '../Styles/Header3.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter(); // Importa y define el router

  const dispensarP = () => {
    // Define tu función dispensarP aquí
  };

  return (
    <header className={style.header}>
   <div className={style.contenedor}>
     
      <button
        className={style.Home}
        onClick={(event) => {
          event.preventDefault();
          router.push('/InicioSesion');
        }}
      >
        <div className={style.contenidoEncima}>Inicio</div>
      </button>


      <div className={style.logo}>
        <Link href="/">
          <Image width={160} height={150} src="/Image/logo2.png" alt="Imagen Logo" />
        </Link>
      </div>


      <button
        className={style.Inicio}
        onClick={(event) => {
          event.preventDefault();
          router.push('/Calendario');
        }}
      >
       <div className={style.contenidoEncima}>Calendario</div>
      </button>
    </div>
  </header>
);
};

export default Header;