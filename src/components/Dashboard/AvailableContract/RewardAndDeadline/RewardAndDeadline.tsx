import CreditIcon from "../../../Icons/CreditIcon";
import HourglassIcon from "../../../Icons/HourglassIcon";
import TimeLeft from "./TimeLeft/TimeLeft";
import classes from "./RewardAndDeadline.module.css";
import type { Contract } from "../../../../../openapi/requests/types.gen";

interface RewardAndDeadlineProps {
  contract: Contract;
}

const RewardAndDeadline = ({ contract }: RewardAndDeadlineProps) => {
  return (
    <div className={classes.container}>
      <div>
        <span className={classes.title}>accepted</span>
        <div className={classes.detail}>
          +<CreditIcon /> {contract.terms.payment.onAccepted.toLocaleString()}
        </div>
      </div>
      <div>
        <span className={classes.title}>completed</span>
        <div className={classes.detail}>
          +<CreditIcon /> {contract.terms.payment.onFulfilled.toLocaleString()}
        </div>
      </div>

      <div>
        <span className={classes.title}>remaining</span>
        <div className={classes.detail}>
          <HourglassIcon />
          <TimeLeft
            timestamp={
              !contract.accepted
                ? contract.deadlineToAccept
                : contract.terms.deadline
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RewardAndDeadline;
