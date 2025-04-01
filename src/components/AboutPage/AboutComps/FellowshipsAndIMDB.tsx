const FellowshipsAndIMDB = () => {
  return (
    <>
      <p className="leading-relaxed">
        Hugh currently holds an Honorary Fellowship at{" "}
        <span className="text-hs-link hover:text-hs-link-hover transition-colors duration-500">
          <a
            href="https://www.mmu.ac.uk/staff/profile/hugh-stoddart"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manchester Metropolitan University
          </a>
        </span>
        , and has held fellowships for{" "}
        <span className="text-hs-link hover:text-hs-link-hover transition-colors duration-500">
          <a
            href="https://www.rlf.org.uk/writer/hugh-stoddart/"
            target="_blank"
            rel="noopener noreferrer"
          >
            the Royal Literary Fund
          </a>
        </span>
        .
      </p>

      <p className="leading-relaxed">
        {" "}
        Hugh's film and television writing and directing career is also
        documented on his{" "}
        <span className="text-hs-link hover:text-hs-link-hover transition-colors duration-500">
          <a
            href="https://www.imdb.com/name/nm0831024/?ref_=fn_all_nme_1"
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDB
          </a>
        </span>{" "}
        profile.
      </p>
    </>
  );
};

export default FellowshipsAndIMDB;
