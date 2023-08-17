import { Button } from "./ui/button";

export default function MapContainer() {
  return (
    <nav className="  bg-opacity-50 py-4 px-6 flex items-center justify-between">
      {/* Left section */}
      <div className="flex items-center">
        <a href="#" className="text-black text-lg font-semibold">
          TND
        </a>
      </div>

      {/* Center section */}
      <div className="flex space-x-4">
        <Button className="text-white bg-slate-800 hover:bg-slate-700">
          Tree
        </Button>
        <Button className="text-white bg-slate-800 hover:bg-slate-700">
          Map
        </Button>
      </div>

      {/* Right section */}
      <div>
        <a href="#" className="text-black">
          About
        </a>
      </div>
    </nav>
  );
}
