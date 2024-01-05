/* eslint-disable @typescript-eslint/no-explicit-any */

export const AppSearch = (props: { value: any; onValueChange: any }) => {
  const { value, onValueChange } = props;
  return (
    <div className="app-search p-4 ">
      <input
        className="app-search-input rounded-full"
        type="text"
        value={value}
        placeholder="ค้นหา"
        onChange={(event) => onValueChange(event.target.value)}
      />
    </div>
  );
};
