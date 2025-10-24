import "./App.css";
import products from "./data/products";
import GroceriesAppContainer from "./components/GroceriesAppContainer";

function App() {
  return <>{
    <div className="GroceriesApp-Container">
      <GroceriesAppContainer data={products}/>
    </div>
  }</>;
}

export default App;
