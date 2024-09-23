const TextIconLink = ({ text, icon, link }) => {
  console.log(link);
  return (
    <a
      className={`flex flex-row items-center gap-2 hover:opacity-60 cursor-pointer font-normal transition-opacity ${
        !link && "opacity-60 pointer-events-none"
      }`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text} <img src={icon} className="h-5" />
    </a>
  );
};

export default TextIconLink;
