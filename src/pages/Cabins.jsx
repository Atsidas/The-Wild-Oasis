import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import { useSearchParams } from "react-router-dom";

function Cabins() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("discount") || "all";
  const title =
    filterValue === "all"
      ? "All cabins"
      : filterValue === "no-discount"
      ? "Cabins without discount"
      : "Cabins with discount";

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{title}</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
