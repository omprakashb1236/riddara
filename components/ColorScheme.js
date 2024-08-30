"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import styles from '../styles/ColorScheme.module.css';

export default function ColorScheme({ images }) {
  return (
    <div id='color-scheme' className={styles.color_scheme}>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const color = images[index]?.color || '#000';
            return `
              <span class="${className}" style="border-color:${color};">
                <em style="background-color:${color};"></em>
              </span>
            `;
          },
        }}
        modules={[EffectFade, Navigation, Pagination]}
      >
        {images.map((slide, index) => (
          <SwiperSlide key={index}>
            <img className={styles.swipper_slide_img} src={slide.imageUrl} alt={slide.caption || `Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
