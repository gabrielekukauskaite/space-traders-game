import classes from "./ProgressBar.module.css";

interface ProgressBarProps {
  completedUnits: number;
  totalUnits: number;
}

const ProgressBar = ({ completedUnits, totalUnits }: ProgressBarProps) => {
  return (
    <div
      className={classes.progressBar}
      role="progressbar"
      aria-valuenow={completedUnits}
      aria-valuemin={0}
      aria-valuemax={totalUnits}
    >
      <div
        className={classes.progressFill}
        style={{
          width: `${(completedUnits / totalUnits) * 100}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
