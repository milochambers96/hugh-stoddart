import SEO from "../Utility/SEO";

const Home = () => {
  const baseUrl = "https://hughstoddart.co.uk";

  // const [text, setText] = useState("");
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [loopNum, setLoopNum] = useState(0);
  // const [typingSpeed, setTypingSpeed] = useState(150);

  // const phrases = [
  //   "Crafting Cinematic Narratives",
  //   "Bringing Words to Life on Stage",
  //   "Visual Arts Commentary",
  //   "Weaving Stories Across Mediums",
  // ];

  // useEffect(() => {
  //   const handleTyping = () => {
  //     const i = loopNum % phrases.length;
  //     const fullText = phrases[i];

  //     setText(
  //       isDeleting
  //         ? fullText.substring(0, text.length - 1)
  //         : fullText.substring(0, text.length + 1)
  //     );

  //     setTypingSpeed(isDeleting ? 80 : 150);

  //     if (!isDeleting && text === fullText) {
  //       setTimeout(() => setIsDeleting(true), 1500);
  //     } else if (isDeleting && text === "") {
  //       setIsDeleting(false);
  //       setLoopNum(loopNum + 1);
  //     }
  //   };

  //   const timer = setTimeout(handleTyping, typingSpeed);
  //   return () => clearTimeout(timer);
  // }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <>
      <SEO
        title="Hugh Stoddart - Screenwriter, Playwright & Arts Writer"
        description="Official website of Hugh Stoddart, acclaimed British screenwriter, playwright and arts writer. Explore his works including The Shooting Party, Remembrance, The Mill on the Floss, and Gibraltar Strait."
        url={baseUrl}
        imageUrl="/assets/seo-imgs/HS-website-img.png"
        type="website"
        keywords="Hugh Stoddart, screenwriter, playwright, arts writer, prison writing, British cinema, television drama, British theatre, The Shooting Party, Remembrance, The Mill on the Floss"
        includeAllWorks={true} // Include all works for the homepage
      />
      <section className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-5xl sm:text-7xl mb-2 text-center text-hs-title font-bold  font-title">
          Hugh Stoddart
        </h1>
        <h2 className="hidden md:block text-4xl mt-4 text-hs-subtitle font-body">
          Screen | Theatre | Art | Prison{" "}
        </h2>
        <h2 className="md:hidden text-xl mt-6 text-hs-subtitle font-body font-semibold text-center">
          Screen | Theatre | Art | Prison{" "}
        </h2>

        {/* <div className="w-24 h-1 bg-hs-accent 0 mt-6 mb-4"></div> */}

        {/* <div className="h-16 flex items-center justify-center">
        <p className="text-xl sm:text-xl text-hs-accent font-medium">
          <span className="inline-block min-h-8 border-r-4 border-amber-500 pr-1 animate-pulse font-interactive">
            {text}
          </span>
        </p>
      </div> */}
      </section>
    </>
  );
};

export default Home;
