import { useEffect } from "react";
import {
  useAgentsServiceGetMyAgent,
  useContractsServiceGetMyContracts,
  useFleetServiceGetMyShips,
  useFleetServicePostMyShipsByShipSymbolNegotiateContract,
} from "../../../openapi/queries";
import AgentSummary from "./AgentSummary";
import AvailableContract from "./AvailableContract";

const Dashboard = () => {
  const { data: agent, isLoading: agentLoading } = useAgentsServiceGetMyAgent();
  const { data: contracts, isLoading: contractsLoading } =
    useContractsServiceGetMyContracts();
  const { data: ships } = useFleetServiceGetMyShips();
  const { mutate: getNewContract } =
    useFleetServicePostMyShipsByShipSymbolNegotiateContract();

  useEffect(() => {
    // If there are no contracts, send a request to get a new one
    if (ships?.data && contracts?.meta.total === 0) {
      getNewContract({ shipSymbol: ships?.data[0].symbol });
    }
  }, [contracts, ships]);

  return (
    <>
      {agentLoading || contractsLoading ? (
        <div className="flex justify-center items-center flex-1 text-4xl">
          Swapping time and space......
        </div>
      ) : (
        <main className="flex flex-col gap-y-12">
          {agent?.data && <AgentSummary agent={agent?.data} />}
          {contracts?.data[0] && (
            <AvailableContract contract={contracts?.data[0]} /> //API limits max contracts to 1
          )}
        </main>
      )}
    </>
  );
};

export default Dashboard;
