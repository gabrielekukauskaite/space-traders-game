import { useState } from "react";

interface SystemsSearchBarProps {
  initialSearchTerm: string;
  onSearchTermChange: (term: string) => void;
}

const SystemsSearchBarProps = ({
  initialSearchTerm,
  onSearchTermChange,
}: SystemsSearchBarProps) => {
  const [term, setTerm] = useState(initialSearchTerm);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearchTermChange(term);
      }}
    >
      <label htmlFor="systemSearch">Search systems:</label>
      <input
        id="systemSearch"
        type="search"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        minLength={7}
        maxLength={7}
      />
    </form>
  );
};

export default SystemsSearchBarProps;
