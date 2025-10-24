import QuantityCounter from "./QuantityCounter";
// Product represents a single product in the product list
// Displays product info, quantity controls, price, and add-to-cart button
export default function Product({ 
  image, 
  productName,
  brand, 
  price, 
  productQuantity,
  handleAddQuantity,
  handleRemoveQuantity,
  handleAddToCart
  }) {
  return (
    <div className="ProductCard">
      <h2>{productName}</h2>
      <img src={image} alt="" />
      <p>{brand}</p>
      <QuantityCounter 
        productQuantity={productQuantity}
        handleAddQuantity={handleAddQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
        mode={"Product"}
      />
      <p>{price}</p>
      {/* Add to Cart button */}
      <button onClick={() => handleAddToCart(productQuantity)}>Add to Cart</button>
    </div>
  );
}