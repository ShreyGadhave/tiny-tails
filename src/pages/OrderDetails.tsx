import { Link } from 'react-router-dom';
import { useCart, CartItem, Order } from '../context/CartContext';

export default function OrderDetails() {
  const { orders } = useCart();

  if (!orders || orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-[#4a4a4a] mb-4">No Recent Orders</h1>
        <p className="text-gray-500 text-lg mb-6">We couldn't find any recent order details.</p>
        <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#e67e22] hover:bg-[#d35400]">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#4a4a4a]">Your Orders</h1>
        <p className="mt-2 text-lg text-gray-600">Thank you for your purchases!</p>
      </div>

      <div className="space-y-8">
        {orders.map((order: Order) => (
          <div key={order.id} className="bg-white shadow-md rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gray-200 flex flex-col md:flex-row justify-between gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Order Number: <span className="font-medium text-gray-900">#{order.id}</span></p>
                <p className="text-sm text-gray-500 mb-1">Order Date: <span className="font-medium text-gray-900">{order.date}</span></p>
                <p className="text-sm text-gray-500">Total Amount: <span className="font-medium text-gray-900">₹{order.total.toFixed(2)}</span></p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Shipping Information</h3>
                <p className="text-sm text-gray-600">{order.shippingInfo.name}</p>
                <p className="text-sm text-gray-600">{order.shippingInfo.address}</p>
                <p className="text-sm text-gray-600">{order.shippingInfo.city}, {order.shippingInfo.zip}</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {order.items.map((item: CartItem) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-md object-cover" src={item.image} alt={item.name} referrerPolicy="no-referrer" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹{item.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        ₹{item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-gray-50 flex justify-end items-center border-t border-gray-200">
              <p className="text-lg font-bold text-gray-900">Order Total: ₹{order.total.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#e67e22] hover:bg-[#d35400]"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
