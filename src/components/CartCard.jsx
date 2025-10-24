import QuantityCounter from "./QuantityCounter";
// CartCard represents a single item inside the cart
// Displays product info, quantity controls, total price, and remove button
export default function CartCard ({
    productName, 
    image, 
    brand, 
    price, 
    cartQuantity,
    handleAddQuantity, 
    handleRemoveQuantity,
    removeItemFromCart
    }) {
    return <div className="CartCard">
        <div className="CartCardInfo">
            <h2>{productName}</h2>
            <img src={image} alt="" />
            <p>{brand}</p>
            <QuantityCounter 
                productQuantity={cartQuantity}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
                mode={"Cart"}
            />
        </div>
        <div>
             {/* total price calculation*/}
            <p>Total Price: ${(cartQuantity.quantity * price.replace("$", "")).toFixed(2)}</p>
            <br />
            {/* Remove button removes this item completely from cart */}
            <button className="RemoveButton" onClick={() => removeItemFromCart(cartQuantity)}>Remove</button>
        </div>
    </div>
}