import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "./components/Table";
import { fetchPassengers } from "./features/passenger/passengerSlice";

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const items = useSelector((state) => state.passenger.items);
  const pagination = useSelector((state) => state.passenger.pagination);

  useEffect(() => {
    dispatch(fetchPassengers({ page }));
  }, [page]);

  const headers = useMemo(() => {
    return [
      { text: "Name", value: "name" },
      { text: "Trips count", value: "trips" },
      { text: "Airline Name", value: "airline" },
    ];
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Table
        headers={headers}
        items={items}
        renderItem={({ header, item }) => {
          if (header === "airline") {
            return item.airline.name;
          }
          return item[header];
        }}
      ></Table>
    </div>
  );
}

export default App;
