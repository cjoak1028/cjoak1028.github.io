import AlertIcon from "src/assets/icons/alert-icon.svg";

const ErrorMessage = ({ message }) => (
  <p className="flex flex-row items-center text-xs text-red mt-1 gap-1">
    <img src={AlertIcon} className="h-4 inline-block" /> {message}
  </p>
);

export default ErrorMessage;
