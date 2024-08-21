import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";

import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { useEffect } from "react";

function BookingTable() {
  const { isLoading, bookings, count } = useBookings();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  // const pageCount = count ? Math.ceil(count / PAGE_SIZE) : 1;

  useEffect(() => {
    if (isNaN(currentPage) || currentPage === undefined) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
      return;
    }
  }, [currentPage, searchParams, setSearchParams]);

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resource={"bookings"} />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} count={count} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
