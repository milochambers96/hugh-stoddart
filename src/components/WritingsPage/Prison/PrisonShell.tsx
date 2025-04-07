import { prisonInfo } from "../../../data/writings/prison/prison";
import BackButton from "../../Utility/BackButton";

import SEO from "../../Utility/SEO";

const PrisonShell = () => {
  const txtConts = prisonInfo.textContent;

  const baseUrl = "https://hughstoddart.co.uk";

  const formatForMobile = (text: string, index: number) => {
    if (index === 1 || index === 2) {
      return (
        <div className="space-y-6">
          <p>{text}</p>
          <img
            src={prisonInfo.images[index - 1]}
            alt="A cover for an issue of the magazine, 'Not Shut Up'"
            className="w-full h-full object-cover"
          />
        </div>
      );
    } else {
      return <p>{text}</p>;
    }
  };

  return (
    <>
      <SEO
        title="Hugh Stoddart - Prison Residency and 'Not Shut Up' Magazine"
        description="Learn about Hugh Stoddart's work at HMP Brixton during his Writers In Prison Network residency and his role in founding 'Not Shut Up' magazine, which published creative works by inmates across London's prisons."
        url={`${baseUrl}/Writings/Prison`}
        imageUrl={prisonInfo.images[0]}
        type="website"
        keywords="Hugh Stoddart, prison writing, Not Shut Up magazine, Writers In Prison Network, HMP Brixton, prison arts, inmate writing, prison residency"
        includeAllWorks={false}
      />
      <section id="prison-shell" className="pt-[90px] pb-20">
        <div className="flex justify-end pr-6 pt-4">
          <BackButton backUrl={"/Writings/"} />
        </div>
        <div
          id="prison-header"
          className="space-y-6 w-5/6 md:w-2/3 mx-auto mt-4 text-center"
        >
          <h1 className="text-3xl md:text-5xl text-hs-title font-bold font-title">
            Prison Residency
          </h1>

          <h2 className="text-xl md:text-3xl text-hs-subtitle font-semibold font-body">
            NOT SHUT UP
          </h2>
        </div>

        <div className="mt-8 md:mt-10 md:w-5/6 2xl:w-3/4 mx-auto text-hs-body font-medium font-body">
          {/*  Desktop layout */}
          <div className="hidden md:block text-justify text-lg leading-relaxed space-y-6">
            <div className="px-12 space-y-6 pb-3">
              <p>{txtConts[0]}</p>
              <p>{txtConts[1]}</p>
            </div>
            <div className="flex md:gap-x-2 2xl:gap-x-10">
              {prisonInfo.images.map((_img, index) => (
                <div key={index} className="w-2/5">
                  <div className="h-[420px]">
                    <img
                      src={prisonInfo.images[index]}
                      alt="A cover for an issue of the magazine, 'Not Shut Up'"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="px-12 space-y-6 pt-3">
              <p>{txtConts[2]}</p>
              <p>{txtConts[3]}</p>
            </div>
          </div>

          <div className="md:hidden space-y-6">
            {txtConts.map((text, index) => (
              <div key={index} className="text-justify">
                {formatForMobile(text, index)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrisonShell;
