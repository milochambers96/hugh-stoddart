import BackButton from "../../Utility/BackButton";
import ArtsIntro from "./ArtsIntro";
import ArtsItemCard from "./ArtsItemCard";

import { artTexts } from "../../../data/writings/art/arts";

const ArtsShell = () => {
  const artTextData = artTexts.artTexts;
  return (
    <section id="arts-shell" className="pt-[60px] pb-20">
      <div className=" flex justify-end pr-6 pt-4">
        <BackButton backUrl={"/Writings/"} />
      </div>

      <div className="w-5/6 mx-auto px- text-white space-y-4">
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Visual Arts
        </h1>
        <div className="text-justify text-lg md:text-xl pt-2 md:pt-4 md:px-6 space-y-4 leading-relaxed">
          <ArtsIntro />
        </div>
      </div>

      <div className="mt-10 2xl:mt-16">
        <div className="flex flex-wrap gap-6 md:gap-12 justify-center">
          {artTextData.map((text, index) => (
            <article className="md:w-[40%] w-5/6" key={index}>
              <ArtsItemCard art={text} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtsShell;
