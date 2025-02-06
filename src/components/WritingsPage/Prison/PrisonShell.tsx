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
    <section id="prison-shell" className="pt-[60px] bg-hs-background pb-20">
      <div
        id="prison-header-container"
        className="bg-hs-accent space-y-4 w-5/6 md:w-2/3 mx-auto mt-4 p-4"
      >
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Prison Residency
        </h1>

        <h2 className="text-xl md:text-3xl text-center font-bold">
          NOT SHUT UP
        </h2>
      </div>

      <div className="mt-8 md:mt-12 w-5/6 md:w-4/6 mx-auto text-white font-semibold">
        <div className="hidden md:block text-justify text-lg leading-relaxed">
          <div className="grid grid-cols-5 gap-x-16 mx-auto">
            <div className="col-span-2 space-y-8">
              <div className="aspect-w-2 aspect-h-2">
                <img
                  src={prisonInfo.images[0]}
                  alt="A cover for an issue of the magazine, 'Not Shut Up'"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-w-2 aspect-h-3">
                <img
                  src={prisonInfo.images[1]}
                  alt="A cover for an issue of the magazine, 'Not Shut Up'"
                  className="w-full h-full object-cover shadow"
                />
              </div>
            </div>
            <div className="col-span-3 space-y-8 ">
              {txtConts.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
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
