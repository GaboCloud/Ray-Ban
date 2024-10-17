import { CiTrash } from "react-icons/ci";
export function CartItem({ item }) {
  return (
    <div>
      <div className="group flex hover:bg-teal-100/20 cursor-pointer p-2 justify-center items-center">
        {/* Img */}
        <img className="h-14 group-hover:scale-105" src={item.src} alt="" />
        {/* title/description */}
        <div className="p-2">
          <div className="font-bold">{item.title}</div>
          <div className="text-sm text-slate-700">
            {item.description}
          </div>
        </div>
        {/* price */}
        <div className="font-bold">{item.price}$</div>
      </div>

      <div>
        <div>
          <div></div>
          <select name="" id=""></select>
        </div>
        <button>
          <CiTrash size={25} ClassName="text-blackd" />
        </button>
      </div>
    </div>
  );
}
