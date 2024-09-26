import LinkedInBlackIcon from "src/assets/logos/linkedin-logo.svg";
import GithubBlackIcon from "src/assets/logos/github-logo.svg";
import InstagramBlackIcon from "src/assets/logos/instagram-logo.svg";
import LinkedInWhiteIcon from "src/assets/logos/linkedin-logo-white.svg";
import GithubWhiteIcon from "src/assets/logos/github-logo-white.svg";
import InstagramWhiteIcon from "src/assets/logos/instagram-logo-white.svg";

const SocialLinks = ({ isWhite = false, customStyle = "" }) => {
  const LinkedInIcon = isWhite ? LinkedInWhiteIcon : LinkedInBlackIcon;
  const GithubIcon = isWhite ? GithubWhiteIcon : GithubBlackIcon;
  const InstagramIcon = isWhite ? InstagramWhiteIcon : InstagramBlackIcon;

  const socialLinks = [
    {
      social: "LinkedIn",
      link: "https://www.linkedin.com/in/cj-kim-966351255/",
      icon: LinkedInIcon,
    },
    {
      social: "Github",
      link: "https://github.com/cjoak1028",
      icon: GithubIcon,
    },
    {
      social: "Instagram",
      link: "https://www.instagram.com/chng.juce/",
      icon: InstagramIcon,
    },
  ];

  return (
    <div className={`flex flex-row gap-5 md:gap-7 ${customStyle}`}>
      {socialLinks.map((socialLink) => {
        const { social, link, icon } = socialLink;
        return (
          <SocialLink key={social} social={social} link={link} icon={icon} />
        );
      })}
    </div>
  );
};

const SocialLink = ({ social, link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link to CJ's ${social}`}
      className="hover:opacity-60 cursor-pointer transition-opacity"
    >
      <img src={icon} alt={`${social} icon`} className="h-6 md:h-7" />
    </a>
  );
};

export default SocialLinks;
