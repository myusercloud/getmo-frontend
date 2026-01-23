export default function HomeNavbar() {
  return (
    <div className="navbar bg-white border-b px-4 md:px-10 sticky top-0 z-50">
      <div className="flex-1">
        <a className="text-2xl font-black text-blue-900">GETMO<span className="text-blue-500">+</span></a>
      </div>
      <div className="flex-none gap-6 hidden md:flex font-medium">
        <a href="#services" className="hover:text-blue-600">Services</a>
        <a className="hover:text-blue-600">About</a>
        <a href="tel:0723015506" className="btn btn-primary btn-sm">Call: 0723 015 506</a>
      </div>
    </div>
  );
}