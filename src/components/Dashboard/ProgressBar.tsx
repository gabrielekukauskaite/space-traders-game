interface ProgressBarProps {
  completedUnits: number;
  totalUnits: number;
}

const ProgressBar = ({ completedUnits, totalUnits }: ProgressBarProps) => {
  return (
    <div
      className="h-3 border-1 border-secondary rounded-full overflow-hidden ml-4 mt-2"
      role="progressbar"
      aria-valuenow={completedUnits}
      aria-valuemin={0}
      aria-valuemax={totalUnits}
    >
      <div
        className="bg-secondary h-full"
        style={{
          width: `${(completedUnits / totalUnits) * 100}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
