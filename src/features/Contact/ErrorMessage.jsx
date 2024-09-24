import AlertIcon from "src/assets/icons/alert-icon.svg";

const ErrorMessage = ({ message }) => (
  <p className="flex flex-row items-center text-xs text-red-500 mt-1 gap-1 font-medium">
    <img src={AlertIcon} className="h-4 inline-block" /> {message}
  </p>
);

export default ErrorMessage;
