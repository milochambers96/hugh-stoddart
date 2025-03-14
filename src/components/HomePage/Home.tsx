// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const Home = () => {
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
    <section className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-5xl sm:text-7xl mb-2 text-center text-hs-title font-bold  font-title">
        Hugh Stoddart
      </h1>
      <h2 className="hidden md:block text-4xl mt-4 text-hs-subtitle font-body">
        Screen | Theatre | Art | Prison{" "}
      </h2>
      <div className="md:hidden text-4xl mt-6 text-hs-subtitle font-body space-y-4 text-center">
        <h2>Screen</h2>
        <h2>Theatre</h2>
        <h2>Art</h2>
        <h2>Prison</h2>
      </div>

      {/* <div className="w-24 h-1 bg-hs-accent 0 mt-6 mb-4"></div> */}

      {/* <div className="h-16 flex items-center justify-center">
        <p className="text-xl sm:text-xl text-hs-accent font-medium">
          <span className="inline-block min-h-8 border-r-4 border-amber-500 pr-1 animate-pulse font-interactive">
            {text}
          </span>
        </p>
      </div> */}

      {/* <div className="flex space-x-4 mt-8 font-interactive">
        <Link to="/Writings">
          <button className="px-6 py-3 bg-hs-accent/50 hover:bg-hs-button text-hs-button-text font-bold rounded transition-colors duration-300">
            WRITTEN WORKS
          </button>
        </Link>

        <Link to="/Contact">
          <button className="px-6 py-3 bg-hs-accent/50  hover:bg-hs-button text-hs-button-text font-bold rounded transition-colors duration-300">
            CONTACT HUGH
          </button>
        </Link>
      </div> */}
    </section>
  );
};

export default Home;
