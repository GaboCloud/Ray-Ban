import { useState } from "react";
import { DetalleLentes } from "./components/DetalleLentes";
import { Nav } from "./components/Nav";
import { LISTA_LENTES } from "./constant";
import { NewArrivals } from "./components/NewArrivals";
import { Sidebar } from "./components/Sidebar";
import { CartItem } from "./components/Cartitem";

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
          <h2 className="mb-10 text-2xl font-bold">Cart</h2>
          <CartItem item={LISTA_LENTES[0]} />
          <CartItem item={LISTA_LENTES[1]} />
          <CartItem item={LISTA_LENTES[2]} />
        </Sidebar>
      </div>
      {/* Hero */}
    </div>
  );
}
