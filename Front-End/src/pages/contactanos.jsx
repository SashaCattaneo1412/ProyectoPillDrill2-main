import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import style from '../styles/contactanos.module.css';
import Image from 'next/image';
import PhotoCarousel from '../components/PhotoCarousel2';
import { useRouter } from 'next/router';
import Header from '../components/Header';

const images = ['/Image/carrousel1.png', '/Image/carrousel2.png', '/Image/carrousel3.png', '/Image/carrousel4.png', '/Image/carrousel5.png'];

function contactanos() {
  return (
    <div>
        <Header/>
        <div className={style.titleContainer}>
        <h1 className={style.title}>¿QUIENES SOMOS?</h1>
        </div>
        <PhotoCarousel images={images} />

    </div>
  )
}

export default contactanos
