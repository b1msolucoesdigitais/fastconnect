import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Hero = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  const banners = [
    {
      image: "/imgs/banners/banner.png",
      link: "#"
    },
    {
      image: "/imgs/banners/banner2.png",
      link: "#"
    },
    {
      image: "/imgs/banners/banner3.png",
      link: "#"
    }
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 8000); // Muda a cada 8 segundos

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="home" className="relative w-full h-[440px] mt-16 bg-[#00042f]">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
        }}
      >
        <CarouselContent className="h-full">
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
                <a href={banner.link} className="block w-full h-full flex justify-center items-center">
                  <img
                    src={banner.image}
                    alt={`Banner ${index + 1} - FAST Connect`}
                    className="h-full object-contain object-center cursor-pointer transition-transform hover:scale-105"
                    style={{ maxWidth: '1170px', width: '100%' }}
                  />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="bg-white h-full transition-all duration-500 ease-out"
          style={{ width: `${((current + 1) / banners.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default Hero;