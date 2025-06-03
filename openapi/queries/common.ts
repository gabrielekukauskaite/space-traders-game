// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryResult } from "@tanstack/react-query";
import { AgentsService, ContractsService, DataService, FactionsService, FleetService, GlobalService, SystemsService } from "../requests/services.gen";
import { WaypointTraitSymbol, WaypointType } from "../requests/types.gen";
export type GlobalServiceGetDefaultResponse = Awaited<ReturnType<typeof GlobalService.get>>;
export type GlobalServiceGetQueryResult<TData = GlobalServiceGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useGlobalServiceGetKey = "GlobalServiceGet";
export const UseGlobalServiceGetKeyFn = (queryKey?: Array<unknown>) => [useGlobalServiceGetKey, ...(queryKey ?? [])];
export type SystemsServiceGetSystemsDefaultResponse = Awaited<ReturnType<typeof SystemsService.getSystems>>;
export type SystemsServiceGetSystemsQueryResult<TData = SystemsServiceGetSystemsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemsServiceGetSystemsKey = "SystemsServiceGetSystems";
export const UseSystemsServiceGetSystemsKeyFn = ({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: Array<unknown>) => [useSystemsServiceGetSystemsKey, ...(queryKey ?? [{ limit, page }])];
export type SystemsServiceGetSystemsBySystemSymbolDefaultResponse = Awaited<ReturnType<typeof SystemsService.getSystemsBySystemSymbol>>;
export type SystemsServiceGetSystemsBySystemSymbolQueryResult<TData = SystemsServiceGetSystemsBySystemSymbolDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemsServiceGetSystemsBySystemSymbolKey = "SystemsServiceGetSystemsBySystemSymbol";
export const UseSystemsServiceGetSystemsBySystemSymbolKeyFn = ({ systemSymbol }: {
  systemSymbol: string;
}, queryKey?: Array<unknown>) => [useSystemsServiceGetSystemsBySystemSymbolKey, ...(queryKey ?? [{ systemSymbol }])];
export type SystemsServiceGetSystemsBySystemSymbolWaypointsDefaultResponse = Awaited<ReturnType<typeof SystemsService.getSystemsBySystemSymbolWaypoints>>;
export type SystemsServiceGetSystemsBySystemSymbolWaypointsQueryResult<TData = SystemsServiceGetSystemsBySystemSymbolWaypointsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsKey = "SystemsServiceGetSystemsBySystemSymbolWaypoints";
export const UseSystemsServiceGetSystemsBySystemSymbolWaypointsKeyFn = ({ limit, page, systemSymbol, traits, type }: {
  limit?: number;
  page?: number;
  systemSymbol: string;
  traits?: WaypointTraitSymbol | WaypointTraitSymbol[];
  type?: WaypointType;
}, queryKey?: Array<unknown>) => [useSystemsServiceGetSystemsBySystemSymbolWaypointsKey, ...(queryKey ?? [{ limit, page, systemSymbol, traits, type }])];
export type SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolDefaultResponse = Awaited<ReturnType<typeof SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbol>>;
export type SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolQueryResult<TData = SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolKey = "SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbol";
export const UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolKeyFn = ({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: Array<unknown>) => [useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolKey, ...(queryKey ?? [{ systemSymbol, waypointSymbol }])];
export type SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketDefaultResponse = Awaited<ReturnType<typeof SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolMarket>>;
export type SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketQueryResult<TData = SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketKey = "SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarket";
export const UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketKeyFn = ({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: Array<unknown>) => [useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketKey, ...(queryKey ?? [{ systemSymbol, waypointSymbol }])];
export type SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardDefaultResponse = Awaited<ReturnType<typeof SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolShipyard>>;
export type SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardQueryResult<TData = SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardKey = "SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyard";
export const UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardKeyFn = ({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: Array<unknown>) => [useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardKey, ...(queryKey ?? [{ systemSymbol, waypointSymbol }])];
export type SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateDefaultResponse = Awaited<ReturnType<typeof SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGate>>;
export type SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateQueryResult<TData = SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateKey = "SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGate";
export const UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateKeyFn = ({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: Array<unknown>) => [useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateKey, ...(queryKey ?? [{ systemSymbol, waypointSymbol }])];
export type SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionDefaultResponse = Awaited<ReturnType<typeof SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolConstruction>>;
export type SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionQueryResult<TData = SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionKey = "SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstruction";
export const UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionKeyFn = ({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: Array<unknown>) => [useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionKey, ...(queryKey ?? [{ systemSymbol, waypointSymbol }])];
export type FactionsServiceGetFactionsDefaultResponse = Awaited<ReturnType<typeof FactionsService.getFactions>>;
export type FactionsServiceGetFactionsQueryResult<TData = FactionsServiceGetFactionsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFactionsServiceGetFactionsKey = "FactionsServiceGetFactions";
export const UseFactionsServiceGetFactionsKeyFn = ({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: Array<unknown>) => [useFactionsServiceGetFactionsKey, ...(queryKey ?? [{ limit, page }])];
export type FactionsServiceGetFactionsByFactionSymbolDefaultResponse = Awaited<ReturnType<typeof FactionsService.getFactionsByFactionSymbol>>;
export type FactionsServiceGetFactionsByFactionSymbolQueryResult<TData = FactionsServiceGetFactionsByFactionSymbolDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFactionsServiceGetFactionsByFactionSymbolKey = "FactionsServiceGetFactionsByFactionSymbol";
export const UseFactionsServiceGetFactionsByFactionSymbolKeyFn = ({ factionSymbol }: {
  factionSymbol: string;
}, queryKey?: Array<unknown>) => [useFactionsServiceGetFactionsByFactionSymbolKey, ...(queryKey ?? [{ factionSymbol }])];
export type AgentsServiceGetMyAgentDefaultResponse = Awaited<ReturnType<typeof AgentsService.getMyAgent>>;
export type AgentsServiceGetMyAgentQueryResult<TData = AgentsServiceGetMyAgentDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAgentsServiceGetMyAgentKey = "AgentsServiceGetMyAgent";
export const UseAgentsServiceGetMyAgentKeyFn = (queryKey?: Array<unknown>) => [useAgentsServiceGetMyAgentKey, ...(queryKey ?? [])];
export type AgentsServiceGetAgentsDefaultResponse = Awaited<ReturnType<typeof AgentsService.getAgents>>;
export type AgentsServiceGetAgentsQueryResult<TData = AgentsServiceGetAgentsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAgentsServiceGetAgentsKey = "AgentsServiceGetAgents";
export const UseAgentsServiceGetAgentsKeyFn = ({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: Array<unknown>) => [useAgentsServiceGetAgentsKey, ...(queryKey ?? [{ limit, page }])];
export type AgentsServiceGetAgentsByAgentSymbolDefaultResponse = Awaited<ReturnType<typeof AgentsService.getAgentsByAgentSymbol>>;
export type AgentsServiceGetAgentsByAgentSymbolQueryResult<TData = AgentsServiceGetAgentsByAgentSymbolDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAgentsServiceGetAgentsByAgentSymbolKey = "AgentsServiceGetAgentsByAgentSymbol";
export const UseAgentsServiceGetAgentsByAgentSymbolKeyFn = ({ agentSymbol }: {
  agentSymbol: string;
}, queryKey?: Array<unknown>) => [useAgentsServiceGetAgentsByAgentSymbolKey, ...(queryKey ?? [{ agentSymbol }])];
export type ContractsServiceGetMyContractsDefaultResponse = Awaited<ReturnType<typeof ContractsService.getMyContracts>>;
export type ContractsServiceGetMyContractsQueryResult<TData = ContractsServiceGetMyContractsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useContractsServiceGetMyContractsKey = "ContractsServiceGetMyContracts";
export const UseContractsServiceGetMyContractsKeyFn = ({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: Array<unknown>) => [useContractsServiceGetMyContractsKey, ...(queryKey ?? [{ limit, page }])];
export type ContractsServiceGetMyContractsByContractIdDefaultResponse = Awaited<ReturnType<typeof ContractsService.getMyContractsByContractId>>;
export type ContractsServiceGetMyContractsByContractIdQueryResult<TData = ContractsServiceGetMyContractsByContractIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useContractsServiceGetMyContractsByContractIdKey = "ContractsServiceGetMyContractsByContractId";
export const UseContractsServiceGetMyContractsByContractIdKeyFn = ({ contractId }: {
  contractId: string;
}, queryKey?: Array<unknown>) => [useContractsServiceGetMyContractsByContractIdKey, ...(queryKey ?? [{ contractId }])];
export type FleetServiceGetMyShipsDefaultResponse = Awaited<ReturnType<typeof FleetService.getMyShips>>;
export type FleetServiceGetMyShipsQueryResult<TData = FleetServiceGetMyShipsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFleetServiceGetMyShipsKey = "FleetServiceGetMyShips";
export const UseFleetServiceGetMyShipsKeyFn = ({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: Array<unknown>) => [useFleetServiceGetMyShipsKey, ...(queryKey ?? [{ limit, page }])];
export type FleetServiceGetMyShipsByShipSymbolDefaultResponse = Awaited<ReturnType<typeof FleetService.getMyShipsByShipSymbol>>;
export type FleetServiceGetMyShipsByShipSymbolQueryResult<TData = FleetServiceGetMyShipsByShipSymbolDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFleetServiceGetMyShipsByShipSymbolKey = "FleetServiceGetMyShipsByShipSymbol";
export const UseFleetServiceGetMyShipsByShipSymbolKeyFn = ({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: Array<unknown>) => [useFleetServiceGetMyShipsByShipSymbolKey, ...(queryKey ?? [{ shipSymbol }])];
export type FleetServiceGetMyShipsByShipSymbolCargoDefaultResponse = Awaited<ReturnType<typeof FleetService.getMyShipsByShipSymbolCargo>>;
export type FleetServiceGetMyShipsByShipSymbolCargoQueryResult<TData = FleetServiceGetMyShipsByShipSymbolCargoDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFleetServiceGetMyShipsByShipSymbolCargoKey = "FleetServiceGetMyShipsByShipSymbolCargo";
export const UseFleetServiceGetMyShipsByShipSymbolCargoKeyFn = ({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: Array<unknown>) => [useFleetServiceGetMyShipsByShipSymbolCargoKey, ...(queryKey ?? [{ shipSymbol }])];
export type FleetServiceGetMyShipsByShipSymbolCooldownDefaultResponse = Awaited<ReturnType<typeof FleetService.getMyShipsByShipSymbolCooldown>>;
export type FleetServiceGetMyShipsByShipSymbolCooldownQueryResult<TData = FleetServiceGetMyShipsByShipSymbolCooldownDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFleetServiceGetMyShipsByShipSymbolCooldownKey = "FleetServiceGetMyShipsByShipSymbolCooldown";
export const UseFleetServiceGetMyShipsByShipSymbolCooldownKeyFn = ({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: Array<unknown>) => [useFleetServiceGetMyShipsByShipSymbolCooldownKey, ...(queryKey ?? [{ shipSymbol }])];
export type FleetServiceGetMyShipsByShipSymbolNavDefaultResponse = Awaited<ReturnType<typeof FleetService.getMyShipsByShipSymbolNav>>;
export type FleetServiceGetMyShipsByShipSymbolNavQueryResult<TData = FleetServiceGetMyShipsByShipSymbolNavDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFleetServiceGetMyShipsByShipSymbolNavKey = "FleetServiceGetMyShipsByShipSymbolNav";
export const UseFleetServiceGetMyShipsByShipSymbolNavKeyFn = ({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: Array<unknown>) => [useFleetServiceGetMyShipsByShipSymbolNavKey, ...(queryKey ?? [{ shipSymbol }])];
export type FleetServiceGetMyShipsByShipSymbolMountsDefaultResponse = Awaited<ReturnType<typeof FleetService.getMyShipsByShipSymbolMounts>>;
export type FleetServiceGetMyShipsByShipSymbolMountsQueryResult<TData = FleetServiceGetMyShipsByShipSymbolMountsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFleetServiceGetMyShipsByShipSymbolMountsKey = "FleetServiceGetMyShipsByShipSymbolMounts";
export const UseFleetServiceGetMyShipsByShipSymbolMountsKeyFn = ({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: Array<unknown>) => [useFleetServiceGetMyShipsByShipSymbolMountsKey, ...(queryKey ?? [{ shipSymbol }])];
export type FleetServiceGetMyShipsByShipSymbolScrapDefaultResponse = Awaited<ReturnType<typeof FleetService.getMyShipsByShipSymbolScrap>>;
export type FleetServiceGetMyShipsByShipSymbolScrapQueryResult<TData = FleetServiceGetMyShipsByShipSymbolScrapDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFleetServiceGetMyShipsByShipSymbolScrapKey = "FleetServiceGetMyShipsByShipSymbolScrap";
export const UseFleetServiceGetMyShipsByShipSymbolScrapKeyFn = ({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: Array<unknown>) => [useFleetServiceGetMyShipsByShipSymbolScrapKey, ...(queryKey ?? [{ shipSymbol }])];
export type FleetServiceGetMyShipsByShipSymbolRepairDefaultResponse = Awaited<ReturnType<typeof FleetService.getMyShipsByShipSymbolRepair>>;
export type FleetServiceGetMyShipsByShipSymbolRepairQueryResult<TData = FleetServiceGetMyShipsByShipSymbolRepairDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFleetServiceGetMyShipsByShipSymbolRepairKey = "FleetServiceGetMyShipsByShipSymbolRepair";
export const UseFleetServiceGetMyShipsByShipSymbolRepairKeyFn = ({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: Array<unknown>) => [useFleetServiceGetMyShipsByShipSymbolRepairKey, ...(queryKey ?? [{ shipSymbol }])];
export type FleetServiceGetMyShipsByShipSymbolModulesDefaultResponse = Awaited<ReturnType<typeof FleetService.getMyShipsByShipSymbolModules>>;
export type FleetServiceGetMyShipsByShipSymbolModulesQueryResult<TData = FleetServiceGetMyShipsByShipSymbolModulesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFleetServiceGetMyShipsByShipSymbolModulesKey = "FleetServiceGetMyShipsByShipSymbolModules";
export const UseFleetServiceGetMyShipsByShipSymbolModulesKeyFn = ({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: Array<unknown>) => [useFleetServiceGetMyShipsByShipSymbolModulesKey, ...(queryKey ?? [{ shipSymbol }])];
export type DataServiceGetMarketSupplyChainDefaultResponse = Awaited<ReturnType<typeof DataService.getMarketSupplyChain>>;
export type DataServiceGetMarketSupplyChainQueryResult<TData = DataServiceGetMarketSupplyChainDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDataServiceGetMarketSupplyChainKey = "DataServiceGetMarketSupplyChain";
export const UseDataServiceGetMarketSupplyChainKeyFn = (queryKey?: Array<unknown>) => [useDataServiceGetMarketSupplyChainKey, ...(queryKey ?? [])];
export type GlobalServicePostRegisterMutationResult = Awaited<ReturnType<typeof GlobalService.postRegister>>;
export type SystemsServicePostSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionSupplyMutationResult = Awaited<ReturnType<typeof SystemsService.postSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionSupply>>;
export type ContractsServicePostMyContractsByContractIdAcceptMutationResult = Awaited<ReturnType<typeof ContractsService.postMyContractsByContractIdAccept>>;
export type ContractsServicePostMyContractsByContractIdDeliverMutationResult = Awaited<ReturnType<typeof ContractsService.postMyContractsByContractIdDeliver>>;
export type ContractsServicePostMyContractsByContractIdFulfillMutationResult = Awaited<ReturnType<typeof ContractsService.postMyContractsByContractIdFulfill>>;
export type FleetServicePostMyShipsMutationResult = Awaited<ReturnType<typeof FleetService.postMyShips>>;
export type FleetServicePostMyShipsByShipSymbolOrbitMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolOrbit>>;
export type FleetServicePostMyShipsByShipSymbolRefineMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolRefine>>;
export type FleetServicePostMyShipsByShipSymbolChartMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolChart>>;
export type FleetServicePostMyShipsByShipSymbolDockMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolDock>>;
export type FleetServicePostMyShipsByShipSymbolSurveyMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolSurvey>>;
export type FleetServicePostMyShipsByShipSymbolExtractMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolExtract>>;
export type FleetServicePostMyShipsByShipSymbolSiphonMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolSiphon>>;
export type FleetServicePostMyShipsByShipSymbolExtractSurveyMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolExtractSurvey>>;
export type FleetServicePostMyShipsByShipSymbolJettisonMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolJettison>>;
export type FleetServicePostMyShipsByShipSymbolJumpMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolJump>>;
export type FleetServicePostMyShipsByShipSymbolNavigateMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolNavigate>>;
export type FleetServicePostMyShipsByShipSymbolWarpMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolWarp>>;
export type FleetServicePostMyShipsByShipSymbolSellMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolSell>>;
export type FleetServicePostMyShipsByShipSymbolScanSystemsMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolScanSystems>>;
export type FleetServicePostMyShipsByShipSymbolScanWaypointsMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolScanWaypoints>>;
export type FleetServicePostMyShipsByShipSymbolScanShipsMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolScanShips>>;
export type FleetServicePostMyShipsByShipSymbolRefuelMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolRefuel>>;
export type FleetServicePostMyShipsByShipSymbolPurchaseMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolPurchase>>;
export type FleetServicePostMyShipsByShipSymbolTransferMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolTransfer>>;
export type FleetServicePostMyShipsByShipSymbolNegotiateContractMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolNegotiateContract>>;
export type FleetServicePostMyShipsByShipSymbolMountsInstallMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolMountsInstall>>;
export type FleetServicePostMyShipsByShipSymbolMountsRemoveMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolMountsRemove>>;
export type FleetServicePostMyShipsByShipSymbolScrapMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolScrap>>;
export type FleetServicePostMyShipsByShipSymbolRepairMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolRepair>>;
export type FleetServicePostMyShipsByShipSymbolModulesInstallMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolModulesInstall>>;
export type FleetServicePostMyShipsByShipSymbolModulesRemoveMutationResult = Awaited<ReturnType<typeof FleetService.postMyShipsByShipSymbolModulesRemove>>;
export type FleetServicePatchMyShipsByShipSymbolNavMutationResult = Awaited<ReturnType<typeof FleetService.patchMyShipsByShipSymbolNav>>;
