import { useSearchParams } from "react-router-dom";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status") || "all";

  const title =
    filterValue === "all"
      ? "All bookings"
      : filterValue === "checked-out"
      ? "Checked out bookings"
      : filterValue === "checked-in"
      ? "Checked in bookings"
      : "Unconfirmed bookings";

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{title}</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
