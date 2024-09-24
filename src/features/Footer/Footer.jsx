import LinkedInIcon from "src/assets/logos/linkedin-logo.svg";
import GithubIcon from "src/assets/logos/github-logo.svg";
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
    <div className="h-36 md:h-48 flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-row gap-5 md:gap-7">
        {socialLinks.map((socialLink) => {
          const { social, link, icon } = socialLink;
          return (
            <SocialLink key={social} social={social} link={link} icon={icon} />
          );
        })}
      </div>
      <div className="text-center">
        <p className="text-black/40 text-xs mb-2">Designed & built by CJ Kim</p>
        <p className="text-black/40 text-xs">
          Built with <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
