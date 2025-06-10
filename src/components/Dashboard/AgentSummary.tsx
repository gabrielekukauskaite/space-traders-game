import type { Agent } from "../../../openapi/requests/types.gen";
import CreditIcon from "../Icons/CreditIcon";
import FactionIcon from "../Icons/FactionIcon";
import HQIcon from "../Icons/HQIcon";
import SpaceshipIcon from "../Icons/SpaceshipIcon";

interface AgentSummaryProps {
  agent: Agent;
}

const AgentSummary = ({ agent }: AgentSummaryProps) => {
  return (
    <div className="flex justify-between text-2xl">
      <div className="flex items-center gap-x-1">
        <CreditIcon className="h-10 w-10 fill-secondary" />
        <div className="flex flex-col">
          <span>{agent.credits.toLocaleString()}</span>
          <span className="text-xs opacity-50">Credits</span>
        </div>
      </div>
      <div className="flex items-center gap-x-1">
        <HQIcon className="h-10 w-10 fill-secondary" />
        <div className="flex flex-col">
          <span>{agent.headquarters}</span>
          <span className="text-xs opacity-50">Headquarters</span>
        </div>
      </div>
      <div className="flex items-center gap-x-1">
        <FactionIcon className="h-10 w-10 fill-secondary" />
        <div className="flex flex-col">
          <span>{agent.startingFaction}</span>
          <span className="text-xs opacity-50">Faction</span>
        </div>
      </div>
      <div className="flex items-center gap-x-1">
        <SpaceshipIcon className="h-10 w-10 fill-secondary" />
        <div className="flex flex-col">
          <span>{agent.shipCount}</span>
          <span className="text-xs opacity-50">Ships</span>
        </div>
      </div>
    </div>
  );
};
export default AgentSummary;
