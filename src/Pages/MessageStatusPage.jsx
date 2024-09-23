import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HeartIcon from "../assets/icons/heart-icon.svg";
import SadFaceIcon from "../assets/icons/sad-face-icon.svg";

const MessageStatusPage = () => {
  const { state } = useLocation();
  const isSuccess = state?.isSuccess;
  const icon = isSuccess ? HeartIcon : SadFaceIcon;
  const heading = isSuccess ? "Message received." : "Oops!";
  const subHeading = isSuccess ? "Thank you!" : "Something went wrong.";
  const message = isSuccess
    ? "I'll be in touch with you shortly."
    : "Please try again later.";

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col text-center gap-4">
        <img src={icon} className="h-12" alt="status icon" />
        <h2 className="heading-md">
          {heading} <br />
          {subHeading}
        </h2>
      </div>
      <h3 className="heading-sm">{message}</h3>
      <Link to="/" className="primary-button flex items-center justify-center">
        Back to home
      </Link>
    </div>
  );
};

export default MessageStatusPage;
