import "./app.css";
import NavBar from "./components/Nav/NavBar";
import Product from "./components/product/Product";

const productData = [
  {
    productName: "Iphone 12 pro",
    price: 120,
  },
  {
    productName: "Iphone 13 pro",
    price: 120,
  },
  {
    productName: "Iphone 14 pro",
    price: 120,
  },
  {
    productName: "Iphone 15 pro",
    price: 120,
  },
  {
    productName: "Iphone 16 pro",
    price: 120,
  },
];

const App = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {productData.map((item, index) => (
          <Product item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default App;
