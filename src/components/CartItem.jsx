import { CiTrash } from "react-icons/ci";
import { Select } from "./Select";
import { CANT, COLOR } from "../constant";
export function CartItem({ item : {product, cant, color}  }) {
  return (
    <div>
      <div className="group flex hover:bg-teal-100/40 cursor-pointer p-2 justify-center items-center">
        {/* Img */}
        <img className="h-14 group-hover:scale-105" src={product.src} alt="" />
        {/* title/description */}
        <div className="p-2">
          <div className="font-bold">{product.title}</div>
          <div className="text-sm text-slate-700">
            {product.description}
          </div>
        </div>
        {/* price */}
        <div className="font-bold">{product.price}$</div>
      </div>

      <div>
        <div>
          <div>
          
          </div>
          
        </div>
        <button>
          <CiTrash size={25} ClassName="text-blackd" />
        </button>
      </div>
    </div>
  );
}
