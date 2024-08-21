import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={["last-7-days", "last-30-days", "last-90-days"]}
    />
  );
}

export default DashboardFilter;
