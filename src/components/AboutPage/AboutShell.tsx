import AboutParaOne from "./AboutComps/AboutParaOne";
import AboutParaTwo from "./AboutComps/AboutParaTwo";
import AboutParaThree from "./AboutComps/AboutParaThree";
import hughImg from "../../assets/about-page-imgs/profile-picture-img.jpg";
import FellowshipsAndIMDB from "./AboutComps/FellowshipsAndIMDB";

const AboutShell = () => {
  return (
    <section id="about-shell" className="pt-[60px]">
      {/* Desktop/Laptop View */}
      <div className="hidden md:block">
        <article className="w-2/3 mx-auto px-4 pt-2 md:pb-10 2xl:pb-0">
          <div className="mt-10 md:mt-12 2xl:mt-20 mb-4">
            <h1 className="ml-1 text-5xl text-hs-title font-bold italic">
              A little bit about Hugh
            </h1>
          </div>
          <div className="flex gap-14 mx-auto">
            <div className="flex-1 space-y-6 text-justify text-hs-body font-medium leading-relaxed">
              <AboutParaOne />
              <AboutParaTwo />
              <AboutParaThree />
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
            <div className="w-1/3 mt-2">
              <img
                src={hughImg}
                alt="An image of Hugh with his face shrouded by a straw hat."
                className="shadow-lg rounded-sm"
              />
            </div>
          </div>
        </article>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mt-6 pb-10">
        <article className="w-5/6 space-y-6 mx-auto text-justify">
          <div className="mt-10 text-center">
            <h1 className="text-3xl text-hs-title font-bold italic">
              A little bit about Hugh
            </h1>
          </div>
          <div className="space-y-6 leading-relaxed text-hs-body font-medium">
            <AboutParaOne />
            <AboutParaTwo />
            <AboutParaThree />
          </div>
          <div>
            <img
              src={hughImg}
              alt="An image of Hugh with his face covered by a straw hat."
              className="mx-auto shadow-lg rounded-sm"
            />
          </div>
          <div className="space-y-6 leading-relaxed text-hs-body font-medium">
            <FellowshipsAndIMDB />
          </div>
          <p className="text-hs-body font-medium">
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
