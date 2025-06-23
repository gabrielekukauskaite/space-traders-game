import { useRef, useState } from "react";
import {
  useFleetServiceGetMyShips,
  useSystemsServiceGetSystemsBySystemSymbol,
  useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbol,
} from "../../../openapi/queries";
import PlanetIcon from "../Icons/PlanetIcon";
import type { SystemWaypoint } from "../../../openapi/requests/types.gen";
import SystemSearchBar from "./SystemsSearchBar";
import WaypointTraitFilters from "./WaypointTraitFilters";

const Navigation = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const [selectedWaypoint, setSelectedWaypoint] =
    useState<SystemWaypoint | null>(null);

  const {
    data: ships,
    isLoading: isShipsLoading,
    isError: isShipsError,
  } = useFleetServiceGetMyShips();

  const firstShipSystemSymbol = ships?.data?.[0]?.nav?.systemSymbol;

  const {
    data: system,
    isLoading: isSystemLoading,
    isError: isSystemError,
  } = useSystemsServiceGetSystemsBySystemSymbol(
    {
      systemSymbol: firstShipSystemSymbol!,
    },
    [firstShipSystemSymbol],
    { enabled: !!firstShipSystemSymbol },
  );

  const { data: waypoint } =
    useSystemsServiceGetSystemsBySystemSymbolWaypointsByWaypointSymbol(
      {
        systemSymbol: firstShipSystemSymbol!,
        waypointSymbol: selectedWaypoint?.symbol!,
      },
      [selectedWaypoint?.symbol],
      { enabled: !!selectedWaypoint },
    );

  const systemWaypoints = system?.data.waypoints;

  const iconWidth = 24;
  const iconHeight = 24;

  const width = 500;
  const height = 500;

  // Find min and max values for both axes
  const minX = Math.min(...(systemWaypoints?.map((point) => point.x) || []));
  const maxX = Math.max(...(systemWaypoints?.map((point) => point.x) || []));
  const minY = Math.min(...(systemWaypoints?.map((point) => point.y) || []));
  const maxY = Math.max(...(systemWaypoints?.map((point) => point.y) || []));

  // Calculate ranges including negative values
  const xRange = Math.abs(maxX - minX);
  const yRange = Math.abs(maxY - minY);

  // Calculate scales considering the full range
  const xScale = width / xRange;
  const yScale = height / yRange;

  // Caluclate data center points
  const dataCenterX = minX + xRange / 2;
  const dataCenterY = minY + yRange / 2;

  // Adjust center to account for the icon width/height
  const centerX = width / 2 - dataCenterX * xScale + iconWidth * 1.5;
  const centerY = height / 2 + dataCenterY * yScale + iconHeight * 1.5;

  if (isShipsLoading || isSystemLoading) {
    return <div className="text-white text-2xl">Loading...</div>;
  }

  if (isShipsError || isSystemError) {
    return <div className="text-red-500 text-2xl">Error loading data.</div>;
  }

  if (system?.data) {
    return (
      <main className="flex flex-col gap-y-4 ">
        <div>
          <span>Displaying system map of {firstShipSystemSymbol}</span>
          <span>System name is {system?.data.name}</span>
          <span>
            System factions
            {system?.data.factions
              .map((faction) => faction.symbol)
              .join(", ") || "None"}
          </span>
        </div>

        <div className="flex gap-x-8">
          <div className="flex flex-col gap-y-2">
            <SystemSearchBar
              initialSearchTerm={firstShipSystemSymbol || ""}
              onSearchTermChange={() => {}}
            />
            <WaypointTraitFilters
              onApply={(traits) => {
                console.log(traits);
              }}
            />
          </div>

          <svg
            ref={svgRef}
            width={width}
            height={height}
            viewBox="0 0 600 600"
            style={{ minWidth: width, minHeight: height }}
          >
            <defs>
              <symbol id="planet" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" fill="transparent" />
                <PlanetIcon />
              </symbol>
            </defs>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <circle
                key={n}
                cx={centerX}
                cy={centerY}
                r={n * 45}
                fill="none"
                stroke="white"
                strokeOpacity={0.1}
                strokeWidth={2}
              />
            ))}
            {systemWaypoints?.map((point, index) => (
              <use
                key={index}
                href="#planet"
                x={centerX + point.x * xScale}
                y={centerY - point.y * yScale}
                width={iconWidth}
                height={iconHeight}
                style={{ cursor: "pointer" }}
                className={
                  point.symbol === selectedWaypoint?.symbol
                    ? "fill-secondary"
                    : "fill-white"
                }
                onMouseUp={() => setSelectedWaypoint(point)}
              />
            ))}
          </svg>
          <div>
            {!selectedWaypoint && <span>Select a waypoint to see details</span>}
            {selectedWaypoint?.type} {selectedWaypoint?.symbol}
            {waypoint?.data.traits.map((trait) => trait.name).join(", ")}
          </div>
        </div>
      </main>
    );
  }
};

export default Navigation;
