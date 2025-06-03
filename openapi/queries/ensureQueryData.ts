// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { AgentsService, ContractsService, DataService, FactionsService, FleetService, GlobalService, SystemsService } from "../requests/services.gen";
import { WaypointTraitSymbol, WaypointType } from "../requests/types.gen";
import * as Common from "./common";
export const ensureUseGlobalServiceGetData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseGlobalServiceGetKeyFn(), queryFn: () => GlobalService.get() });
export const ensureUseSystemsServiceGetSystemsData = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.ensureQueryData({ queryKey: Common.UseSystemsServiceGetSystemsKeyFn({ limit, page }), queryFn: () => SystemsService.getSystems({ limit, page }) });
export const ensureUseSystemsServiceGetSystemsBySystemSymbolData = (queryClient: QueryClient, { systemSymbol }: {
  systemSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolKeyFn({ systemSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbol({ systemSymbol }) });
export const ensureUseSystemsServiceGetSystemsBySystemSymbolWaypointsData = (queryClient: QueryClient, { limit, page, systemSymbol, traits, type }: {
  limit?: number;
  page?: number;
  systemSymbol: string;
  traits?: WaypointTraitSymbol | WaypointTraitSymbol[];
  type?: WaypointType;
}) => queryClient.ensureQueryData({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsKeyFn({ limit, page, systemSymbol, traits, type }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypoints({ limit, page, systemSymbol, traits, type }) });
export const ensureUseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolData = (queryClient: QueryClient, { systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolKeyFn({ systemSymbol, waypointSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbol({ systemSymbol, waypointSymbol }) });
export const ensureUseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketData = (queryClient: QueryClient, { systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketKeyFn({ systemSymbol, waypointSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolMarket({ systemSymbol, waypointSymbol }) });
export const ensureUseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardData = (queryClient: QueryClient, { systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardKeyFn({ systemSymbol, waypointSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolShipyard({ systemSymbol, waypointSymbol }) });
export const ensureUseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateData = (queryClient: QueryClient, { systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateKeyFn({ systemSymbol, waypointSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGate({ systemSymbol, waypointSymbol }) });
export const ensureUseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionData = (queryClient: QueryClient, { systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionKeyFn({ systemSymbol, waypointSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolConstruction({ systemSymbol, waypointSymbol }) });
export const ensureUseFactionsServiceGetFactionsData = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.ensureQueryData({ queryKey: Common.UseFactionsServiceGetFactionsKeyFn({ limit, page }), queryFn: () => FactionsService.getFactions({ limit, page }) });
export const ensureUseFactionsServiceGetFactionsByFactionSymbolData = (queryClient: QueryClient, { factionSymbol }: {
  factionSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseFactionsServiceGetFactionsByFactionSymbolKeyFn({ factionSymbol }), queryFn: () => FactionsService.getFactionsByFactionSymbol({ factionSymbol }) });
export const ensureUseAgentsServiceGetMyAgentData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseAgentsServiceGetMyAgentKeyFn(), queryFn: () => AgentsService.getMyAgent() });
export const ensureUseAgentsServiceGetAgentsData = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.ensureQueryData({ queryKey: Common.UseAgentsServiceGetAgentsKeyFn({ limit, page }), queryFn: () => AgentsService.getAgents({ limit, page }) });
export const ensureUseAgentsServiceGetAgentsByAgentSymbolData = (queryClient: QueryClient, { agentSymbol }: {
  agentSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseAgentsServiceGetAgentsByAgentSymbolKeyFn({ agentSymbol }), queryFn: () => AgentsService.getAgentsByAgentSymbol({ agentSymbol }) });
export const ensureUseContractsServiceGetMyContractsData = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.ensureQueryData({ queryKey: Common.UseContractsServiceGetMyContractsKeyFn({ limit, page }), queryFn: () => ContractsService.getMyContracts({ limit, page }) });
export const ensureUseContractsServiceGetMyContractsByContractIdData = (queryClient: QueryClient, { contractId }: {
  contractId: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseContractsServiceGetMyContractsByContractIdKeyFn({ contractId }), queryFn: () => ContractsService.getMyContractsByContractId({ contractId }) });
export const ensureUseFleetServiceGetMyShipsData = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.ensureQueryData({ queryKey: Common.UseFleetServiceGetMyShipsKeyFn({ limit, page }), queryFn: () => FleetService.getMyShips({ limit, page }) });
export const ensureUseFleetServiceGetMyShipsByShipSymbolData = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbol({ shipSymbol }) });
export const ensureUseFleetServiceGetMyShipsByShipSymbolCargoData = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolCargoKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolCargo({ shipSymbol }) });
export const ensureUseFleetServiceGetMyShipsByShipSymbolCooldownData = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolCooldownKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolCooldown({ shipSymbol }) });
export const ensureUseFleetServiceGetMyShipsByShipSymbolNavData = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolNavKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolNav({ shipSymbol }) });
export const ensureUseFleetServiceGetMyShipsByShipSymbolMountsData = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolMountsKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolMounts({ shipSymbol }) });
export const ensureUseFleetServiceGetMyShipsByShipSymbolScrapData = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolScrapKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolScrap({ shipSymbol }) });
export const ensureUseFleetServiceGetMyShipsByShipSymbolRepairData = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolRepairKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolRepair({ shipSymbol }) });
export const ensureUseFleetServiceGetMyShipsByShipSymbolModulesData = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolModulesKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolModules({ shipSymbol }) });
export const ensureUseDataServiceGetMarketSupplyChainData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseDataServiceGetMarketSupplyChainKeyFn(), queryFn: () => DataService.getMarketSupplyChain() });
