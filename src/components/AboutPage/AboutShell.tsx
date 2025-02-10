import AboutParaOne from "./AboutComps/AboutParaOne";
import AboutParaTwo from "./AboutComps/AboutParaTwo";
import AboutParaThree from "./AboutComps/AboutParaThree";
import hughImg from "../../assets/about-page-imgs/profile-picture-img.jpg";
import FellowshipsAndIMDB from "./AboutComps/FellowshipsAndIMDB";

const AboutShell = () => {
  return (
    <section id="about-shell" className="pt-[60px]">
      <div className="md:mx-[16%] mx-auto w-5/6 md:w-1/4 mt-6 md:pb-2">
        <h1 className="text-3xl text-white text-center font-bold italic">
          A little bit about Hugh
        </h1>
      </div>
      <div className="hidden md:block">
        <article
          id="about-desktop-content"
          className="space-y-4 md:w-2/3 mx-auto px-4 py-2 text-white"
        >
          <div className="grid grid-cols-2 gap-x-1 mx-auto">
            <div
              id="about-desktop-text-content"
              className="col-span-1 h-full mx-auto space-y-4 leading-relaxed text-justify"
            >
              <AboutParaOne />
              <AboutParaTwo />
              <AboutParaThree />
            </div>

            <div className="col-span-1 h-full mx-auto flex items-center">
              <img
                src={hughImg}
                alt="An image of Hugh with his face shrouded by a straw hat."
                className="shadow-lg rounded-sm"
              />
            </div>
          </div>

          <div
            id="fellowships-and-online-profile-desktop"
            className="mr-20 space-y-4 leading-relaxed"
          >
            <FellowshipsAndIMDB />
          </div>
        </article>
      </div>

      <div className="md:hidden mt-10 pb-10">
        <article className="w-5/6 mx-auto space-y-4 text-justify text-white">
          <div className="leading-relaxed space-y-4">
            <AboutParaOne />
            <AboutParaTwo />
            <AboutParaThree />
          </div>
          <div className="">
            <img
              src={hughImg}
              alt="An image of Hugh with his face covered by a straw hat."
              className="mx-auto shadow-lg rounded-sm"
            />
          </div>
          <FellowshipsAndIMDB />
        </article>
      </div>
    </section>
  );
};

export default AboutShell;
