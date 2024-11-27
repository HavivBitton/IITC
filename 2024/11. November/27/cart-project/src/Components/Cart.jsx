import { useSelector } from "react-redux";

import CartItem from "./cartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div>
      <h2>My Cart</h2>
      <p>Total Item: {cart.totalQuantityInCart}</p>
      <p>Total Price: {cart.totalPriceInCart}</p>
      <ul>
        {cart.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
