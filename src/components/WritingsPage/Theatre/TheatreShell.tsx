import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  threatreIntro,
  theatreScripts,
} from "../../../data/writings/theatre/theatre";
import BackButton from "../../Utility/BackButton";
import TheatreCard from "./TheatreCard";
import SEO from "../../Utility/SEO";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TheatreShell = () => {
  const baseUrl = "https://hughstoddart.co.uk";

  const performedScripts = theatreScripts.filter(
    (script) => script.wasPerformed
  ).length;

  return (
    <>
      <SEO
        title="Hugh Stoddart - Theatre Scripts and Plays"
        description={`Explore Hugh Stoddart's theatre scripts, including ${performedScripts} produced plays. ${threatreIntro}`}
        url={`${baseUrl}/Writings/Theatre`}
        imageUrl={
          theatreScripts[0].image
            ? `/assets/writing-page-imgs/${theatreScripts[0].image
                .split("/")
                .pop()}`
            : "/assets/seo-imgs/HS-website-img.png"
        }
        type="website"
        keywords="Hugh Stoddart, theatre scripts, plays, playwright, Gibraltar Strait, Layby, Barchester, British theatre, Royal Court Theatre, Belfast theatre"
        includeAllWorks={true}
      />
      <section id="theatre-shell" className="pt-[90px] bg-hs-background pb-20">
        <div className="flex justify-end pr-6 pt-4">
          <BackButton backUrl={"/Writings/"} />
        </div>
        <div
          id="theatre-header"
          className="space-y-6 w-5/6 md:w-2/3 mx-auto mt-4 md:px-4"
        >
          <h1 className="text-3xl md:text-5xl text-center text-hs-title font-bold font-title">
            Theatre Scripts
          </h1>
          <p className="px-3 text-justify md:text-xl text-hs-body font-medium font-body leading-relaxed">
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
        <div className="md:hidden w-11/12  space-y-12 mt-12 mx-auto px-4 text-justify">
          {theatreScripts.map((script, index) => (
            <article key={index}>
              <TheatreCard script={script} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default TheatreShell;
