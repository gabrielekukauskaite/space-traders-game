import type { Contract } from "../../../../openapi/requests/types.gen";
import classes from "./AvailableContract.module.css";
import StarIcon from "../../Icons/StarIcon";
import ProgressBar from "./ProgressBar/ProgressBar";
import RewardAndDeadline from "./RewardAndDeadline/RewardAndDeadline";
import AcceptButton from "./AcceptButton/AcceptButton";

const AvailableContract = ({ contract }: { contract: Contract }) => {
  const showProgressBar = contract.accepted && !contract.fulfilled;

  return (
    <div className={classes.contractContainer}>
      <div className={classes.header}>
        <span className={classes.title}>New mission available </span>
        <span className={classes.contractType}>
          {contract.factionSymbol} | {contract.type}
        </span>
      </div>
      <div className={classes.contractDetails}>
        <ul>
          {contract.terms.deliver?.map((delivery, index) => (
            <li key={index} className={classes.deliveryTerm}>
              <div className={classes.deliveryTermText}>
                <StarIcon />
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
        <button
          className={contract.fulfilled ? undefined : classes.disabled}
          onClick={() => {}}
        >
          Complete mission
        </button>
      )}
    </div>
  );
};

export default AvailableContract;
