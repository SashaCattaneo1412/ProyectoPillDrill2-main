import React from 'react'   
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import style from '../styles/Principal.module.css';
import Image from 'next/image';
import CenteredContainer from '../components/CenteredContainer'; 

function Principal() {

  const [ start, setStart ] = useState(new Date());
  const [ end, setEnd ] = useState(new Date());
  const [ eventName, setEventName ] = useState("");
  const [ eventDescription, setEventDescription ] = useState("");

  const router = useRouter();

  const session = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();
  
  if(isLoading) {
    return <></>
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar'
      }
    });
    if(error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
 


  }

  async function Pilldrill() {
  
    router.push('/landing');

  }


  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    console.log("Creating calendar event");
    const event = {
      'summary': eventName,
      'description': eventDescription,
      'start': {
        'dateTime': start.toISOString(), // Date.toISOString() ->
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
      },
      'end': {
        'dateTime': end.toISOString(), // Date.toISOString() ->
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
      }
    }
    await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        'Authorization':'Bearer ' + session.provider_token // Access token for google
      },
      body: JSON.stringify(event)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      alert("Event created, check your Google Calendar!");
    });
  }

  console.log(session);
  console.log(start);
  console.log(eventName);
  console.log(eventDescription);


  return (
    <div>
    <div className="App">
     
        {session ?
          <>
           <h2 className={style.title}>BIENVENDIO/A {session.user.email}</h2> 
           <CenteredContainer>
           <Image className={style.img2} width={250} height={220} src="/Image/calendario 1.png" alt="LOGO" />
           <div className={style.formcontainer}>
                <div className={style.inputContainer}>
                <p className={style.label}>Nombre de la pastilla</p>
                <input type="text" onChange={(e) => setEventName(e.target.value)} />
                </div>

                <div className={style.inputContainer}>
                    <p className={style.label}>Descripcion</p>
                    <input type="text" onChange={(e) => setEventDescription(e.target.value)} />
                </div>

                <div className={style.inputContainer}>
                <p className={style.label}>Fecha de Inicio</p>
                    <DateTimePicker className={style.date} onChange={setStart} value={start} />
                </div>

                <div className={style.inputContainer}>
                    <p className={style.label}>Fecha de finalizacion</p>
                    <DateTimePicker className={style.date} onChange={setEnd} value={end} />
                </div>
              
                <hr />
                <button className={style.BTN1} onClick={() => createCalendarEvent()}>
                    Crear Evento
                </button>
                <p></p>
                <button className={style.BTN2} onClick={() => signOut()}>
                    Salir
                </button>
                </div>
            </CenteredContainer>
          </>
          :
          <>
             <div className={style.container}>
             <Image className={style.img} width={250} height={220} src="/Image/LOGO1.png" alt="LOGO" />
            <button className={style.BTN} onClick={() => googleSignIn()}>CALENDARIO</button>
            <button className={style.BTN} onClick={() => Pilldrill()}>INICIO</button>
            </div>
          </>
        }
  
    </div>
    </div>
  )
}

export default Principal
