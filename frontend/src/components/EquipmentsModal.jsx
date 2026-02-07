import { X, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function EquipmentModal({ item, onClose }) {
  if (!item) return null;

  const phone = "254723015506";
  const message = encodeURIComponent(`Hello, I'm interested in the ${item.name}`);

  // Images
  const images = item?.images || [];
  const primaryImage =
    images.find((img) => img.isPrimary)?.url ||
    images[0]?.url ||
    null;

  const [activeImage, setActiveImage] = useState(primaryImage);

  // Optional specs (JSON)
  const specs = item.specifications || {};

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex justify-center items-center p-2 sm:p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden animate-fadeIn relative">

        {/* BACK BUTTON (LEFT) + CLOSE BUTTON (RIGHT) */}
        <div className="flex justify-between items-center p-4 border-b border-slate-200 bg-white sticky top-0 z-10">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800"
          >
            <ArrowLeft size={22} />
            <span className="font-medium">Back</span>
          </button>

          <button onClick={onClose}>
            <X size={26} className="text-slate-500 hover:text-slate-700" />
          </button>
        </div>

        {/* IMAGE (FULLY RESPONSIVE) */}
        <div className="w-full h-[250px] sm:h-[300px] bg-slate-100 flex items-center justify-center overflow-hidden">
          {activeImage ? (
            <img
              src={activeImage}
              alt={item.name}
              className="object-contain w-full h-full"
            />
          ) : (
            <p className="text-slate-400">No image available</p>
          )}
        </div>

        {/* THUMBNAILS — MOBILE RESPONSIVE SCROLL */}
        {images.length > 1 && (
          <div className="flex gap-3 p-4 overflow-x-auto border-b border-slate-200 scrollbar-thin scrollbar-thumb-slate-300">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img.url)}
                className={`min-w-[70px] min-h-[70px] rounded-md overflow-hidden border ${
                  activeImage === img.url ? "border-blue-500" : "border-slate-200"
                }`}
              >
                <img
                  src={img.url}
                  alt={`thumb-${i}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        )}

        {/* DETAILS */}
        <div className="p-6 space-y-4">

          {/* Price */}
          <p className="text-blue-600 font-bold text-lg">
            KSH {Number(item.price).toLocaleString()}
          </p>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {item.description || "No description available."}
          </p>

          {/* Type & Status */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="font-semibold">Type:</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
              {item.type}
            </span>

            <span className="font-semibold">Status:</span>
            <span
              className={`px-2 py-1 rounded ${
                item.status === "IN_STOCK"
                  ? "bg-green-100 text-green-700"
                  : item.status === "LOW_STOCK"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.status.replace("_", " ")}
            </span>
          </div>

          {/* Category */}
          {item.category && (
            <p className="text-sm text-slate-500">
              <span className="font-semibold">Category:</span>{" "}
              {item.category.name}
            </p>
          )}

          {/* Specifications */}
          {Object.keys(specs).length > 0 && (
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Specifications</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                {Object.entries(specs).map(([key, value]) => (
                  <li key={key}>• <strong>{key}:</strong> {value}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-xs text-slate-400">
            Added on {new Date(item.created_at).toLocaleDateString()}
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col gap-3 pt-3">

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-green-600 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp Inquiry
            </a>

            {/* Phone */}
            <a
              href={`tel:${phone}`}
              className="w-full py-3 bg-slate-100 border border-slate-300 text-slate-800 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"
            >
              <Phone size={18} className="text-blue-600" />
              Call for Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
