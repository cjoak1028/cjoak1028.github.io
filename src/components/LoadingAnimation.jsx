const LoadingAnimation = ({ circleDiameter = "0.5rem", color = "#FFFFFF" }) => {
  return (
    <div className="flex space-x-2 justify-center items-center h-full">
      <div
        className={`rounded-full animate-bounce [animation-delay:-0.3s]`}
        style={{
          height: circleDiameter,
          width: circleDiameter,
          backgroundColor: color,
        }}
      ></div>
      <div
        className={`rounded-full animate-bounce [animation-delay:-0.15s]`}
        style={{
          height: circleDiameter,
          width: circleDiameter,
          backgroundColor: color,
        }}
      ></div>
      <div
        className={`rounded-full animate-bounce`}
        style={{
          height: circleDiameter,
          width: circleDiameter,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default LoadingAnimation;
