
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">StyleSense</span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/recommendation" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600">
              Outfit Recommendation
            </Link>
            <Link to="/try" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600">
              Try Page
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-2">
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Create Account</Button>
            </Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/recommendation" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Outfit Recommendation
            </Link>
            <Link 
              to="/try" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Try Page
            </Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Create Account</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
