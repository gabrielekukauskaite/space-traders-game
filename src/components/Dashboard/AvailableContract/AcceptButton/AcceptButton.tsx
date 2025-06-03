import { useContractsServicePostMyContractsByContractIdAccept } from "../../../../../openapi/queries";
import classes from "./AcceptButton.module.css";

interface AcceptButtonProps {
  contractId: string;
}

const AcceptButton = ({ contractId }: AcceptButtonProps) => {
  const { mutate: acceptContract } =
    useContractsServicePostMyContractsByContractIdAccept();

  return (
    <button
      onClick={() => acceptContract({ contractId: contractId })}
      className={classes.button}
    >
      <span className={classes.arrow}>&#8920;</span>
      <span className={classes.text}>Accept mission</span>
      <span className={classes.arrow}> &#8921;</span>
    </button>
  );
};

export default AcceptButton;
