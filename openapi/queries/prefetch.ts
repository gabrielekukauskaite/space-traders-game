// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { AgentsService, ContractsService, DataService, FactionsService, FleetService, GlobalService, SystemsService } from "../requests/services.gen";
import { WaypointTraitSymbol, WaypointType } from "../requests/types.gen";
import * as Common from "./common";
export const prefetchUseGlobalServiceGet = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseGlobalServiceGetKeyFn(), queryFn: () => GlobalService.get() });
export const prefetchUseSystemsServiceGetSystems = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseSystemsServiceGetSystemsKeyFn({ limit, page }), queryFn: () => SystemsService.getSystems({ limit, page }) });
export const prefetchUseSystemsServiceGetSystemsBySystemSymbol = (queryClient: QueryClient, { systemSymbol }: {
  systemSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolKeyFn({ systemSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbol({ systemSymbol }) });
export const prefetchUseSystemsServiceGetSystemsBySystemSymbolWaypoints = (queryClient: QueryClient, { limit, page, systemSymbol, traits, type }: {
  limit?: number;
  page?: number;
  systemSymbol: string;
  traits?: WaypointTraitSymbol | WaypointTraitSymbol[];
  type?: WaypointType;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsKeyFn({ limit, page, systemSymbol, traits, type }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypoints({ limit, page, systemSymbol, traits, type }) });
export const prefetchUseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbol = (queryClient: QueryClient, { systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolKeyFn({ systemSymbol, waypointSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbol({ systemSymbol, waypointSymbol }) });
export const prefetchUseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarket = (queryClient: QueryClient, { systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketKeyFn({ systemSymbol, waypointSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolMarket({ systemSymbol, waypointSymbol }) });
export const prefetchUseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyard = (queryClient: QueryClient, { systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardKeyFn({ systemSymbol, waypointSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolShipyard({ systemSymbol, waypointSymbol }) });
export const prefetchUseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGate = (queryClient: QueryClient, { systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateKeyFn({ systemSymbol, waypointSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGate({ systemSymbol, waypointSymbol }) });
export const prefetchUseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstruction = (queryClient: QueryClient, { systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionKeyFn({ systemSymbol, waypointSymbol }), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolConstruction({ systemSymbol, waypointSymbol }) });
export const prefetchUseFactionsServiceGetFactions = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseFactionsServiceGetFactionsKeyFn({ limit, page }), queryFn: () => FactionsService.getFactions({ limit, page }) });
export const prefetchUseFactionsServiceGetFactionsByFactionSymbol = (queryClient: QueryClient, { factionSymbol }: {
  factionSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFactionsServiceGetFactionsByFactionSymbolKeyFn({ factionSymbol }), queryFn: () => FactionsService.getFactionsByFactionSymbol({ factionSymbol }) });
export const prefetchUseAgentsServiceGetMyAgent = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAgentsServiceGetMyAgentKeyFn(), queryFn: () => AgentsService.getMyAgent() });
export const prefetchUseAgentsServiceGetAgents = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAgentsServiceGetAgentsKeyFn({ limit, page }), queryFn: () => AgentsService.getAgents({ limit, page }) });
export const prefetchUseAgentsServiceGetAgentsByAgentSymbol = (queryClient: QueryClient, { agentSymbol }: {
  agentSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAgentsServiceGetAgentsByAgentSymbolKeyFn({ agentSymbol }), queryFn: () => AgentsService.getAgentsByAgentSymbol({ agentSymbol }) });
export const prefetchUseContractsServiceGetMyContracts = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseContractsServiceGetMyContractsKeyFn({ limit, page }), queryFn: () => ContractsService.getMyContracts({ limit, page }) });
export const prefetchUseContractsServiceGetMyContractsByContractId = (queryClient: QueryClient, { contractId }: {
  contractId: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseContractsServiceGetMyContractsByContractIdKeyFn({ contractId }), queryFn: () => ContractsService.getMyContractsByContractId({ contractId }) });
export const prefetchUseFleetServiceGetMyShips = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseFleetServiceGetMyShipsKeyFn({ limit, page }), queryFn: () => FleetService.getMyShips({ limit, page }) });
export const prefetchUseFleetServiceGetMyShipsByShipSymbol = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbol({ shipSymbol }) });
export const prefetchUseFleetServiceGetMyShipsByShipSymbolCargo = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolCargoKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolCargo({ shipSymbol }) });
export const prefetchUseFleetServiceGetMyShipsByShipSymbolCooldown = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolCooldownKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolCooldown({ shipSymbol }) });
export const prefetchUseFleetServiceGetMyShipsByShipSymbolNav = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolNavKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolNav({ shipSymbol }) });
export const prefetchUseFleetServiceGetMyShipsByShipSymbolMounts = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolMountsKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolMounts({ shipSymbol }) });
export const prefetchUseFleetServiceGetMyShipsByShipSymbolScrap = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolScrapKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolScrap({ shipSymbol }) });
export const prefetchUseFleetServiceGetMyShipsByShipSymbolRepair = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolRepairKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolRepair({ shipSymbol }) });
export const prefetchUseFleetServiceGetMyShipsByShipSymbolModules = (queryClient: QueryClient, { shipSymbol }: {
  shipSymbol: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolModulesKeyFn({ shipSymbol }), queryFn: () => FleetService.getMyShipsByShipSymbolModules({ shipSymbol }) });
export const prefetchUseDataServiceGetMarketSupplyChain = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseDataServiceGetMarketSupplyChainKeyFn(), queryFn: () => DataService.getMarketSupplyChain() });
