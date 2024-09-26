import SocialLinks from "src/components/SocialLinks";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center sm:justify-between lg:items-end bg-black lg:bg-white px-6 md:px-10 py-8 sm:py-6 lg:p-0">
      {/* <SocialLinks isWhite={true} /> */}
      <div className="text-center text-white lg:text-black opacity-60 sm:text-start lg:text-end">
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
