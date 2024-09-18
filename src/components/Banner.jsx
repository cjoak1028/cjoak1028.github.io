import Marquee from "react-fast-marquee";

const Banner = () => {
  const Dot = () => <span className="mx-2">&middot;</span>;
  return (
    <Marquee
      autoFill={true}
      speed={40}
      className="bg-black h-[3.125rem] sm:h-[3.75rem]"
    >
      <p className="text-white uppercase md:text-base">
        <span className="font-bold">open to work</span>
        <Dot />
        open to work <Dot />
      </p>
    </Marquee>
  );
};

export default Banner;
