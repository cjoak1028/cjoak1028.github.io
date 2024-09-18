import LinkedInLogo from "../assets/logos/linkedin-logo.svg";
import GithubLogo from "../assets/logos/github-logo.svg";
import InstagramLogo from "../assets/logos/instagram-logo.svg";

const Footer = () => {
  return (
    <div className="h-32 md:h-48 flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-row gap-5 md:gap-7">
        <a
          href="https://www.linkedin.com/in/cj-kim-966351255/"
          className="hover:opacity-60 cursor-pointer"
        >
          <img src={LinkedInLogo} className="h-6 md:h-7" />
        </a>
        <a
          href="https://github.com/cjoak1028"
          className="hover:opacity-60 cursor-pointer"
        >
          <img src={GithubLogo} className="h-6 md:h-7" />
        </a>
        <a
          href="https://www.instagram.com/chng.juce/"
          className="hover:opacity-60 cursor-pointer"
        >
          <img src={InstagramLogo} className="h-6 md:h-7" />
        </a>
      </div>
      <p className="text-black/40">Designed & Built by CJ Kim</p>
    </div>
  );
};

export default Footer;
