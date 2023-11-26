import React from 'react'
import Layout from '../components/Layout'
 import Link from 'next/link';
import Header from '../components/Header.jsx';
import CenteredContainer from '../components/CenteredContainer2';
import style from '../Styles/calendario.module.css';

function Calendario()

{
    
    return (
      
    <form>
      <Header/>
      <iframe 
     src="https://calendar.google.com/calendar/embed?height=800&wkst=1&bgcolor=%23b855e6&ctz=America%2FArgentina%2FBuenos_Aires&title=PILL-DRILL&showTitle=0&showDate=1&showPrint=0&showNav=1&src=c2FzaGFhY2F0dGFuZW9AZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23B39DDB&color=%23B39DDB&color=%238E24AA" 
      style= {{border: "0" , width:"100%", height:"600px", frameborder:"0", scrolling:"no"}}>
      </iframe>
      
      
      
     </form>
     
        
      );
}

export default Calendario;