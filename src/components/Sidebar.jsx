export function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`overflow-y-auto fixed right-0 top-0 z-50 h-full w-full transform bg-white/40 backdrop-blur-2xl p-5 shadow-2xl shadow-black/50 transition duration-300 md:w-[50%] lg:w-[35%] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClickClose}
          className="text-2xl absolute right-4 top-4 font-extrabold p-2 ring-2 ring-red-600 rounded-full"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full" />
      )}
    </div>
  );
}
