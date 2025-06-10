import CreditIcon from "../Icons/CreditIcon";
import HourglassIcon from "../Icons/HourglassIcon";
import TimeLeft from "./TimeLeft";
import type { Contract } from "../../../openapi/requests/types.gen";

interface RewardAndDeadlineProps {
  contract: Contract;
}

const RewardAndDeadline = ({ contract }: RewardAndDeadlineProps) => {
  return (
    <div className="flex gap-x-4">
      <div>
        <span className="text-xs">accepted</span>
        <div className="flex text-xl/6">
          +<CreditIcon className="h-5 w-5 fill-secondary" />
          {contract.terms.payment.onAccepted.toLocaleString()}
        </div>
      </div>
      <div>
        <span className="text-xs">completed</span>
        <div className="flex text-xl/6">
          +<CreditIcon className="h-5 w-5 fill-secondary" />
          {contract.terms.payment.onFulfilled.toLocaleString()}
        </div>
      </div>

      <div>
        <span className="text-xs">remaining</span>
        <div className="flex text-xl/6">
          <HourglassIcon className="h-5 w-5 fill-secondary" />
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
