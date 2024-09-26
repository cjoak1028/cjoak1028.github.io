import SocialLinks from "src/components/SocialLinks";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center sm:justify-between lg:justify-end pt-8 lg:pt-0">
      <SocialLinks customStyle="lg:hidden" />
      <div className="text-center text-black opacity-60 sm:text-start lg:text-end">
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
