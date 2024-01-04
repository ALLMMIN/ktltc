/* eslint-disable @typescript-eslint/no-explicit-any */
import "./AppSearch.css";

export const AppSearch = (props: { value: any; onValueChange: any }) => {
  const { value, onValueChange } = props;
  return (
    <div className="app-search">
      <input
        className="app-search-input"
        type="text"
        value={value}
        placeholder="ค้นหา"
        onChange={(event) => onValueChange(event.target.value)}
      />
    </div>
  );
};
