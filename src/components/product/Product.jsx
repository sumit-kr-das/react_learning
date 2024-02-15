import "./product.css";

const Product = ({ name, price }) => {
  return (
    <div className="product" style={{ background: "white" }}>
      <h1>Product name: {name}</h1>
      <h2>price: {price}$</h2>
    </div>
  );
};

export default Product;
