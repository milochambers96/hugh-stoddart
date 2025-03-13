import nsu7Cover from "../../../assets/prison-imgs/not-shut-up-issue-7-cover.jpg";
import nsuCover from "../../../assets/prison-imgs/not-shut-up.jpg";
import nsu8Cover from "../../../assets/prison-imgs/not-shut-up-issue-8-cover.png";

const residencyBackground =
  "In 1999-2001 Hugh held a 'residency' awarded by the Writers In Prison Network, spending two days a week at HMP Brixton. His main project was to use themes to link the inmates' work to published writing: he produced a series of anthologies of creative writing – these included excerpts from published authors but mostly writing by the inmates themselves. It became a shared forum.";

const magazineConception =
  "He was taken with the idea mooted by Michael Mulkerrin and Anna Robinson, both then also working at HMP Brixton, to start a magazine funded outside any one prison but serving several - all London's jails, in fact. This was to become NOT SHUT UP.";

const interviewSeries =
  "For issues 1 to 17 the magazine featured an interview by Hugh with someone who has been in prison but gone on to become a professional writer or achieve success in some area of the arts: these include Ronan Bennett, novelist and screenwriter, artist Jimmy Boyle, legendary product of the Barlinnie special unit, novelist Alex Wheatle MBE, Caspar Walsh (author of CRIMINAL), Panorama reporter Raphael Rowe, Guardian writer Erwin James, artist Lucy Edkins, actor Chris Streeks and Mark Johnson, author and founder of USER VOICE.";

const publicationLegacy =
  "Funded for its first few years by the Arts Council, the magazine's quality has impressed many trusts and foundations who have contributed funds since then. Hugh was managing editor from 2007 till late 2012, responsible for fundraising, administration and the production of the magazine, leaving it as an established and popular magazine. It was distributed free nationally to all prisons, immigration removal centres and secure hospitals. The magazine continued with a new managing editor until 2015 when adequate funds could no longer be found.";

interface IPrisonArticle {
  title: string;
  textContent: string[];
  images: string[];
}

export const prisonInfo: IPrisonArticle = {
  title: "NOT SHUT UP",
  textContent: [
    residencyBackground,
    magazineConception,
    interviewSeries,
    publicationLegacy,
  ],
  images: [nsu7Cover, nsu8Cover, nsuCover],
};
