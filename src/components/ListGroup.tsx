import { useState } from "react";
import Button from "./Button";

interface ListGroupProps {
  cities: string[];
  heading: string;
}

const ListGroup = ({ cities, heading }: ListGroupProps) => {
  const [selectedIndex, setSetselectedIndex] = useState(-1);

  return (
    <>
      <div className="container mt-4 ">
        <div className="card">
          <div className="card-header bg-primary text-white h5">{heading}</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <ul className="list-group">
                  {cities.map((city: string, index: number) => (
                    <li
                      style={{ cursor: "pointer" }}
                      key={index}
                      className={`list-group-item ${
                        selectedIndex === index ? "active" : ""
                      }`}
                      onClick={() => setSetselectedIndex(index)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted justify-content-end">
            <Button selectedIndex={selectedIndex} cities={cities}>
              Show
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListGroup;
