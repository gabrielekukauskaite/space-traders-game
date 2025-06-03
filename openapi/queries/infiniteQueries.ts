// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { InfiniteData, UseInfiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import { AgentsService, ContractsService, FactionsService, FleetService, SystemsService } from "../requests/services.gen";
import { WaypointTraitSymbol, WaypointType } from "../requests/types.gen";
import * as Common from "./common";
export const useSystemsServiceGetSystemsInfinite = <TData = InfiniteData<Common.SystemsServiceGetSystemsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit }: {
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseSystemsServiceGetSystemsKeyFn({ limit }, queryKey), queryFn: ({ pageParam }) => SystemsService.getSystems({ limit, page: pageParam as number }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: string;
  }).nextPage, ...options
});
export const useSystemsServiceGetSystemsBySystemSymbolWaypointsInfinite = <TData = InfiniteData<Common.SystemsServiceGetSystemsBySystemSymbolWaypointsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, systemSymbol, traits, type }: {
  limit?: number;
  systemSymbol: string;
  traits?: WaypointTraitSymbol | WaypointTraitSymbol[];
  type?: WaypointType;
}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseSystemsServiceGetSystemsBySystemSymbolWaypointsKeyFn({ limit, systemSymbol, traits, type }, queryKey), queryFn: ({ pageParam }) => SystemsService.getSystemsBySystemSymbolWaypoints({ limit, page: pageParam as number, systemSymbol, traits, type }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: string;
  }).nextPage, ...options
});
export const useFactionsServiceGetFactionsInfinite = <TData = InfiniteData<Common.FactionsServiceGetFactionsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit }: {
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseFactionsServiceGetFactionsKeyFn({ limit }, queryKey), queryFn: ({ pageParam }) => FactionsService.getFactions({ limit, page: pageParam as number }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: string;
  }).nextPage, ...options
});
export const useAgentsServiceGetAgentsInfinite = <TData = InfiniteData<Common.AgentsServiceGetAgentsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit }: {
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAgentsServiceGetAgentsKeyFn({ limit }, queryKey), queryFn: ({ pageParam }) => AgentsService.getAgents({ limit, page: pageParam as number }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: string;
  }).nextPage, ...options
});
export const useContractsServiceGetMyContractsInfinite = <TData = InfiniteData<Common.ContractsServiceGetMyContractsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit }: {
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseContractsServiceGetMyContractsKeyFn({ limit }, queryKey), queryFn: ({ pageParam }) => ContractsService.getMyContracts({ limit, page: pageParam as number }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: string;
  }).nextPage, ...options
});
export const useFleetServiceGetMyShipsInfinite = <TData = InfiniteData<Common.FleetServiceGetMyShipsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit }: {
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseFleetServiceGetMyShipsKeyFn({ limit }, queryKey), queryFn: ({ pageParam }) => FleetService.getMyShips({ limit, page: pageParam as number }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: string;
  }).nextPage, ...options
});
