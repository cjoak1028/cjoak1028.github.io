import LinkedInIcon from "src/assets/logos/linkedin-logo.svg";
import GithubIcon from "src/assets/logos/github-white-logo.svg";
import InstagramIcon from "src/assets/logos/instagram-logo.svg";
import SocialLink from "src/components/SocialLink";

const socialLinks = [
  {
    social: "LinkedIn",
    link: "https://www.linkedin.com/in/cj-kim-966351255/",
    icon: LinkedInIcon,
  },
  { social: "Github", link: "https://github.com/cjoak1028", icon: GithubIcon },
  {
    social: "Instagram",
    link: "https://www.instagram.com/chng.juce/",
    icon: InstagramIcon,
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row justify-center sm:justify-between bg-black px-6 md:px-10 py-8 sm:py-6">
      <div className="flex flex-row gap-5 md:gap-7">
        {socialLinks.map((socialLink) => {
          const { social, link, icon } = socialLink;
          return (
            <SocialLink key={social} social={social} link={link} icon={icon} />
          );
        })}
      </div>
      <div className="text-center text-white opacity-60 sm:text-start">
        <p className=" text-xs mb-2">Designed & built by CJ Kim</p>
        <p className=" text-xs">
          Built with <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
