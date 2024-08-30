import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

function VideoCarousel({ videoCarousel }) {
  const { heading, subHeading, videoItems = [] } = videoCarousel;
  if (videoItems.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h2>{heading}</h2>
      <h3>{subHeading} <span>M.A.P</span></h3>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        effect={'fade'}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            if (videoItems[index]) {
              return `<div class="${className}" data-index="${index}">
                        <h4>${videoItems[index].title}</h4>
                        <p>${videoItems[index].subtitle == null ? '' : videoItems[index].subtitle}</p>
                      </div>`;
            }
            return `<div class="${className}" data-index="${index}"></div>`;
          },
        }}
        onSwiper={(swiper) => {
          const bullets = document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');
          bullets.forEach(bullet => {
            bullet.addEventListener('mouseover', function () {
              const index = this.getAttribute('data-index');
              swiper.slideTo(parseInt(index));
            });
          });
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
