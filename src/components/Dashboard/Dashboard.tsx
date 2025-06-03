import { useEffect } from "react";
import {
  useAgentsServiceGetMyAgent,
  useContractsServiceGetMyContracts,
  useFleetServiceGetMyShips,
  useFleetServicePostMyShipsByShipSymbolNegotiateContract,
} from "../../../openapi/queries";
import AgentSummary from "./AgentSummary/AgentSummary";
import AvailableContract from "./AvailableContract/AvailableContract";
import classes from "./Dashboard.module.css";

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
        <div className={classes.loading}>Swapping time and space......</div>
      ) : (
        <div className={classes.dashboard}>
          <main className={classes.main}>
            {agent?.data && <AgentSummary agent={agent?.data} />}
            {contracts?.data[0] && (
              <AvailableContract contract={contracts?.data[0]} /> //API limits max contracts to 1
            )}
          </main>
        </div>
      )}
    </>
  );
};

export default Dashboard;
