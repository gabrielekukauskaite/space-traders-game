// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AgentsService, ContractsService, DataService, FactionsService, FleetService, GlobalService, SystemsService } from "../requests/services.gen";
import { FactionSymbol, ShipNavFlightMode, ShipType, Survey, TradeSymbol, WaypointTraitSymbol, WaypointType } from "../requests/types.gen";
import * as Common from "./common";
export const useGlobalServiceGet = <TData = Common.GlobalServiceGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGlobalServiceGetKeyFn(queryKey), queryFn: () => GlobalService.get() as TData, ...options });
export const useSystemsServiceGetSystems = <TData = Common.SystemsServiceGetSystemsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsKeyFn({ limit, page }, queryKey), queryFn: () => SystemsService.getSystems({ limit, page }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbol = <TData = Common.SystemsServiceGetSystemsBySystemSymbolDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol }: {
  systemSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolKeyFn({ systemSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbol({ systemSymbol }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypoints = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page, systemSymbol, traits, type }: {
  limit?: number;
  page?: number;
  systemSymbol: string;
  traits?: WaypointTraitSymbol | WaypointTraitSymbol[];
  type?: WaypointType;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsKeyFn({ limit, page, systemSymbol, traits, type }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypoints({ limit, page, systemSymbol, traits, type }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbol = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolKeyFn({ systemSymbol, waypointSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbol({ systemSymbol, waypointSymbol }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarket = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolMarketKeyFn({ systemSymbol, waypointSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolMarket({ systemSymbol, waypointSymbol }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyard = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolShipyardKeyFn({ systemSymbol, waypointSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolShipyard({ systemSymbol, waypointSymbol }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGate = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGateKeyFn({ systemSymbol, waypointSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolJumpGate({ systemSymbol, waypointSymbol }) as TData, ...options });
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstruction = <TData = Common.SystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ systemSymbol, waypointSymbol }: {
  systemSymbol: string;
  waypointSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionKeyFn({ systemSymbol, waypointSymbol }, queryKey), queryFn: () => SystemsService.getSystemsBySystemSymbolWaypointsByWaypointSymbolConstruction({ systemSymbol, waypointSymbol }) as TData, ...options });
export const useFactionsServiceGetFactions = <TData = Common.FactionsServiceGetFactionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFactionsServiceGetFactionsKeyFn({ limit, page }, queryKey), queryFn: () => FactionsService.getFactions({ limit, page }) as TData, ...options });
export const useFactionsServiceGetFactionsByFactionSymbol = <TData = Common.FactionsServiceGetFactionsByFactionSymbolDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ factionSymbol }: {
  factionSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFactionsServiceGetFactionsByFactionSymbolKeyFn({ factionSymbol }, queryKey), queryFn: () => FactionsService.getFactionsByFactionSymbol({ factionSymbol }) as TData, ...options });
export const useAgentsServiceGetMyAgent = <TData = Common.AgentsServiceGetMyAgentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAgentsServiceGetMyAgentKeyFn(queryKey), queryFn: () => AgentsService.getMyAgent() as TData, ...options });
export const useAgentsServiceGetAgents = <TData = Common.AgentsServiceGetAgentsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAgentsServiceGetAgentsKeyFn({ limit, page }, queryKey), queryFn: () => AgentsService.getAgents({ limit, page }) as TData, ...options });
export const useAgentsServiceGetAgentsByAgentSymbol = <TData = Common.AgentsServiceGetAgentsByAgentSymbolDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ agentSymbol }: {
  agentSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAgentsServiceGetAgentsByAgentSymbolKeyFn({ agentSymbol }, queryKey), queryFn: () => AgentsService.getAgentsByAgentSymbol({ agentSymbol }) as TData, ...options });
export const useContractsServiceGetMyContracts = <TData = Common.ContractsServiceGetMyContractsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseContractsServiceGetMyContractsKeyFn({ limit, page }, queryKey), queryFn: () => ContractsService.getMyContracts({ limit, page }) as TData, ...options });
export const useContractsServiceGetMyContractsByContractId = <TData = Common.ContractsServiceGetMyContractsByContractIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contractId }: {
  contractId: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseContractsServiceGetMyContractsByContractIdKeyFn({ contractId }, queryKey), queryFn: () => ContractsService.getMyContractsByContractId({ contractId }) as TData, ...options });
export const useFleetServiceGetMyShips = <TData = Common.FleetServiceGetMyShipsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsKeyFn({ limit, page }, queryKey), queryFn: () => FleetService.getMyShips({ limit, page }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbol = <TData = Common.FleetServiceGetMyShipsByShipSymbolDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbol({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolCargo = <TData = Common.FleetServiceGetMyShipsByShipSymbolCargoDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolCargoKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolCargo({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolCooldown = <TData = Common.FleetServiceGetMyShipsByShipSymbolCooldownDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolCooldownKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolCooldown({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolNav = <TData = Common.FleetServiceGetMyShipsByShipSymbolNavDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolNavKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolNav({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolMounts = <TData = Common.FleetServiceGetMyShipsByShipSymbolMountsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolMountsKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolMounts({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolScrap = <TData = Common.FleetServiceGetMyShipsByShipSymbolScrapDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolScrapKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolScrap({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolRepair = <TData = Common.FleetServiceGetMyShipsByShipSymbolRepairDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolRepairKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolRepair({ shipSymbol }) as TData, ...options });
export const useFleetServiceGetMyShipsByShipSymbolModules = <TData = Common.FleetServiceGetMyShipsByShipSymbolModulesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ shipSymbol }: {
  shipSymbol: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFleetServiceGetMyShipsByShipSymbolModulesKeyFn({ shipSymbol }, queryKey), queryFn: () => FleetService.getMyShipsByShipSymbolModules({ shipSymbol }) as TData, ...options });
export const useDataServiceGetMarketSupplyChain = <TData = Common.DataServiceGetMarketSupplyChainDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDataServiceGetMarketSupplyChainKeyFn(queryKey), queryFn: () => DataService.getMarketSupplyChain() as TData, ...options });
export const useGlobalServicePostRegister = <TData = Common.GlobalServicePostRegisterMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { faction: FactionSymbol; symbol: string; email?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { faction: FactionSymbol; symbol: string; email?: string; };
}, TContext>({ mutationFn: ({ requestBody }) => GlobalService.postRegister({ requestBody }) as unknown as Promise<TData>, ...options });
export const useSystemsServicePostSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionSupply = <TData = Common.SystemsServicePostSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionSupplyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { shipSymbol: string; tradeSymbol: string; units: number; };
  systemSymbol: string;
  waypointSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { shipSymbol: string; tradeSymbol: string; units: number; };
  systemSymbol: string;
  waypointSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, systemSymbol, waypointSymbol }) => SystemsService.postSystemsBySystemSymbolWaypointsByWaypointSymbolConstructionSupply({ requestBody, systemSymbol, waypointSymbol }) as unknown as Promise<TData>, ...options });
export const useContractsServicePostMyContractsByContractIdAccept = <TData = Common.ContractsServicePostMyContractsByContractIdAcceptMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contractId: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contractId: string;
}, TContext>({ mutationFn: ({ contractId }) => ContractsService.postMyContractsByContractIdAccept({ contractId }) as unknown as Promise<TData>, ...options });
export const useContractsServicePostMyContractsByContractIdDeliver = <TData = Common.ContractsServicePostMyContractsByContractIdDeliverMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contractId: string;
  requestBody?: { shipSymbol: string; tradeSymbol: string; units: number; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contractId: string;
  requestBody?: { shipSymbol: string; tradeSymbol: string; units: number; };
}, TContext>({ mutationFn: ({ contractId, requestBody }) => ContractsService.postMyContractsByContractIdDeliver({ contractId, requestBody }) as unknown as Promise<TData>, ...options });
export const useContractsServicePostMyContractsByContractIdFulfill = <TData = Common.ContractsServicePostMyContractsByContractIdFulfillMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contractId: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contractId: string;
}, TContext>({ mutationFn: ({ contractId }) => ContractsService.postMyContractsByContractIdFulfill({ contractId }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShips = <TData = Common.FleetServicePostMyShipsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { shipType: ShipType; waypointSymbol: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { shipType: ShipType; waypointSymbol: string; };
}, TContext>({ mutationFn: ({ requestBody }) => FleetService.postMyShips({ requestBody }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolOrbit = <TData = Common.FleetServicePostMyShipsByShipSymbolOrbitMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  shipSymbol: string;
}, TContext>({ mutationFn: ({ shipSymbol }) => FleetService.postMyShipsByShipSymbolOrbit({ shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolRefine = <TData = Common.FleetServicePostMyShipsByShipSymbolRefineMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { produce: "IRON" | "COPPER" | "ALUMINUM" | "SILVER" | "GOLD" | "PLATINUM" | "URANITE" | "MERITIUM" | "FUEL"; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { produce: "IRON" | "COPPER" | "ALUMINUM" | "SILVER" | "GOLD" | "PLATINUM" | "URANITE" | "MERITIUM" | "FUEL"; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolRefine({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolChart = <TData = Common.FleetServicePostMyShipsByShipSymbolChartMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  shipSymbol: string;
}, TContext>({ mutationFn: ({ shipSymbol }) => FleetService.postMyShipsByShipSymbolChart({ shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolDock = <TData = Common.FleetServicePostMyShipsByShipSymbolDockMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  shipSymbol: string;
}, TContext>({ mutationFn: ({ shipSymbol }) => FleetService.postMyShipsByShipSymbolDock({ shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolSurvey = <TData = Common.FleetServicePostMyShipsByShipSymbolSurveyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  shipSymbol: string;
}, TContext>({ mutationFn: ({ shipSymbol }) => FleetService.postMyShipsByShipSymbolSurvey({ shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolExtract = <TData = Common.FleetServicePostMyShipsByShipSymbolExtractMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { survey?: Survey; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { survey?: Survey; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolExtract({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolSiphon = <TData = Common.FleetServicePostMyShipsByShipSymbolSiphonMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  shipSymbol: string;
}, TContext>({ mutationFn: ({ shipSymbol }) => FleetService.postMyShipsByShipSymbolSiphon({ shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolExtractSurvey = <TData = Common.FleetServicePostMyShipsByShipSymbolExtractSurveyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: Survey;
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: Survey;
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolExtractSurvey({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolJettison = <TData = Common.FleetServicePostMyShipsByShipSymbolJettisonMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { symbol: TradeSymbol; units: number; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { symbol: TradeSymbol; units: number; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolJettison({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolJump = <TData = Common.FleetServicePostMyShipsByShipSymbolJumpMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { waypointSymbol: string; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { waypointSymbol: string; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolJump({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolNavigate = <TData = Common.FleetServicePostMyShipsByShipSymbolNavigateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { waypointSymbol: string; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { waypointSymbol: string; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolNavigate({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolWarp = <TData = Common.FleetServicePostMyShipsByShipSymbolWarpMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { waypointSymbol: string; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { waypointSymbol: string; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolWarp({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolSell = <TData = Common.FleetServicePostMyShipsByShipSymbolSellMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { symbol: TradeSymbol; units: number; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { symbol: TradeSymbol; units: number; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolSell({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolScanSystems = <TData = Common.FleetServicePostMyShipsByShipSymbolScanSystemsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  shipSymbol: string;
}, TContext>({ mutationFn: ({ shipSymbol }) => FleetService.postMyShipsByShipSymbolScanSystems({ shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolScanWaypoints = <TData = Common.FleetServicePostMyShipsByShipSymbolScanWaypointsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  shipSymbol: string;
}, TContext>({ mutationFn: ({ shipSymbol }) => FleetService.postMyShipsByShipSymbolScanWaypoints({ shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolScanShips = <TData = Common.FleetServicePostMyShipsByShipSymbolScanShipsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  shipSymbol: string;
}, TContext>({ mutationFn: ({ shipSymbol }) => FleetService.postMyShipsByShipSymbolScanShips({ shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolRefuel = <TData = Common.FleetServicePostMyShipsByShipSymbolRefuelMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { units?: number; fromCargo?: boolean; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { units?: number; fromCargo?: boolean; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolRefuel({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolPurchase = <TData = Common.FleetServicePostMyShipsByShipSymbolPurchaseMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { symbol: TradeSymbol; units: number; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { symbol: TradeSymbol; units: number; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolPurchase({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolTransfer = <TData = Common.FleetServicePostMyShipsByShipSymbolTransferMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { tradeSymbol: TradeSymbol; units: number; shipSymbol: string; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { tradeSymbol: TradeSymbol; units: number; shipSymbol: string; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolTransfer({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolNegotiateContract = <TData = Common.FleetServicePostMyShipsByShipSymbolNegotiateContractMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  shipSymbol: string;
}, TContext>({ mutationFn: ({ shipSymbol }) => FleetService.postMyShipsByShipSymbolNegotiateContract({ shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolMountsInstall = <TData = Common.FleetServicePostMyShipsByShipSymbolMountsInstallMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { symbol: string; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { symbol: string; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolMountsInstall({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolMountsRemove = <TData = Common.FleetServicePostMyShipsByShipSymbolMountsRemoveMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { symbol: string; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { symbol: string; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolMountsRemove({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolScrap = <TData = Common.FleetServicePostMyShipsByShipSymbolScrapMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  shipSymbol: string;
}, TContext>({ mutationFn: ({ shipSymbol }) => FleetService.postMyShipsByShipSymbolScrap({ shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolRepair = <TData = Common.FleetServicePostMyShipsByShipSymbolRepairMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  shipSymbol: string;
}, TContext>({ mutationFn: ({ shipSymbol }) => FleetService.postMyShipsByShipSymbolRepair({ shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolModulesInstall = <TData = Common.FleetServicePostMyShipsByShipSymbolModulesInstallMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { symbol: string; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { symbol: string; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolModulesInstall({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePostMyShipsByShipSymbolModulesRemove = <TData = Common.FleetServicePostMyShipsByShipSymbolModulesRemoveMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { symbol: string; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { symbol: string; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.postMyShipsByShipSymbolModulesRemove({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
export const useFleetServicePatchMyShipsByShipSymbolNav = <TData = Common.FleetServicePatchMyShipsByShipSymbolNavMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { flightMode?: ShipNavFlightMode; };
  shipSymbol: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { flightMode?: ShipNavFlightMode; };
  shipSymbol: string;
}, TContext>({ mutationFn: ({ requestBody, shipSymbol }) => FleetService.patchMyShipsByShipSymbolNav({ requestBody, shipSymbol }) as unknown as Promise<TData>, ...options });
