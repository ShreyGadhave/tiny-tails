import { useState } from 'react';
import { useCart, Product } from '../context/CartContext';

const PRODUCTS: Product[] = [
  { id: 1, name: 'Premium Dog Food Bag', price: 2000, category: 'Pet Foods', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Premium Cat Food Bag', price: 1800, category: 'Pet Foods', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Wet Pet Food Cans (Pack of 6)', price: 450, category: 'Pet Foods', image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Stainless Steel Feeding Bowl', price: 350, category: 'Pet Accessories', image: 'https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Adjustable Pet Collar', price: 250, category: 'Pet Accessories', image: 'https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Interactive Toy Set', price: 600, category: 'Pet Accessories', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 7, name: 'Cozy Pet Bed', price: 1500, category: 'Bedding', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 8, name: 'Pet Grooming Brush', price: 300, category: 'Hygiene', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 9, name: 'Cat Scratching Post', price: 1200, category: 'Pet Accessories', image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 10, name: 'Dog Chew Bone', price: 150, category: 'Pet Foods', image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
];

export default function Products() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({});

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#4a4a4a]">Our Products</h1>
        <p className="mt-2 text-lg text-gray-600">Explore our range of pet foods and accessories.</p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-[#4a4a4a] mb-6 border-b-2 border-gray-200 pb-2">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.filter(p => p.category === category).map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-xl font-bold text-[#e67e22] mt-2">₹{product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`mt-4 w-full py-2 px-4 rounded-md font-medium transition-colors ${
                      addedItems[product.id] 
                        ? 'bg-green-500 text-white' 
                        : 'bg-[#f39c12] hover:bg-[#e67e22] text-white'
                    }`}
                  >
                    {addedItems[product.id] ? 'Added!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
