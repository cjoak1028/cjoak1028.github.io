import Marquee from "react-fast-marquee";
import { BANNER_HEIGHT, BANNER_HEIGHT_SM } from "../utils/constants.js";

const Banner = () => {
  const Dot = () => <span className="mx-2">&middot;</span>;
  return (
    <Marquee
      autoFill={true}
      speed={40}
      className={`bg-black h-[${BANNER_HEIGHT}rem] sm:h-[${BANNER_HEIGHT_SM}rem]`}
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
