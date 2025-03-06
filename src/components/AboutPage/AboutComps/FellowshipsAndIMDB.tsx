const FellowshipsAndIMDB = () => {
  return (
    <>
      <p className="leading-relaxed">
        Hugh currently holds an Honorary Fellowship at{" "}
        <span className="font-semibold">
          <a href=" https://www.mmu.ac.uk/staff/profile/hugh-stoddart">
            Manchester Metropolitan University
          </a>
        </span>
        , and has held fellowships for{" "}
        <span className="font-bold">
          <a href="https://www.rlf.org.uk/writer/hugh-stoddart/">
            the Royal Literary Fund
          </a>
        </span>
        .
      </p>

      <p className="leading-relaxed">
        {" "}
        Hugh's film and television writing and directing career is also
        documented on his{" "}
        <span className="font-semibold font-interactive">
          <a href="https://www.imdb.com/name/nm0831142/">IMDB</a>
        </span>{" "}
        profile.
      </p>
    </>
  );
};

export default FellowshipsAndIMDB;
