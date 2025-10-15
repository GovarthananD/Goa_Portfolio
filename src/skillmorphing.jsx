import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";

export default function ParallaxSwiper() {
  const slides = [
    {
      title: "Fullstack Development",
      subtitle: "React • Node • MongoDB",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Creative UI Design",
      subtitle: "Modern, Responsive & Interactive",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Performance & Scalability",
      subtitle: "Optimized for Every Device",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
    },
  ];

  return (
    <div className="mx-4 md:mx-12 my-8 rounded-2xl overflow-hidden shadow-lg">
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#777",
        }}
        speed={800}
        parallax={true}
        
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        modules={[Parallax, Pagination, Autoplay]}
        className="h-[70vh] md:h-[80vh] rounded-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full flex flex-col justify-center items-center text-white text-center bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.ig})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 px-6 md:px-12">
                <h2
                  className="text-3xl md:text-5xl font-bold mb-3"
                  data-swiper-parallax="-300"
                >
                  {slide.title}
                </h2>
                <p
                  className="text-lg md:text-xl"
                  data-swiper-parallax="-200"
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
