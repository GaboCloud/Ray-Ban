export function CartItem({ item }) {
  return (
    <div className="group flex hover:bg-teal-100/40 cursor-pointer backdrop-blur-md space-y-8 p-2">
      {/* Img */}
      <img className="h-14 mt-12 group-hover:scale-105" src={item.src} alt="" />
      {/* title/description */}
      <div className="p-2">
        <div className="font-bold">{item.title}</div>
        <div className="text-sm text-slate-700 text-wrap">
          {item.description}
        </div>
      </div>
      {/* price */}
      <div className="font-bold mt-8">{item.price}$</div>
    </div>
  );
}
