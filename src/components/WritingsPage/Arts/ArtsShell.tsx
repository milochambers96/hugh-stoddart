import { useState } from "react";

import BackButton from "../../Utility/BackButton";
import ArtsIntro from "./ArtsIntro";
import ArtsItemCard from "./ArtsItemCard";
import QuadPillTab from "../../Utility/QuadPillTab";

import { artTexts } from "../../../data/writings/art/arts";

const ArtsShell = () => {
  const artTextData = artTexts.artTexts;
  const [display, setDisplay] = useState("all");

  const getFilteredArtTexts = () => {
    if (display === "all") {
      return artTextData;
    }

    // const typeMap = {
    //   reviews: "review",
    //   essays: "essay",
    //   article: "article",
    // };

    return artTextData.filter((text) => {
      if (display === "reviews") {
        return text.type === "review";
      } else if (display === "essays") {
        return text.type === "essay";
      } else if (display === "articles") {
        return text.type === "article";
      }
      return false;
    });
  };

  const filteredArtTexts = getFilteredArtTexts();

  return (
    <section id="arts-shell" className="pt-[90px] pb-20">
      <div className=" flex justify-end pr-6 pt-4">
        <BackButton backUrl={"/Writings/"} />
      </div>

      <div id="arts-header" className="w-5/6 mx-auto space-y-6">
        <h1 className="text-3xl md:text-5xl text-center text-hs-title font-bold">
          Visual Arts
        </h1>
        <div className="space-y-6  md:px-6 text-justify  md:text-xl text-hs-body font-medium leading-relaxed">
          <ArtsIntro />
        </div>
      </div>

      <div className="flex justify-center mt-8 py-4">
        <QuadPillTab
          display={display}
          setDisplay={setDisplay}
          option1={"all"}
          option2={"reviews"}
          option3={"essays"}
          option4={"articles"}
        />
      </div>

      <div className="mt-10 2xl:mt-16">
        <div className="flex flex-wrap gap-6 md:gap-12 justify-center">
          {filteredArtTexts.map((text, index) => (
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
