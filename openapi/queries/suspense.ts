// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { AgentsService, ContractsService, DataService, FactionsService, FleetService, GlobalService, SystemsService } from "../requests/services.gen";
import { WaypointTraitSymbol, WaypointType } from "../requests/types.gen";
import * as Common from "./common";
export const useGlobalServiceGetSuspense = <TData = Common.GlobalServiceGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGlobalServiceGetKeyFn(queryKey), queryFn: () => GlobalService.get() as TData, ...options });
export const useSystemsServiceGetSystemsSuspense = <TData = Common.SystemsServiceGetSystemsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsKeyFn({ limit, page }, queryKey), queryFn: () => SystemsService.getSystems({ limit, page }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolSuspense = <TData = Common.SystemsServiceGetSystemsBySystemSymbolDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol }: {
  systemSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolKeyFn({ systemSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbol({ systemSymbol }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsSuspense = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page, systemSymbol, traits, type }: {
  limit?: number;
  page?: number;
  systemSymbol: string;
  traits?: WaypointTraitSymbol | WaypointTraitSymbol[];
  type?: WaypointType;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsKeyFn({ limit, page, systemSymbol, traits, type }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypoints({ limit, page, systemSymbol, traits, type }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolSuspense = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolKeyFn({ systemSymbol, waypointSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbol({ systemSymbol, waypointSymbol }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketSuspense = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketKeyFn({ systemSymbol, waypointSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolMarket({ systemSymbol, waypointSymbol }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardSuspense = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardKeyFn({ systemSymbol, waypointSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolShipyard({ systemSymbol, waypointSymbol }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateSuspense = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateKeyFn({ systemSymbol, waypointSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGate({ systemSymbol, waypointSymbol }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionSuspense = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionKeyFn({ systemSymbol, waypointSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolConstruction({ systemSymbol, waypointSymbol }) as TData, ...options });
export const useFactionsServiceGetFactionsSuspense = <TData = Common.FactionsServiceGetFactionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFactionsServiceGetFactionsKeyFn({ limit, page }, queryKey), queryFn: () => FactionsService.getFactions({ limit, page }) as TData, ...options });
export const useFactionsServiceGetFactionsByFactionSymbolSuspense = <TData = Common.FactionsServiceGetFactionsByFactionSymbolDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ factionSymbol }: {
  factionSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFactionsServiceGetFactionsByFactionSymbolKeyFn({ factionSymbol }, queryKey), queryFn: () => FactionsService.getFactionsByFactionSymbol({ factionSymbol }) as TData, ...options });
export const useAgentsServiceGetMyAgentSuspense = <TData = Common.AgentsServiceGetMyAgentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAgentsServiceGetMyAgentKeyFn(queryKey), queryFn: () => AgentsService.getMyAgent() as TData, ...options });
export const useAgentsServiceGetAgentsSuspense = <TData = Common.AgentsServiceGetAgentsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAgentsServiceGetAgentsKeyFn({ limit, page }, queryKey), queryFn: () => AgentsService.getAgents({ limit, page }) as TData, ...options });
export const useAgentsServiceGetAgentsByAgentSymbolSuspense = <TData = Common.AgentsServiceGetAgentsByAgentSymbolDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ agentSymbol }: {
  agentSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAgentsServiceGetAgentsByAgentSymbolKeyFn({ agentSymbol }, queryKey), queryFn: () => AgentsService.getAgentsByAgentSymbol({ agentSymbol }) as TData, ...options });
export const useContractsServiceGetMyContractsSuspense = <TData = Common.ContractsServiceGetMyContractsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseContractsServiceGetMyContractsKeyFn({ limit, page }, queryKey), queryFn: () => ContractsService.getMyContracts({ limit, page }) as TData, ...options });
export const useContractsServiceGetMyContractsByContractIdSuspense = <TData = Common.ContractsServiceGetMyContractsByContractIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contractId }: {
  contractId: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseContractsServiceGetMyContractsByContractIdKeyFn({ contractId }, queryKey), queryFn: () => ContractsService.getMyContractsByContractId({ contractId }) as TData, ...options });
export const useFleetServiceGetMyShipsSuspense = <TData = Common.FleetServiceGetMyShipsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsKeyFn({ limit, page }, queryKey), queryFn: () => FleetService.getMyShips({ limit, page }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolSuspense = <TData = Common.FleetServiceGetMyShipsByShipSymbolDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbol({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolCargoSuspense = <TData = Common.FleetServiceGetMyShipsByShipSymbolCargoDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolCargoKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolCargo({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolCooldownSuspense = <TData = Common.FleetServiceGetMyShipsByShipSymbolCooldownDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolCooldownKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolCooldown({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolNavSuspense = <TData = Common.FleetServiceGetMyShipsByShipSymbolNavDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolNavKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolNav({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolMountsSuspense = <TData = Common.FleetServiceGetMyShipsByShipSymbolMountsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolMountsKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolMounts({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolScrapSuspense = <TData = Common.FleetServiceGetMyShipsByShipSymbolScrapDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolScrapKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolScrap({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolRepairSuspense = <TData = Common.FleetServiceGetMyShipsByShipSymbolRepairDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolRepairKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolRepair({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolModulesSuspense = <TData = Common.FleetServiceGetMyShipsByShipSymbolModulesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolModulesKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolModules({ shipSymbol }) as TData, ...options });
export const useDataServiceGetMarketSupplyChainSuspense = <TData = Common.DataServiceGetMarketSupplyChainDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDataServiceGetMarketSupplyChainKeyFn(queryKey), queryFn: () => DataService.getMarketSupplyChain() as TData, ...options });
