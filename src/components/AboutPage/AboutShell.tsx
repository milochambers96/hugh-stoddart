import AboutParaOne from "./AboutComps/AboutParaOne";
import AboutParaTwo from "./AboutComps/AboutParaTwo";
import AboutParaThree from "./AboutComps/AboutParaThree";
import hughImg from "../../assets/about-page-imgs/profile-picture-img.jpg";
import FellowshipsAndIMDB from "./AboutComps/FellowshipsAndIMDB";

const AboutShell = () => {
  return (
    <section id="about-shell" className="pt-[60px]">
      <div className="mx-auto w-5/6 md:w-1/3 mt-10 md:mt-12 lg:mt-20 md:pb-2">
        <h1 className="text-3xl md:text-4xl text-white text-start font-bold italic">
          A little bit about Hugh
        </h1>
      </div>
      <div className="hidden md:block">
        <article
          id="about-desktop-content"
          className="space-y-4 md:w-2/3 mx-auto px-4 pt-2 pb-10 text-white"
        >
          <div className="grid grid-cols-2 gap-x-1 mx-auto">
            <div
              id="about-desktop-text-content"
              className="col-span-1 h-full mx-auto space-y-4 leading-relaxed text-justify"
            >
              <AboutParaOne />
              <AboutParaTwo />
              <AboutParaThree />
              <div className="hidden lg:block space-y-4">
                <FellowshipsAndIMDB />
                <p>
                  Hugh is represented by{" "}
                  <span className="font-semibold">
                    <a href="https://swagency105621301.wordpress.com/">
                      Simon Williamson
                    </a>
                  </span>
                  .
                </p>
              </div>
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
            className="lg:hidden mr-20 space-y-4 leading-relaxed"
          >
            <FellowshipsAndIMDB />
            <p>
              Hugh is represented by{" "}
              <span className="font-semibold">
                <a href="https://swagency105621301.wordpress.com/">
                  Simon Williamson
                </a>
              </span>
              .
            </p>
          </div>
        </article>
      </div>

      <div className="md:hidden mt-6 pb-10">
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
          <p>
            Hugh is represented by{" "}
            <span className="font-semibold">
              <a href="https://swagency105621301.wordpress.com/">
                Simon Williamson
              </a>
            </span>
            .
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutShell;
