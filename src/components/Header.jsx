import ProfileImg from "../assets/profile.jpg";

const Header = () => {
  return (
    <div className="px-4 py-5 flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-center">
        <img src={ProfileImg} className="w-5 h-5 rounded-full" />
        <span className="font-bold tracking-widest">cjkim.dev</span>
      </div>
      <button className="px-4">Menu</button>
    </div>
  );
};

export default Header;
