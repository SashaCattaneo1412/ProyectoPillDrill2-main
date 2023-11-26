const CenteredContainer = ({ children }) => {
    return (
      <div className="side-container">
        {children}
        <style jsx>{`
             
             .side-container {
               top: 200px;
               position: fixed; /* Fija el contenedor en la pantalla */
               display: flex;
               justify-content: left; /* Centrar horizontalmente */
               align-items: center; /* Centrar verticalmente */ 
               right: 20px; /* Coloca el contenedor en el lado derecho */
               width: 50%; /* Ancho deseado del contenedor */
               height: 400px;
               padding: 10px;
             
               @media (max-width: 768px) {
                .side-container {
                  width: 90%; /* Reducir el ancho en pantallas más pequeñas */
                }
              }
             }
           `}</style>
        
      </div>
    );
  };
  
  export default CenteredContainer;