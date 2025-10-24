import CartCard from "./CartCard";
// CartContainer represents the shopping cart view
// Displays all items in the cart, total price, and cart management buttons
export default function CartContainer({
    cart,
    handleAddQuantity,
    handleRemoveQuantity,
    removeItemFromCart,
    emptyCart,
    }) {
    let sumOfPrice = 0; // Will hold total price of all items in the cart
    return <div className="CartContainer">
        {/* Shows total number of items in the cart */}
        <p>Cart Items: {cart.length}</p>
        {/*CartCard for each item if cart is not empty */}
        {   
            cart.length > 0 ? cart.map((item) => (
                <CartCard 
                    key={item.id} 
                    {...item} 
                    cartQuantity={item}
                    handleAddQuantity={handleAddQuantity}
                    handleRemoveQuantity={handleRemoveQuantity}
                    removeItemFromCart={removeItemFromCart}
                />)) : <p>No items in cart</p> 
        }
        {/* Button to empty the entire cart */}
        <button className="RemoveButton" onClick={() => emptyCart()}>Empty Cart</button>
        {/* Calculate total price of all items */}
        {
            cart.forEach(item => { sumOfPrice += (item.quantity * parseFloat(item.price.replace("$", "")))})
        }
        {/* Checkout button showing total price */}
        <button id="BuyButton">Checkout: ${sumOfPrice.toFixed(2)}</button>
    </div>
}