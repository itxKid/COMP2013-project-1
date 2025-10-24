// NavBar is supposed to display the top navigation bar of the app
// Shows the username, app title, and a cart icon that changes based on cart contents
/*
NOTE:
My navbar is being silly and i cant get it to the top exactly like you have it, 
so it is to the side cuz im too tired to do the css for it but it functions properly?
*/
export default function NavBar({ username = "Jaime" , cart }) {
  return (
    <div className="NavBar">
        <p >Hello, {username}</p>
        <h1 >Groceries</h1>
        {/* Cart icon changes depending on whether there are items in the cart */}
        <img src={cart.length > 0 ? "src/assets/cart-full.png": "src/assets/cart-empty.png"} alt="" className="NavCart"/>
    </div>
  );
}