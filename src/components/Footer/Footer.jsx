import LinkedInIcon from "../../assets/logos/linkedin-logo.svg";
import GithubIcon from "../../assets/logos/github-logo.svg";
import InstagramIcon from "../../assets/logos/instagram-logo.svg";
import SocialLink from "../Shared/SocialLink";

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
    <div className="h-32 md:h-48 flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-row gap-5 md:gap-7">
        {socialLinks.map((socialLink) => {
          const { social, link, icon } = socialLink;
          return (
            <SocialLink key={social} social={social} link={link} icon={icon} />
          );
        })}
      </div>
      <p className="text-black/40 text-xs">Designed & Built by CJ Kim</p>
    </div>
  );
};

export default Footer;