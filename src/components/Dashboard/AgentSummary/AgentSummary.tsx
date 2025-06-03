import type { Agent } from "../../../../openapi/requests/types.gen";
import classes from "./AgentSummary.module.css";
import CreditIcon from "../../Icons/CreditIcon";
import FactionIcon from "../../Icons/FactionIcon";
import HQIcon from "../../Icons/HQIcon";
import SpaceshipIcon from "../../Icons/SpaceshipIcon";

interface AgentSummaryProps {
  agent: Agent;
}
const AgentSummary = ({ agent }: AgentSummaryProps) => {
  return (
    <div className={classes.agentSummary}>
      <div className={classes.item}>
        <CreditIcon />
        <div className={classes.itemText}>
          <span>{agent.credits.toLocaleString()}</span>
          <span>Credits</span>
        </div>
      </div>
      <div className={classes.item}>
        <HQIcon />
        <div className={classes.itemText}>
          <span>{agent.headquarters}</span>
          <span>Headquarters</span>
        </div>
      </div>
      <div className={classes.item}>
        <FactionIcon />
        <div className={classes.itemText}>
          <span>{agent.startingFaction}</span>
          <span>Faction</span>
        </div>
      </div>
      <div className={classes.item}>
        <SpaceshipIcon />
        <div className={classes.itemText}>
          <span>{agent.shipCount}</span>
          <span>Ships</span>
        </div>
      </div>
    </div>
  );
};
export default AgentSummary;
