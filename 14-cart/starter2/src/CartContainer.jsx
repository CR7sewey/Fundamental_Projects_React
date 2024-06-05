import { useReducer } from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./Context";
const CartContainer = () => {
  //const cartArray = [...cartItems];

  const { cartArray, clearCart, total } = useGlobalContext();

  const cart = Array.from(cartArray.cart.entries());

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  console.log(cart);
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((cartItem) => {
          const [itemId, item] = cartItem;
          return <CartItem key={itemId} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${total}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
