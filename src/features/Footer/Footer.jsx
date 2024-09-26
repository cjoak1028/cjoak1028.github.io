import SocialLinks from "src/components/SocialLinks";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row justify-center sm:justify-between bg-black px-6 md:px-10 py-8 sm:py-6">
      <SocialLinks isWhite={true} />
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
