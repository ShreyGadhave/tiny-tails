import { Outlet, Link, useNavigate } from 'react-router-dom';
import { PawPrint, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fdfbf7]">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <PawPrint className="h-8 w-8 text-[#8b5a2b]" />
                  <span className="font-serif text-4xl font-bold text-[#8b5a2b]">Tiny Tails</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-[#8b5a2b]">
                    <User className="h-5 w-5" />
                    <span className="font-medium">{user?.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-500 hover:text-[#e67e22] transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/signin"
                    className="text-[#8b5a2b] hover:text-[#e67e22] font-medium transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-[#e67e22] hover:bg-[#d35400] text-white px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <nav className="bg-[#a06b3f] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-8 py-3 text-sm font-medium">
              <Link to="/" className="hover:text-[#f3e5d8]">Home</Link>
              <Link to="/about" className="hover:text-[#f3e5d8]">About Us</Link>
              {isAuthenticated && (
                <>
                  <Link to="/products" className="hover:text-[#f3e5d8]">Products</Link>
                  <Link to="/cart" className="hover:text-[#f3e5d8]">Cart</Link>
                  <Link to="/checkout" className="hover:text-[#f3e5d8]">Checkout</Link>
                  <Link to="/orders" className="hover:text-[#f3e5d8]">Orders</Link>
                  <Link to="/contact" className="hover:text-[#f3e5d8]">Contact Us</Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-[#a06b3f] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <PawPrint className="h-6 w-6" />
            <span className="font-serif text-xl font-bold">Tiny Tails</span>
          </div>
          <p className="text-sm text-[#f3e5d8]">Pet Shop & Care.</p>
          <p className="text-xs mt-4 text-[#f3e5d8] opacity-80">&copy; {new Date().getFullYear()} Tiny Tails. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
