import AlertIcon from "src/assets/icons/alert-icon.svg";

const InputField = ({ name, type = "text", value, onChange, error, label }) => {
  return (
    <div className="w-full mb-4">
      <label htmlFor={name} className="text-xs font-medium">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        autoComplete="off"
        className={`w-full p-2 text-sm rounded-md border bg-transparent ${
          error ? "border-red-500" : "border-black/10"
        }`}
        onChange={onChange}
      />
      {error && (
        <p className="flex flex-row items-center text-xs text-red-500 mt-1 gap-1 font-medium">
          <img src={AlertIcon} className="h-4 inline-block" /> {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
