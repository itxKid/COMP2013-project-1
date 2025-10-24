import {useState} from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";
//Primary Logic Compo
export default function GroceriesAppContainer({data}) {
    //To track quantity of each product in the product list
    const [productQuantity, setProductQuantity] = useState(data.map((prod) => {
        return {
            id: prod.id,
            ...prod,
            quantity: 0, // Initialize quantity to 0
        }
    }));
    //To track products added to the cart
    const [cart, setCart] = useState([]);
    //To increase the quantity of a product
    const handleAddQuantity = (productId, mode) => {
        if (mode === "Product") {
            //Update quantity in product list
            const newProductQuantity = productQuantity.map((prod) => {
                return prod.id === productId ? {...prod, quantity: prod.quantity + 1} : prod;
            });
            setProductQuantity(newProductQuantity);
            return;
        }
        else if (mode === "Cart") {
            //Update quantity in cart
            const newCart = cart.map((prod) => {
                return prod.id === productId ? {...prod, quantity: prod.quantity + 1} : prod;
            })
            setCart(newCart);
            return;
        }else 
        {
            alert("Invalid Mode Type: " + mode);
            return;
        }
    };
    //To decrease quantity of a product
    const handleRemoveQuantity = (productId, mode) => {
        if (mode === "Product") {
            //Decrease quantity in product list, but not below 0
            const newProductQuantity = productQuantity.map((prod) => {
                return (prod.id === productId && prod.quantity > 0) ? {...prod, quantity: prod.quantity - 1} : prod;
            })
            setProductQuantity(newProductQuantity);
            return;
        }
        else if (mode === "Cart") {
            let deleteItem = false;
            //Decrease quantity in cart, remove item if quantity goes to 0
            const newCart = cart.map((prod) => {
                if (prod.id === productId) {
                    if(prod.quantity > 1) {
                        return {...prod, quantity: prod.quantity - 1};
                    }
                    else 
                    {
                        deleteItem = true;
                    }
                }
                else 
                {
                    return prod;
                }
            });
            setCart(newCart);
            //Actually remove item if quantity reached 0
            if(deleteItem) {
                removeItemFromCart(cart.find((prod) => prod.id === productId))
            }

            return;
        }else {
            alert("Invalid Mode Type: " + mode);
            return;
        }
    }
    //Adding a product to the cart
    const handleAddToCart = (productToAdd) => {
        const currentProduct = data.find((prod) => prod.id === productToAdd.id);
        const productInCart = cart.find((prod) => prod.id === productToAdd.id);
        //Prevent adding if quantity is 0
        if (productToAdd.quantity === 0) {
            alert("Quantity is 0 please add");
            return;
        }
        if(!productInCart) {
            //Add new product to cart
            setCart((prevCart) => {
                return [
                    ...prevCart, 
                    {
                        ...currentProduct, 
                        quantity: productToAdd.quantity
                    }];
            })
        }
        else {
            //Update quantity if product already in cart
            const newCart = cart.map((prod) => {
                return prod.id === productToAdd.id ? {...prod, quantity: prod.quantity + productToAdd.quantity} : prod;
            });
            setCart(newCart);
            return;
        }
    }
    //Removing an item from the cart
    const removeItemFromCart = (product) => {
        const newCart = cart.filter((prod) => {
            return prod !== product;
        })
        setCart(newCart);
        return;
    }
    //Get rid of all items
    const emptyCart = () => {
        setCart([]);
    }
    //Get main container
    return (<div className="GroceriesApp-Container">
        <NavBar cart={cart} />
        <ProductsContainer 
            products={data} 
            productQuantity={productQuantity} 
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
            handleAddToCart={handleAddToCart}
        />
        <CartContainer 
            cart={cart} 
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
            removeItemFromCart={removeItemFromCart}
            emptyCart={emptyCart}
        />
    </div>);
}