import type { Contract } from "../../../openapi/requests/types.gen";
import StarIcon from "../Icons/StarIcon";
import ProgressBar from "./ProgressBar";
import RewardAndDeadline from "./RewardAndDeadline";
import AcceptButton from "./AcceptButton";

const AvailableContract = ({ contract }: { contract: Contract }) => {
  const showProgressBar = contract.accepted && !contract.fulfilled;

  return (
    <div className="flex flex-col w-1/2 max-w-400">
      <div className="flex flex-col pb-2">
        <span className="text-2xl text-secondary">New mission available </span>
        <span className="text-xs">
          {contract.factionSymbol} | {contract.type}
        </span>
      </div>
      <div className="flex flex-col gap-y-8 py-8 border-y-1 border-secondary">
        <ul>
          {contract.terms.deliver?.map((delivery, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex">
                <StarIcon className="h-4 w-4 fill-secondary" />
                Deliver {delivery.unitsRequired} units of{" "}
                {delivery.tradeSymbol.replace("_", " ")} to{" "}
                {delivery.destinationSymbol}
              </div>
              {showProgressBar && (
                <ProgressBar
                  completedUnits={delivery.unitsFulfilled}
                  totalUnits={delivery.unitsRequired}
                />
              )}
            </li>
          ))}
        </ul>
        <RewardAndDeadline contract={contract} />
      </div>
      {!contract.accepted ? (
        <AcceptButton contractId={contract.id} />
      ) : (
        <button onClick={() => {}}>Complete mission</button>
      )}
    </div>
  );
};

export default AvailableContract;
