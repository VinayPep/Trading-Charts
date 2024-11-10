import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600 cursor-pointer">Trading Charts</span>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6 flex-shrink-0">
            <button
              onClick={() => navigate("/dashboard")}
              className="text-gray-600 hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap">
              Home
            </button>
            <button
              onClick={handleLogout}
              className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap">
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <button
            onClick={() => {
              navigate("/dashboard");
              setIsOpen(false);
            }}
            className="w-full text-left text-gray-600 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Home
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
