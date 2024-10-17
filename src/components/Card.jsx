export function Card({ item }) {
  return (
    <div
      className={`${item.className} transform relative max-w-lg cursor-pointer uppercase transition hover:scale-105 rounded-lg`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold text-white">{item.title}</div>
        <div className="mt-10 underline underline-offset-4 font-semibold">
          Shop now +
        </div>
      </div>
      <img className="absolute top-20 left-[40%] w-56 scale-150 md:scale-110 -rotate-12" src={item.src} alt="" />
    </div>
  );
}
