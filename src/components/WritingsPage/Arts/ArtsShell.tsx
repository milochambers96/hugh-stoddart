import { useState } from "react";

import SEO from "../../Utility/SEO";

import BackButton from "../../Utility/BackButton";
import ArtsIntro from "./ArtsIntro";
import ArtsItemCard from "./ArtsItemCard";
import QuadPillTab from "../../Utility/QuadPillTab";

import { artTexts } from "../../../data/writings/art/arts";

const ArtsShell = () => {
  const artTextData = artTexts.artTexts;
  const [display, setDisplay] = useState("all");

  const baseUrl = "https://hughstoddart.co.uk";

  const getFilteredArtTexts = () => {
    if (display === "all") {
      return artTextData;
    }

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

  const reviewCount = artTextData.filter(
    (text) => text.type === "review"
  ).length;
  const essayCount = artTextData.filter((text) => text.type === "essay").length;
  const articleCount = artTextData.filter(
    (text) => text.type === "article"
  ).length;

  return (
    <>
      <SEO
        title="Hugh Stoddart - Visual Arts Writings"
        description={`Explore Hugh Stoddart's writings on visual arts, including ${reviewCount} reviews, ${essayCount} essays, and ${articleCount} articles about artists, exhibitions, and art movements.`}
        url={`${baseUrl}/Writings/TheArts`}
        imageUrl="/assets/seo-imgs/HS-website-img.png"
        type="website"
        keywords="Hugh Stoddart, visual arts, art criticism, art essays, art reviews, art writing, exhibitions, artists"
        includeAllWorks={false}
      />
      <section id="arts-shell" className="pt-[90px] pb-20">
        <div className=" flex justify-end pr-6 pt-4">
          <BackButton backUrl={"/Writings/"} />
        </div>

        <div id="arts-header" className="w-5/6 mx-auto space-y-6">
          <h1 className="text-3xl md:text-5xl text-center text-hs-title font-bold font-title">
            Visual Arts
          </h1>
          <div className="space-y-6  md:px-6 text-justify  md:text-xl text-hs-body font-medium font-body leading-relaxed">
            <ArtsIntro />
          </div>
        </div>

        <div className="flex justify-center mt-8 py-4 font-interactive">
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
    </>
  );
};

export default ArtsShell;
