import React, { useState, useEffect } from "react";

function ListProduct() {
  // we need to fetch the data from the server, and to use a variable , we need to use "state"
  let [list, setList] = useState([]);
  // now to fetch the data  we will make a function
  const getData = async () => {
    try {
      // api link of backend to fetch all product
      const resp = await fetch("http://localhost:5500/api/v1/products/getAll");
      const data = await resp.json();

      // now the data we received will be set in "list" variable which is am empty array
      // so updating the state with the data, for that we use the below code
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };
  // we want to call the function we just created, when the component loads
  // we use (useEffect) hook, which will run in the background to fetch the data
  useEffect(() => {
    getData();
  }, []); // "empty array" means the data will be called once, when the component loads
  // basically [], this empty array is a "dependency ", useEffect has many dependencies, one of them is []

  // ab jo data, update hua hai "list" variable mai, usko ab hum print karengey, niche
  return (
    <div className="row">
      <div className="col text-center">
        <h1>product List</h1>
        {/* print karne k liye we used JSX, niche, basically ek table bana k  */}
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => {
              return (
                <tr key={item.id}>
                  {/* unique banane k liye "key" use kiye hai  */}
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProduct;
