import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function VideoCarousel({ videoCarousel }) {
  const { t } = useTranslation();
  const { heading, subHeading, videoItems = [] } = videoCarousel;
  const swiperRef = useRef(null); 

  if (videoItems.length === 0) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (swiperRef.current) {
      const bullets = swiperRef.current.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');
      bullets.forEach((bullet, index) => {
        const videoItem = videoItems[index];
        if (videoItem) {
          bullet.innerHTML = `
            <h4>${t(videoItem.title)}</h4>
            <p>${t(videoItem.subtitle || '')}</p>
          `;
        }
      });
    }
  }, [videoItems, t]); 

  return (
    <div ref={swiperRef}> 
      <h2>{t(heading)}</h2>
      <h3>{t(subHeading)} <span>M.A.P</span></h3>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<div class="${className}" data-index="${index}">
                      <h4>${t(videoItems[index]?.title || '')}</h4>
                      <p>${t(videoItems[index]?.subtitle || '')}</p>
                    </div>`;
          },
        }}
        onSwiper={(swiper) => {
          if (swiperRef.current) {
            const bullets = swiperRef.current.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');
            bullets.forEach(bullet => {
              bullet.addEventListener('mouseover', function () {
                const index = this.getAttribute('data-index');
                swiper.slideTo(parseInt(index));
              });
            });
          }
        }}
      >
        {videoItems.map((video, index) => (
          <SwiperSlide key={index}>
            <video
              id={`video-${index}`}
              src={video.videoUrl}
              autoPlay
              muted
              loop
              className="swiperBox__bgImg hide-on-mobile"
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VideoCarousel;
