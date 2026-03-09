import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart, Product } from '../context/CartContext';

const PRODUCTS: Product[] = [
  // ── Pet Foods ──
  { id: 1, name: 'Premium Dog Food Bag', price: 2000, category: 'Pet Foods', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Premium Cat Food Bag', price: 1800, category: 'Pet Foods', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Wet Pet Food Cans (Pack of 6)', price: 450, category: 'Pet Foods', image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Grain-Free Puppy Food', price: 2200, category: 'Pet Foods', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Organic Kitten Food', price: 1600, category: 'Pet Foods', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Senior Dog Diet Mix', price: 1900, category: 'Pet Foods', image: 'https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 7, name: 'Fish-Based Cat Food', price: 1400, category: 'Pet Foods', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },

  // ── Bones & Treats ──
  { id: 8, name: 'Dog Chew Bone (Large)', price: 250, category: 'Bones & Treats', image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 9, name: 'Rawhide Bone Pack (5 pcs)', price: 400, category: 'Bones & Treats', image: 'https://images.unsplash.com/photo-1587559045816-8b0a54d1ce46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 10, name: 'Dental Chew Sticks (Pack of 10)', price: 350, category: 'Bones & Treats', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 11, name: 'Chicken Jerky Treats', price: 300, category: 'Bones & Treats', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 12, name: 'Catnip Treat Bites', price: 180, category: 'Bones & Treats', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 13, name: 'Puppy Training Treats', price: 220, category: 'Bones & Treats', image: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },

  // ── Toys ──
  { id: 14, name: 'Interactive Toy Set', price: 600, category: 'Toys', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 15, name: 'Rubber Fetch Ball (3 Pack)', price: 280, category: 'Toys', image: 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 16, name: 'Cat Feather Wand Toy', price: 200, category: 'Toys', image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 17, name: 'Squeaky Plush Dog Toy', price: 350, category: 'Toys', image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 18, name: 'Puzzle Treat Dispenser', price: 750, category: 'Toys', image: 'https://images.unsplash.com/photo-1594667447220-b8cfb0e98584?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },

  // ── Pet Accessories ──
  { id: 19, name: 'Stainless Steel Feeding Bowl', price: 350, category: 'Pet Accessories', image: 'https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 20, name: 'Adjustable Pet Collar', price: 250, category: 'Pet Accessories', image: 'https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 21, name: 'Retractable Dog Leash', price: 550, category: 'Pet Accessories', image: 'https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 22, name: 'Cat Scratching Post', price: 1200, category: 'Pet Accessories', image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 23, name: 'Pet ID Tag (Engraved)', price: 150, category: 'Pet Accessories', image: 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },

  // ── Bedding ──
  { id: 24, name: 'Cozy Pet Bed (Medium)', price: 1500, category: 'Bedding', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 25, name: 'Luxury Orthopedic Dog Bed', price: 3500, category: 'Bedding', image: 'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 26, name: 'Cat Window Hammock', price: 800, category: 'Bedding', image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },

  // ── Hygiene ──
  { id: 27, name: 'Pet Grooming Brush', price: 300, category: 'Hygiene', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 28, name: 'Pet Shampoo (Organic, 500ml)', price: 450, category: 'Hygiene', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 29, name: 'Nail Clipper & File Set', price: 280, category: 'Hygiene', image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 30, name: 'Ear Cleaning Solution', price: 320, category: 'Hygiene', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },

  // ── Health & Wellness ──
  { id: 31, name: 'Multivitamin Supplement (Dogs)', price: 650, category: 'Health & Wellness', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 32, name: 'Joint Care Chews (30 pcs)', price: 900, category: 'Health & Wellness', image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 33, name: 'Flea & Tick Collar', price: 500, category: 'Health & Wellness', image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 34, name: 'Pet First Aid Kit', price: 1100, category: 'Health & Wellness', image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },

  // ── Travel ──
  { id: 35, name: 'Pet Travel Carrier', price: 2500, category: 'Travel', image: 'https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 36, name: 'Collapsible Water Bowl', price: 200, category: 'Travel', image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 37, name: 'Dog Car Seat Cover', price: 1800, category: 'Travel', image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 38, name: 'Pet Seatbelt Harness', price: 600, category: 'Travel', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
];

export default function Products() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  const filteredProducts = activeCategory === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);
  const displayCategories = activeCategory === 'All'
    ? Array.from(new Set(filteredProducts.map(p => p.category)))
    : [activeCategory];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#4a4a4a]">Our Products</h1>
        <p className="mt-2 text-lg text-gray-600">Explore our wide range of pet foods, treats, toys and accessories.</p>
      </div>

      {/* Category Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeCategory === category
                ? 'bg-[#f39c12] text-white border-[#f39c12] shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#f39c12] hover:text-[#e67e22]'
              }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {displayCategories.map(category => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-[#4a4a4a] mb-6 border-b-2 border-gray-200 pb-2">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.filter(p => p.category === category).map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 overflow-hidden bg-gray-100">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                      <p className="text-xl font-bold text-[#e67e22] mt-2">₹{product.price.toLocaleString('en-IN')}</p>
                      <motion.button
                        onClick={() => handleAddToCart(product)}
                        whileTap={{ scale: 0.95 }}
                        className={`mt-4 w-full py-2 px-4 rounded-md font-medium transition-colors ${addedItems[product.id]
                          ? 'bg-green-500 text-white'
                          : 'bg-[#f39c12] hover:bg-[#e67e22] text-white'
                          }`}
                      >
                        {addedItems[product.id] ? '✓ Added!' : 'Add to Cart'}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
