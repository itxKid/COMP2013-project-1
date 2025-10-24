import Product from "./ProductCard"
// ProductsContainer a list of products for the store
// Passes down product info and handlers to each Product component
export default function ProductsContainer({
    products, 
    productQuantity,
    handleAddQuantity,
    handleRemoveQuantity,
    handleAddToCart
    }) {
    return <div className="ProductsContainer">
        {
            // Map over each product and render a Product component
            products.map((product) => (
                <Product 
                    key={product.id} 
                    {...product} 
                    productQuantity={productQuantity.find((prod) => prod.id === product.id)}
                    handleAddQuantity={handleAddQuantity}
                    handleRemoveQuantity={handleRemoveQuantity}
                    handleAddToCart={handleAddToCart}
                />
            ))
        }
    </div>
}