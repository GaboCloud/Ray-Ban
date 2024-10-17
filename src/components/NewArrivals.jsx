import { Card } from "./Card";
export function NewArrivals({ items }) {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="uppercase text-4xl font-extrabold">
          <span className="text-red-600 underline decoration-wavy underline-offset-4">
            Nuevos
          </span>
          modelos
        </div>
      </div>
      <div className="mt-16 grid gap-y-16 gap-x-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-between">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
