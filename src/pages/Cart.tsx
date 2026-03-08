import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 150 : 0; // Flat ₹150 shipping
  const total = subtotal + shipping;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#4a4a4a] mb-8 text-center">Your Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="p-6 flex items-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-md"
                  referrerPolicy="no-referrer"
                />
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">₹{item.price} each</p>
                </div>
                <div className="flex items-center">
                  <select 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="mx-4 border-gray-300 rounded-md shadow-sm focus:ring-[#e67e22] focus:border-[#e67e22] sm:text-sm p-2 border"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <p className="text-lg font-bold text-gray-900 w-24 text-right">
                    ₹{item.price * item.quantity}
                  </p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700 p-2"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <div className="flex justify-between text-base text-gray-900 mb-2">
              <p>Subtotal</p>
              <p>₹{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-base text-gray-900 mb-4">
              <p>Shipping</p>
              <p>₹{shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-200 pt-4">
              <p>Total</p>
              <p>₹{total.toFixed(2)}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <Link
                to="/checkout"
                className="flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#e67e22] hover:bg-[#d35400]"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <p className="text-gray-500 text-lg mb-6">Your cart is empty.</p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#e67e22] hover:bg-[#d35400]"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}
