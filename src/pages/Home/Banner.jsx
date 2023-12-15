import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  return (
    <div className="mx-6 mb-10">
      <div className="flex mb-6 lg:mb-0 shadow-md justify-start gap-2 items-center">
        <div className="w-96">
          <h3 className="bg-primary py-2 text-center text-white lg:font-semibold">
            Headline
          </h3>
        </div>
        <div className="py-2">
          <marquee direction="left">
            Two of the six accused in the Parliament security breach hid yellow
            canisters in cavities they carved out of the inside left sole of
            their sports shoes. | The Supreme Court will hear Mahua Moitra's
            petition today regarding her expulsion from the Lok Sabha.
          </marquee>
        </div>
      </div>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {news.slice(0, 4).map((n) => (
            <SwiperSlide key={n._id}>
              <Link className="relative" to={`/feature/${n._id}`}>
                <img src={n.image} alt="" className="w-full h-80 lg:max-h-96" />
                <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
                <div className="absolute bottom-4 px-8 text-white">
                  <h2 className="md:text-4xl py-2 font-semibold">{n.title}</h2>
                  <div className="flex justify-start items-center gap-4">
                    <img
                      src={n.author_img}
                      alt={n.author_name}
                      className="w-12 h-12 rounded-full"
                    />
                    <h4 className="md:text-2xl font-medium">{n.author_name}</h4>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
