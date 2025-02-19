import { prisonInfo } from "../../../data/writings/prison/prison";
import BackButton from "../../Utility/BackButton";

const PrisonShell = () => {
  const txtConts = prisonInfo.textContent;

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
    <section id="prison-shell" className="pt-[60px] pb-20">
      <div className="flex justify-end pr-6 pt-4">
        <BackButton backUrl={"/Writings/"} />
      </div>
      <div
        id="prison-header"
        className="space-y-6 w-5/6 md:w-2/3 mx-auto mt-4 text-center"
      >
        <h1 className="text-3xl md:text-5xl text-hs-title font-bold">
          Prison Residency
        </h1>

        <h2 className="text-xl md:text-3xl text-hs-subtitle font-semibold">
          NOT SHUT UP
        </h2>
      </div>

      <div className="mt-8 md:mt-10 w-5/6 mx-auto text-hs-body font-medium">
        {/*  Desktop layout */}
        <div className="hidden md:block text-justify text-lg leading-relaxed space-y-6">
          <div className="px-12 space-y-6 pb-3">
            <p>{txtConts[0]}</p>
            <p>{txtConts[1]}</p>
          </div>
          <div className="flex gap-x-14 justify-center">
            <div className="w-2/5">
              <div className="h-[420px]">
                <img
                  src={prisonInfo.images[0]}
                  alt="A cover for an issue of the magazine, 'Not Shut Up'"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-2/5">
              <div className="h-[420px]">
                <img
                  src={prisonInfo.images[1]}
                  alt="A cover for an issue of the magazine, 'Not Shut Up'"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
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
  );
};

export default PrisonShell;
