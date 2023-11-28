import CreateProduct from "./component/addproduct";
import ListProduct from "./component/listProduct";
function App() {
  return (
    <div className="container">
      <ListProduct />
      <CreateProduct />
    </div>
  );
}

export default App;
