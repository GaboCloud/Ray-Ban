import { CartItem } from "./CartItem";
export function Cart({ cartItems }) {
  return (
    <>
      <h2 className="mb-10 text-2xl font-bold p-2">Tu carrito</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem.product} />
          </li>
        ))}
      </ul>
    </>
  );
}
