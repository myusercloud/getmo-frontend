import { ShoppingCart } from "lucide-react";

export default function EquipmentCard({ name, description, price, stock, image_url }) {
  return (
    <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
      
      <div className="aspect-square bg-slate-100 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
        {image_url ? (
          <img src={image_url} alt={name} className="object-cover w-full h-full rounded-xl" />
        ) : (
          <ShoppingCart size={48} className="text-slate-300" />
        )}
      </div>

      <h4 className="text-lg font-bold text-slate-900 mb-1">{name}</h4>

      <p className="text-blue-600 font-bold text-sm mb-3">
        KSH {price?.toLocaleString()}
      </p>

      <p className="text-slate-500 text-sm leading-relaxed mb-4">
        {description}
      </p>

      <p className="text-sm text-slate-400 mb-3">
        Stock: {stock}
      </p>

      <button className="w-full py-2 bg-slate-50 text-slate-900 rounded-lg text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
        Inquire Availability
      </button>
    </div>
  );
}
