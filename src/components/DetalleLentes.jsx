import heroimg from "../assets/n1-min.png";
import { CANT, COLOR } from "../constant";
import { Select } from "./Select";

export function DetalleLentes() {
  return (
    <div className="flex flex-col md:flex-row-reverse space-y-6">
      {/* Imagen */}
      <div className="flex-1 lg:-mt-48 lg:ml-6">
        <div className="bg-gradient-to-br from-red-500 via-teal-400 to-red-950 h-full p-10 xl:p-20 flex-center">
          <img src={heroimg} alt="" className="animate-float " />
        </div>
      </div>
      {/* Detalle */}
      <div className="flex-1 space-y-4 xl:pr-8">
        <div className="font-black text-7xl xl:text-8xl">
          <span className="text-red-600">WAYFARER</span> CLASSIC
        </div>
        <div className="font-medium md:text-xl">
          Ray-Ban RB0880S. Atemporales y auténticas. Ray-Ban, acerca el{" "}
          <b>estilo americano clásico</b> a todos los públicos.
        </div>
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-4xl">100 $</div>
          {/* Selectores */}
          <Select title={"CANT"} options={CANT} />
          <Select title={"COLOR"} options={COLOR} />
        </div>

        {/* Botones y detalles */}
        <div className="space-x-10">
          <button className="btn-press cursor-pointer h-12 w-44 bg-black text-white hover:bg-red-600 rounded-t-lg rounded-b-3xl">
            Añadir a bolsa
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4 decoration-red-600"
          >
            Ver detalles
          </a>
        </div>
      </div>
    </div>
  );
}
