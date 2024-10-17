import { useState } from "react";
import { DetalleLentes } from "./components/DetalleLentes";
import { Nav } from "./components/Nav";
import { LISTA_LENTES } from "./constant";
import { NewArrivals } from "./components/NewArrivals";
import { Sidebar } from "./components/Sidebar";
import { Cart } from "./components/Cart";

const FAKE_CART_ITEMS = LISTA_LENTES.map((lente) => {
  return {
    product: lente,
    cant: 1,
    color: "red",
  };
});
export function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      {/* Nav menu */}
      <div className="">
        <Nav onClickShopping={() => setIsOpen(true)} />
        <DetalleLentes />
        <NewArrivals items={LISTA_LENTES} />
        <Sidebar isOpen={isOpen} onClickClose={() => setIsOpen(false)}>
          <Cart cartItems={FAKE_CART_ITEMS} />
        </Sidebar>
      </div>
      {/* Hero */}
    </div>
  );
}
