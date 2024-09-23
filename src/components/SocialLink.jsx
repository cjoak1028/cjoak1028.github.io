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

export default SocialLink;
