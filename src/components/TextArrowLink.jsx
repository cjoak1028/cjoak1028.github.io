const TextArrowLink = ({ label, link }) => {
  return (
    <a
      className="font-medium hover:opacity-60 transition-opacity cursor-pointer group"
      target="_blank"
      rel="noopener noreferrer"
      href={link}
    >
      {label}{" "}
      <span className="inline-block transition-transform transform group-hover:translate-x-2">
        &rarr;
      </span>
    </a>
  );
};

export default TextArrowLink;
