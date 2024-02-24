import React from 'react';
import imgSlide1 from '../../assets/inicial-model-dupla.jpg?react';
import imgSlide2 from '../../assets/inicial-model-moto.jpg?react';
import imgSlide3 from '../../assets/inicial-model-mulher.jpg?react';
import styles from './Slide.module.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const slides = [imgSlide1, imgSlide2, imgSlide3];

const Slide = () => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination
        loop
      >
        <SwiperSlide>
          <img className={styles.imgSlide} src={imgSlide1} alt={imgSlide1} />
          <div className={styles.overlay}>
            <h1 className={styles.titulo}>Nova Coleção Limitada</h1>
            <div className={styles.btn}>SAIBA MAIS</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgSlide} src={imgSlide2} alt={imgSlide2} />
          <div className={styles.overlay}>
            <h1 className={styles.titulo}>Nova Coleção Limitada</h1>
            <div className={styles.btn}>SAIBA MAIS</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgSlide} src={imgSlide3} alt={imgSlide3} />
          <div className={styles.overlay}>
            <h1 className={styles.titulo}>Nova Coleção Limitada</h1>
            <div className={styles.btn}>SAIBA MAIS</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
