import style from '../Styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';


const Header = () => {
  const router = useRouter(); // Importa y define el router

  return (
    <>
      <div className="header-container">  
        <div className="header-content">
          <div className="logo">
            <Link href="/InicioSesion">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&"
                className="logo-img"
              />
            </Link>
          </div>
          <div className="buttons">
            <button
              className="button"
              onClick={(event) => {
                event.preventDefault();
                router.push('/Calendario');
              }}
            >
              Calendario
            </button>
            <button
              className="button"
              onClick={(event) => {
                event.preventDefault();
                router.push('/contactanos');
              }}
            >
              Contactanos
            </button>
          </div>
          <div className="user-link">
            <Link href="/Usuario">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af3ceae4-fa72-428e-9439-b61faf6b62b7?apiKey=066a951e6da146a787c64f344598a4a3&"
                className="user-img"
              />
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Estilos para contenedor principal */
        .header-container {
          background-color: #4548aa;
          height: 140px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Estilos para el contenido interno */
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 80%; /* Ancho fijo para mantener la posición */
          max-width: 1200px;
        }

        /* Estilos para los botones */
        .button {
          color: #000;
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          border-radius: 40px;
          background-color: #e6ddd6;
          width: 290px; /* Ancho relativo para los botones */
          height:50px;
          margin: 0 60px; /* Margen entre botones */
          padding: 5px;
          font: 900 25px/47.5px Lexend, -apple-system, Roboto, Helvetica, sans-serif;
          align-content: center;
        }

        /* Estilos para las imágenes */
        .logo-img{
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 150px; /* Ancho relativo para las imágenes */
          overflow: hidden;
          max-width: 100%;
        
        }
        .user-img {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 120px; /* Ancho relativo para las imágenes */
          overflow: hidden;
          max-width: 100%;
        
        }

        /* Media query para ajustar en pantallas pequeñas */
        @media (max-width: 991px) {
          .header-content {
            width: 90%; /* Cambio de ancho para pantallas más pequeñas */
          }
          .button {
            width: 120px; /* Ancho más pequeño para botones en pantallas pequeñas */
            font: 900 15px/47.5px Lexend, -apple-system, Roboto, Helvetica, sans-serif;
          }
        }
      `}</style>
    </>
  );
}

export default Header;