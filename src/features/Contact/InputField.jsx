import ErrorMessage from "src/features/Contact/ErrorMessage";

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
          error ? "border-red" : "border-black/10"
        }`}
        onChange={onChange}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default InputField;
