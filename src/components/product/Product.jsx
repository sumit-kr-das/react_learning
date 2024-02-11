import "./product.css";

const Product = ({item}) => {
  return (
    <div className="product">
      <h1>{item.productName}</h1>
      <h2>price: {item.price}$</h2>
    </div>
  );
};

export default Product;
