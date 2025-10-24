// QuantityCounter handles the + / - buttons for a product's quantity
// Works for both product list and cart depending on "mode"
export default function QuantityCounter({ 
  productQuantity,
  handleAddQuantity,
  handleRemoveQuantity,
  mode
  }) {
  return (
    <div className="ProductQuantityDiv">
      {/* Decrease quantity button */}
      <button onClick={() => handleRemoveQuantity(productQuantity.id, mode)}>-</button>
      {/* Display current quantity */}
      <p>{productQuantity.quantity}</p>
      {/* Increase quantity button */}
      <button onClick={() => handleAddQuantity(productQuantity.id, mode)}>+</button>
    </div>
  );
}