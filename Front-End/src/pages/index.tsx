import Image from 'next/image'
import { Inter } from 'next/font/google'
import Pastilla1 from "./pastilla1"
import Landing from "./landing"
import InicioSesion from "./InicioSesion"
import Principal from "./Principal"
import { createClient } from '@supabase/supabase-js';
import {SessionContextProvider} from '@supabase/auth-helpers-react';
const supabase = createClient(
  "https://gxelzcyxiljopimzfotd.supabase.co", 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4ZWx6Y3l4aWxqb3BpbXpmb3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NDQ5NTEsImV4cCI6MjAxNjQyMDk1MX0.dhhaxalwCQxqHi1EHK6pNZKiXh5gg7ugSv-RQaNR_MQ"
)

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>



   <SessionContextProvider supabaseClient={supabase}>

    <Principal/>
    </SessionContextProvider >
    </>
  )
}
