import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const Data = [
    {
      name: "SmartPhone",
      price: 30,
      id: 0
    },
    {
      name: "Watch",
      price: 20,
      id: 1
    },
    {
      name: "Shirt",
      price: 50,
      id: 2
    },
    {
      name: "Pants",
      price: 100,
      id: 3
    }
  ];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>
                <Link to={`/ProductList/${e.id}`}>More..</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductList;
