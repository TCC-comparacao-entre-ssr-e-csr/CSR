import { useFetch } from "../../hooks/useFetch";
import Loader from "../Loader";

function TestAPIRequests() {
  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3",
    "https://jsonplaceholder.typicode.com/users/4",
    "https://jsonplaceholder.typicode.com/users/5",
    "https://jsonplaceholder.typicode.com/users/6",
    "https://jsonplaceholder.typicode.com/users/7",
    "https://jsonplaceholder.typicode.com/users/8",
    "https://jsonplaceholder.typicode.com/users/9",
    "https://jsonplaceholder.typicode.com/users/10",
  ];

  const { data, isLoading, time } = useFetch(urls);

  return (
    <div className="col gap-3">
      <div className="row justify-content-center text-center">
        <h1>Request test</h1>
      </div>

      <h3>Request time: {time}ms</h3>
      {!isLoading ? (
        <>
          {data.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="card-body">
                <h5 className="card-title">Request data</h5>
                <p className="card-text">Username: {item.username}</p>
                <p className="card-text">Email: {item.email}</p>
                <p className="card-text">Phone: {item.phone}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default TestAPIRequests;
