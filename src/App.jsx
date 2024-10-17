import { useState } from "react";
import { DetalleLentes } from "./components/DetalleLentes";
import { Nav } from "./components/Nav";
import { LISTA_LENTES } from "./constant";
import { NewArrivals } from "./components/NewArrivals";
import { Sidebar } from "./components/Sidebar";

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
          <h1 className="text-xl p-8 mt-10 font-bold text-left text-wrap uppercase">
            Deja de <span className="text-red-600">gastar</span> tanta plata, ¡¡ahorra!!
          </h1>
        </Sidebar>
      </div>
      {/* Hero */}
    </div>
  );
}
