import { prisonInfo } from "../../../data/writings/prison/prison";

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
      <div
        id="prison-header-container"
        className="space-y-4 w-5/6 md:w-2/3 mx-auto mt-4 p-4 text-white"
      >
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Prison Residency
        </h1>

        <h2 className="text-xl md:text-3xl text-center font-bold">
          NOT SHUT UP
        </h2>
      </div>

      <div className="mt-8 md:mt-8 w-5/6 md:w-4/6 mx-auto text-white font-semibold">
        <div className="hidden md:block text-justify text-lg leading-relaxed">
          {/* Regular desktop layout */}
          <div className="hidden md:block text-justify text-lg leading-relaxed space-y-8">
            <div className="px-16 space-y-8">
              <p>{txtConts[0]}</p>
              <p>{txtConts[1]}</p>
            </div>
            <div className="flex gap-x-14 justify-center">
              <div className="w-2/5">
                <div className="h-[420px]">
                  <img
                    src={prisonInfo.images[0]}
                    alt="A cover for an issue of the magazine, 'Not Shut Up'"
                    className="w-full h-full object-contain shadow-lg"
                  />
                </div>
              </div>
              <div className="w-2/5">
                <div className="h-[420px]">
                  <img
                    src={prisonInfo.images[1]}
                    alt="A cover for an issue of the magazine, 'Not Shut Up'"
                    className="w-full h-full object-contain shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="px-16 space-y-8">
              <p>{txtConts[2]}</p>
              <p>{txtConts[3]}</p>
            </div>
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
