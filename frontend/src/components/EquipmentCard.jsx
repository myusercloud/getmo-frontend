import { ShoppingCart } from "lucide-react";

export default function EquipmentCard({ name, description, price, stock, image_url }) {
  return (
    <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">

      {/* IMAGE */}
      <div className="aspect-square bg-slate-100 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
        {image_url ? (
          <img
            src={image_url}
            alt={name}
            className="object-cover w-full h-full"
          />
        ) : (
          <ShoppingCart size={48} className="text-slate-300" />
        )}
      </div>

      {/* NAME */}
      <h4 className="text-lg font-bold text-slate-900 mb-1">{name}</h4>

      {/* PRICE */}
      <p className="text-blue-600 font-bold text-sm mb-3">
        KSH {Number(price).toLocaleString()}
      </p>

      {/* DESCRIPTION */}
      <p className="text-slate-500 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* STOCK */}
      <p className="text-sm text-slate-400 mb-4">
        Stock: {stock}
      </p>

      {/* WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/254797752627?text=Hello, I'm interested in the ${encodeURIComponent(
          name
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3 text-center bg-green-600 text-white rounded-lg text-sm font-bold hover:bg-green-700 transition-all"
      >
        WhatsApp Inquiry
      </a>
    </div>
  );
}
