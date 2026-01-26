import { ShoppingCart } from "lucide-react";

export default function EquipmentCard({ item, onClick }) {
  // ✅ Choose the primary image or fallback to first image
  const primaryImage =
    item?.images?.find((img) => img.isPrimary)?.url ||
    item?.images?.[0]?.url ||
    null;

  return (
    <button
      onClick={onClick}
      className="group bg-white p-6 rounded-2xl border border-slate-200 
                 hover:border-blue-300 hover:shadow-xl transition-all duration-300 
                 text-left w-full"
    >
      {/* IMAGE WRAPPER */}
      <div className="aspect-square bg-slate-100 rounded-xl mb-6 overflow-hidden relative">
        <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out">
          {primaryImage ? (
            <img
              src={primaryImage}
              alt={item.name}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <ShoppingCart size={48} className="text-slate-300" />
            </div>
          )}
        </div>

        {/* STOCK BADGE */}
        <div
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full shadow ${
            item.stock > 5
              ? "bg-green-100 text-green-700"
              : item.stock > 0
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.stock > 5 ? "In Stock" : item.stock > 0 ? "Low Stock" : "Out of Stock"}
        </div>
      </div>

      {/* NAME */}
      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h4>

      {/* PRICE */}
      <p className="text-blue-600 font-black text-sm mb-3">
        KSH {Number(item.price).toLocaleString()}
      </p>

      {/* DESCRIPTION */}
      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
        {item.description}
      </p>
    </button>
  );
}
