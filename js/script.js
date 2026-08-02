/**
 * Town Coffee — Core Engine & Shared Utilities
 */

// 1. EXPANDED DEFAULT MENU (15 ITEMS)
const DEFAULT_MENU = [
  // --- COFFEE ---
  {
    id: "tc-101",
    name: "Cappuccino",
    category: "Coffee",
    description: "Classic espresso with steamed milk foam & cocoa powder sprinkle.",
    price: 180,
    rating: 4.8,
    prepTime: "8 min",
    isBestseller: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "tc-102",
    name: "Iced Caramel Macchiato",
    category: "Coffee",
    description: "Rich espresso combined with vanilla syrup, milk, ice, and caramel drizzle.",
    price: 210,
    rating: 4.9,
    prepTime: "6 min",
    isBestseller: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "tc-103",
    name: "Iced Americano",
    category: "Coffee",
    description: "Double shot roasted espresso poured over ice and cold filtered water.",
    price: 160,
    rating: 4.4,
    prepTime: "5 min",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "tc-104",
    name: "Hazelnut Latte",
    category: "Coffee",
    description: "Smooth espresso blended with toasted hazelnut syrup & silky microfoam.",
    price: 195,
    rating: 4.7,
    prepTime: "8 min",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80"
  },

  // --- SANDWICHES ---
  {
    id: "tc-105",
    name: "Garden Veg Grilled Sandwich",
    category: "Sandwiches",
    description: "Triple-decker grilled sandwich filled with fresh bell peppers, cheese & green chutney.",
    price: 160,
    rating: 4.6,
    prepTime: "12 min",
    isBestseller: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "tc-106",
    name: "Smoked Chicken Club Sandwich",
    category: "Sandwiches",
    description: "Tender shredded chicken, fried egg, lettuce, tomatoes & garlic mayo.",
    price: 240,
    rating: 4.8,
    prepTime: "15 min",
    isBestseller: true,
    isVeg: false,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "tc-107",
    name: "Paneer Tikka Croissant",
    category: "Sandwiches",
    description: "Flaky buttery croissant stuffed with spiced cottage cheese and mint yogurt dressing.",
    price: 220,
    rating: 4.5,
    prepTime: "12 min",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80"
  },

  // --- PASTA ---
  {
    id: "tc-108",
    name: "Creamy Alfredo White Pasta",
    category: "Pasta",
    description: "Penne pasta tossed in a velvety garlic Alfredo sauce with parmesan cheese.",
    price: 260,
    rating: 4.7,
    prepTime: "18 min",
    isBestseller: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "tc-109",
    name: "Arrabbiata Red Sauce Pasta",
    category: "Pasta",
    description: "Fusilli pasta in spicy roasted tomato, garlic & fresh basil sauce.",
    price: 250,
    rating: 4.6,
    prepTime: "18 min",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80"
  },

  // --- MAIN COURSE ---
  {
    id: "tc-110",
    name: "Classic Margherita Pizza",
    category: "Main",
    description: "Hand-tossed thin crust with San Marzano tomato sauce, Mozzarella & basil.",
    price: 290,
    rating: 4.7,
    prepTime: "22 min",
    isBestseller: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "tc-111",
    name: "BBQ Paneer Loaded Pizza",
    category: "Main",
    description: "Smoky BBQ paneer cubes, red onions, jalapenos, and melted cheddar.",
    price: 340,
    rating: 4.8,
    prepTime: "25 min",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "tc-112",
    name: "Crispy Peri Peri Fries",
    category: "Main",
    description: "Golden fried potato wedges dusted in hot spicy African peri-peri mix.",
    price: 140,
    rating: 4.5,
    prepTime: "10 min",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80"
  },

  // --- DESSERTS ---
  {
    id: "tc-113",
    name: "Fudgy Chocolate Brownie",
    category: "Desserts",
    description: "Warm Belgian chocolate brownie served with warm chocolate fudge sauce.",
    price: 150,
    rating: 4.9,
    prepTime: "6 min",
    isBestseller: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "tc-114",
    name: "New York Baked Cheesecake",
    category: "Desserts",
    description: "Rich cream cheese cake on a graham cracker crust with berry compote.",
    price: 230,
    rating: 4.8,
    prepTime: "5 min",
    isBestseller: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "tc-115",
    name: "Classic Blueberry Pancakes",
    category: "Desserts",
    description: "Fluffy stack of pancakes topped with fresh blueberries & maple syrup.",
    price: 210,
    rating: 4.6,
    prepTime: "15 min",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80"
  }
];

// 2. CENTRAL ENGINE MODULE
const TownCafe = (function () {
  const STORAGE_KEYS = {
    MENU: 'towncafe_menu',
    CART: 'towncafe_cart',
    FAVS: 'towncafe_favs',
    TABLE: 'towncafe_table',
    ORDERS: 'towncafe_orders'
  };

  // State Management
  let menu = [];
  let cart = [];
  let favorites = [];
  let tableNo = '12';

  // Initialize Data
  function init() {
    // 1. Table Detection
    const urlParams = new URLSearchParams(window.location.search);
    const tableFromUrl = urlParams.get('table');
    if (tableFromUrl) {
      tableNo = tableFromUrl;
      localStorage.setItem(STORAGE_KEYS.TABLE, tableNo);
    } else {
      tableNo = localStorage.getItem(STORAGE_KEYS.TABLE) || '12';
    }

    // Update DOM table displays
    const tableDisplays = document.querySelectorAll('#display-table-no, #cart-table-no');
    tableDisplays.forEach(el => {
      if (el) el.textContent = tableNo;
    });

    // 2. Load Menu (force load 15 items default)
    localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(DEFAULT_MENU));
    menu = DEFAULT_MENU;

    // 3. Load Cart & Favorites
    cart = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
    favorites = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVS)) || [];

    updateCartUI();
  }

  // Cart Operations
  function saveCart() {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    updateCartUI();
  }

  function addToCart(productId) {
    const item = menu.find(m => m.id === productId);
    if (!item) return;

    const existingIndex = cart.findIndex(c => c.id === productId);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: Number(item.price || 0),
        image: item.image,
        quantity: 1
      });
    }

    saveCart();
    showToast(`Added ${item.name} to cart!`);
  }

  function updateCartQuantity(productId, newQty) {
    if (newQty <= 0) {
      cart = cart.filter(c => c.id !== productId);
    } else {
      const item = cart.find(c => c.id === productId);
      if (item) item.quantity = newQty;
    }
    saveCart();
  }

  function clearCart() {
    cart = [];
    saveCart();
  }

  function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    let isFav = false;
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(productId);
      isFav = true;
    }
    localStorage.setItem(STORAGE_KEYS.FAVS, JSON.stringify(favorites));
    return isFav;
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (Number(item.price || 0) * item.quantity), 0);

    // Badges update
    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = totalCount;
    });

    // Items count text
    document.querySelectorAll('.floating-cart-items-txt').forEach(el => {
      el.textContent = `${totalCount} ${totalCount === 1 ? 'Item' : 'Items'}`;
    });

    // Price display
    document.querySelectorAll('.cart-total-display').forEach(el => {
      el.textContent = `₹${subtotal.toFixed(0)}`;
    });

    // Floating bar visibility handle
    const floatingBar = document.getElementById('floating-cart-bar');
    if (floatingBar) {
      if (totalCount === 0) {
        floatingBar.style.transform = 'translateY(120px)';
        floatingBar.style.opacity = '0';
      } else {
        floatingBar.style.transform = 'translateY(0)';
        floatingBar.style.opacity = '1';
      }
    }
  }

  function submitOrder(notes = '') {
    if (cart.length === 0) return;

    const subtotal = cart.reduce((sum, item) => sum + (Number(item.price || 0) * item.quantity), 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    const newOrder = {
      orderId: 'TC-' + Math.floor(1000 + Math.random() * 9000),
      table: tableNo,
      items: [...cart],
      notes: notes,
      subtotal: subtotal,
      tax: tax,
      total: total,
      status: 'Received',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const existingOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
    existingOrders.unshift(newOrder);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(existingOrders));

    clearCart();
    window.location.href = 'tracking.html';
  }

  function requestService(serviceType = 'Waiter') {
    showToast(`🔔 ${serviceType} request sent for Table ${tableNo}`);
  }

  function showToast(msg) {
    const existing = document.getElementById('town-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'town-toast';
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #3C2A21;
      color: #FFFFFF;
      padding: 10px 18px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      z-index: 9999;
      box-shadow: 0 4px 14px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2200);
  }

  // Auto-init on script load
  document.addEventListener('DOMContentLoaded', init);

  return {
    getMenu: () => menu,
    getCart: () => cart,
    getFavorites: () => favorites,
    getTableNo: () => tableNo,
    addToCart,
    updateCartQuantity,
    clearCart,
    toggleFavorite,
    submitOrder,
    requestService,
    showToast
  };
})();