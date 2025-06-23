import { useState } from "react";
import type { WaypointTraitSymbol } from "../../../openapi/requests/types.gen";

interface WaypointTraitFiltersProps {
  onApply: (traits: WaypointTraitSymbol[]) => void;
}

const WaypointTraitFilters = ({ onApply }: WaypointTraitFiltersProps) => {
  const [selectedTraits, setSelectedTraits] = useState<WaypointTraitSymbol[]>(
    [],
  );

  const handleCheckboxChange = (
    trait: WaypointTraitSymbol,
    checked: boolean,
  ) => {
    if (checked) {
      setSelectedTraits([...selectedTraits, trait]);
    } else {
      setSelectedTraits(selectedTraits.filter((t) => t !== trait));
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset>
        <legend>Filter waypoints by type:</legend>
        <input
          id="shipyard"
          type="checkbox"
          checked={selectedTraits.includes("SHIPYARD")}
          onChange={(e) => handleCheckboxChange("SHIPYARD", e.target.checked)}
          value="SHIPYARD"
        />
        <label htmlFor="shipyard">Shipyard</label>
        <br />
        <input
          id="marketplace"
          type="checkbox"
          checked={selectedTraits.includes("MARKETPLACE")}
          onChange={(e) =>
            handleCheckboxChange("MARKETPLACE", e.target.checked)
          }
          value="MARKETPLACE"
        />
        <label htmlFor="marketplace">Marketplace</label>
        <button onClick={() => onApply(selectedTraits)}>Apply</button>
      </fieldset>
    </form>
  );
};

export default WaypointTraitFilters;
