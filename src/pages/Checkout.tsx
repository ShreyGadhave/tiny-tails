import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart, addOrder } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 150 : 0;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const shippingInfo = {
      name: formData.get('name') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      zip: formData.get('zip') as string,
    };

    // Create order object
    const order = {
      id: Math.floor(Math.random() * 10000) + 1000,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      items: [...cartItems],
      total: total,
      shippingInfo
    };

    // Add order to context
    addOrder(order);

    // Clear cart and navigate
    clearCart();
    navigate('/orders');
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-[#4a4a4a] mb-4">Checkout</h1>
        <p className="text-gray-500 text-lg mb-6">Your cart is empty. Please add items before checking out.</p>
        <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#e67e22] hover:bg-[#d35400]">
          Go to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#4a4a4a] mb-8 text-center">Checkout</h1>
      
      <div className="bg-white shadow-md rounded-xl p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                  <div className="mt-1">
                    <input type="text" id="name" name="name" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#e67e22] focus:border-[#e67e22] sm:text-sm p-2 border" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <div className="mt-1">
                    <input type="text" id="address" name="address" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#e67e22] focus:border-[#e67e22] sm:text-sm p-2 border" />
                  </div>
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <div className="mt-1">
                    <input type="text" id="city" name="city" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#e67e22] focus:border-[#e67e22] sm:text-sm p-2 border" />
                  </div>
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                  <div className="mt-1">
                    <input type="text" id="zip" name="zip" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#e67e22] focus:border-[#e67e22] sm:text-sm p-2 border" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Payment Details</h2>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card number</label>
                  <div className="mt-1">
                    <input type="text" id="card-number" name="card-number" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#e67e22] focus:border-[#e67e22] sm:text-sm p-2 border" />
                  </div>
                </div>
                <div>
                  <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                  <div className="mt-1">
                    <input type="text" id="expiration-date" name="expiration-date" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#e67e22] focus:border-[#e67e22] sm:text-sm p-2 border" />
                  </div>
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                  <div className="mt-1">
                    <input type="text" id="cvc" name="cvc" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#e67e22] focus:border-[#e67e22] sm:text-sm p-2 border" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
            <div className="text-lg font-bold text-gray-900">
              Total to pay: ₹{total.toFixed(2)}
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="text-sm font-medium text-[#e67e22] hover:text-[#d35400]">
                Return to cart
              </Link>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#e67e22] hover:bg-[#d35400]"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
