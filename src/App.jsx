import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPassengers } from "./features/passenger/passengerSlice";

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const items = useSelector((state) => state.passenger.items);
  const pagination = useSelector((state) => state.passenger.pagination);

  useEffect(() => {
    dispatch(fetchPassengers({ page }));
  }, [page]);

  return (
    <div>
      <ul>
        {items.map((item) => {
          return <li key={item._id}>{item.name} </li>;
        })}
      </ul>
      <button
        onClick={() => setPage(pagination.page - 1)}
        disabled={pagination.page === 0}
      >
        prev
      </button>
      <button
        onClick={() => setPage(pagination.page + 1)}
        disabled={pagination.page > pagination.pages}
      >
        next
      </button>
    </div>
  );
}

export default App;
