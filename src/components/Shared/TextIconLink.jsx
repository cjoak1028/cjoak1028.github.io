const TextIconLink = ({ text, icon, link }) => {
  return (
    <a
      className="flex flex-row items-center gap-2 hover:opacity-60 cursor-pointer font-normal transition-opacity"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text} <img src={icon} className="h-5" />
    </a>
  );
};

export default TextIconLink;
