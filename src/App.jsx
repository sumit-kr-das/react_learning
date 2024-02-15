import "./app.css";
import NavBar from "./components/Nav/NavBar";
import Product from "./components/product/Product";

const App = () => {
  return (
    <div style={{ background: "gray", height: "100vh" }}>
      <NavBar />
      <div style={{ display: "flex" }}>
        <Product name="Iphone 12" price="200" />
        <Product name="Iphone 13" price="200" />
        <Product name="Iphone" price="200" />
        <Product name="Iphone" price="200" />
      </div>
    </div>
  );
};

export default App;
