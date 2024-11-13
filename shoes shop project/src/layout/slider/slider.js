import { El } from "../../script/createElement";
import Swiper from "swiper";
const slides = [
    {
      text: 'We provide high quality products just for you',
      src: '/images/Wallpaper_slide1.jpg',
    },
    {
      text: 'Your satisfaction is our number one periority',
      src: '/images/Wallpaper_slide2.jpg',
    },
    {
      text: 'Lets fulfill your fashion needs with shoearight now!',
      src: '/images/Wallpaper_slide3.jpg',
    },
  ];
  let counter = 1;

  const createSwiper = () => {
    const swiper = new Swiper('.swiper' , {
        loop:false,
        allowTouchMove:false,
        pagination:{
            el:'.swiper-pagination'
        }
    })
  }
  export const StartSlider = () => {
    setTimeout(createSwiper, 0);
    return El({
      element: 'div',
      id: 'first-slider',
      className:
        'w-full h-full pb-4 flex flex-col items-center justify-between transition ease-linear duration-500 transform',
      children: [
        El({
          element: 'div',
          className: 'w-full swiper',
          children: [
            El({
              element: 'div',
              className: 'swiper-wrapper mb-10',
              children: [...slides.map((item) => StartSlide(item))],
            }),
            El({
              element: 'div',
              className: 'swiper-pagination first-slider',
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'w-full text-center mt-8',
          children: [
            Button({
              child: 'Next',
              eventListener: [
                {
                  event: 'click',
                  callback: (e) => {
                    const swiper = document.querySelector('.swiper').swiper;
                    // Now you can use all slider methods like
                    console.log(counter, slides.length);
                    swiper.slideNext();
                    
                    counter++ == slides.length - 1
                      ? ((e.target.innerText = 'Get Started'), (counter = 1))
                      : null;
                  },
                },
              ],
            }),
          ],
        }),
      ],
    });
  };