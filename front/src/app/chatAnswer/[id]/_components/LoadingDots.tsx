const LoadingDots = () => {
  return (
    <span className="inline-block">
      <span className="animate-[blink_1.2s_steps(1,end)_infinite]">.</span>
      <span className="animate-[blink_1.2s_steps(1,end)_infinite_0.2s]">.</span>
      <span className="animate-[blink_1.2s_steps(1,end)_infinite_0.4s]">.</span>
      <style jsx>{`
        @keyframes blink {
          0%,
          20% {
            opacity: 0;
          }
          21%,
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </span>
  );
};

export default LoadingDots;
