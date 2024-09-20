import { useState } from "react";

const SearchApp = () => {
  let count = 1;
  const [data, setData] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
    { id: 4, name: "Alice", age: 40 },
    { id: 5, name: "Tom", age: 45 },
    { id: 6, name: "Sara", age: 50 },
    { id: 7, name: "Mike", age: 55 },
    { id: 8, name: "Emily", age: 60 },
    { id: 9, name: "David", age: 65 },
    { id: 10, name: "Lisa", age: 70 },
  ]);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="container">
        <div className="display-4 text-center mt-5">User List</div>
        <div className="table-responsive mt-5" style={{ height: "50vh" }}>
          <table className="table table-bordered">
            <thead className="table-primary text-dark text-center sticky-top">
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="text-center">{count++}</td>
                  <td>{item.name}</td>
                  <td className="text-center">{item.age}</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-sm btn-dark mx-4">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      type="button"
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SearchApp;
