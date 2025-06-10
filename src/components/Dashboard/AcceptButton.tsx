import { useContractsServicePostMyContractsByContractIdAccept } from "../../../openapi/queries";

interface AcceptButtonProps {
  contractId: string;
}

const AcceptButton = ({ contractId }: AcceptButtonProps) => {
  const { mutate: acceptContract } =
    useContractsServicePostMyContractsByContractIdAccept();

  return (
    <button
      onClick={() => acceptContract({ contractId: contractId })}
      className="flex self-center gap-x-1 text-2xl text-secondary"
    >
      <span className="text-3xl">&#8920;</span>
      <span className="pt-1">Accept mission</span>
      <span className="text-3xl"> &#8921;</span>
    </button>
  );
};

export default AcceptButton;
