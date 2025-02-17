import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  threatreIntro,
  theatreScripts,
} from "../../../data/writings/theatre/theatre";
import BackButton from "../../Utility/BackButton";
import TheatreCard from "./TheatreCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TheatreShell = () => {
  return (
    <section id="theatre-shell" className="pt-[60px] bg-hs-background pb-20">
      <div className=" flex justify-end pr-6 pt-4">
        <BackButton backUrl={"/Writings/"} />
      </div>
      <div
        id="theatre-header"
        className="bg-hs-accent space-y-6 w-5/6 md:w-2/3 mx-auto p-4"
      >
        <h1 className="text-xl md:text-5xl text-center font-bold">
          Theatre Scripts
        </h1>
        <p className="md:text-justify text-sm md:text-xl font-semibold">
          {threatreIntro}
        </p>
      </div>

      {/* Desktop Swiper SLides Display */}
      <div className="hidden md:block w-9/12 mx-auto p-4">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {theatreScripts.map((script, index) => (
            <SwiperSlide key={index}>
              <TheatreCard script={script} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Theatre Items Litst Display */}
      <div className="md:hidden w-11/12 mx-auto space-y-12 mt-12 p-4 text-justify">
        {theatreScripts.map((script, index) => (
          <article key={index}>
            <TheatreCard script={script} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default TheatreShell;
