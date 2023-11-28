import React, { useState } from "react";

function CreateProduct() {
  let [pId, updateID] = useState("");
  let [pName, updateName] = useState("");
  let [pPrice, updatePrice] = useState("");

  function ProductIDInputHandler(event) {
    updateID(event.target.value);
  }

  function ProductNameInputHandler(event) {
    updateName(event.target.value);
  }

  function ProductPriceInputHandler(event) {
    updatePrice(event.target.value);
  }

  const createProductEventHandler = async (event) => {
    event.preventDefault();
    let product = {
      pId,
      pName,
      pPrice,
    };
    console.log(product);
    try {
      const resp = await fetch(
        "http://localhost:5500/api/v1/products/addProduct",
        {
          method: "POST",
          body: JSON.stringify(product),
          headers: { "content-type": "application/json" },
        }
      );
      console.log(resp); // pasing the Http headers above
      if (resp.status === 201) {
        alert("Product added successfully");
      }
    } catch (error) {
      console.log(error);
    }

    // this data i want to pass to the backend API,
  };
  return (
    <div className="row">
      <div className="col">
        <form onSubmit={createProductEventHandler}>
          <div className="mb-3 col-md-6">
            <label htmlFor="productID" className="form-label">
              Product Id
            </label>
            <input
              type="number"
              className="form-control"
              id="productID"
              value={pId}
              onChange={ProductIDInputHandler}
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="productname" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productname"
              value={pName}
              onChange={ProductNameInputHandler}
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="productprice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              min="0" // this will set the minimum value to 0, number will not go less than 0
              step="1" // this will keep on increasing the count by 1
              className="form-control"
              id="productprice"
              value={pPrice}
              onChange={ProductPriceInputHandler}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Add product
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
