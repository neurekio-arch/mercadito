import React, { useState } from 'react';
import { 
  ActiveScreen, 
  CategoryId, 
  Department, 
  Product, 
  CartItem, 
  Review 
} from './types';
import { INITIAL_PRODUCTS, INITIAL_REVIEWS } from './data/mockData';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { CategoryPills } from './components/CategoryPills';
import { Footer } from './components/Footer';

// Screens
import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ShopScreen } from './screens/ShopScreen';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { VendorScreen } from './screens/VendorScreen';

// Modals & Drawers
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ReviewModal } from './components/ReviewModal';
import { LoginModal } from './components/LoginModal';
import { HelpModal } from './components/HelpModal';

export function App() {
  // Navigation & Filtering State
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('inicio');
  const [currentDepartment, setCurrentDepartment] = useState<Department>('La Paz');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Commerce Data State
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Modals & Drawers State
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart Handlers
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`"${product.name}" añadido al carrito`);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Eliminado de favoritos`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`"${product.name}" guardado en favoritos`);
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromWishlist = (product: Product) => {
    setWishlist((prev) => prev.filter((p) => p.id !== product.id));
  };

  // Review Submission Handler
  const handleAddReview = (newRev: Omit<Review, 'id' | 'date'>) => {
    const review: Review = {
      ...newRev,
      id: `rev-${Date.now()}`,
      date: 'Hoy',
    };
    setReviews((prev) => [review, ...prev]);

    // Update product rating and review count
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === review.productId) {
          const newCount = p.reviewCount + 1;
          const newRating = Number(
            ((p.rating * p.reviewCount + review.rating) / newCount).toFixed(1)
          );
          return { ...p, rating: newRating, reviewCount: newCount };
        }
        return p;
      })
    );
    showToast('¡Gracias por tu valoración!');
  };

  // Navigation Helper
  const navigateTo = (screen: ActiveScreen) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-[#121c2a] bg-[#f8f9ff]">
      
      {/* 1. Top Announcement Bar */}
      <TopBar
        currentDepartment={currentDepartment}
        onDepartmentChange={(dept) => {
          setCurrentDepartment(dept);
          showToast(`Región configurada: ${dept}`);
        }}
        onOpenHelp={() => setIsHelpModalOpen(true)}
      />

      {/* 2. Main Header */}
      <Header
        activeScreen={activeScreen}
        onNavigate={navigateTo}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={(cat) => {
          setSelectedCategory(cat);
          if (activeScreen !== 'tienda') {
            navigateTo('tienda');
          }
        }}
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
      />

      {/* 3. Category Pills Subnav */}
      <CategoryPills
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          if (activeScreen !== 'tienda' && activeScreen !== 'inicio') {
            navigateTo('tienda');
          }
        }}
      />

      {/* 4. Main Screen View */}
      <main className="flex-1">
        {activeScreen === 'inicio' && (
          <HomeScreen
            products={products}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onNavigate={navigateTo}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              navigateTo('tienda');
            }}
            onOpenReviewModal={() => setIsReviewModalOpen(true)}
          />
        )}

        {activeScreen === 'nosotros' && (
          <AboutScreen onNavigate={navigateTo} />
        )}

        {activeScreen === 'tienda' && (
          <ShopScreen
            products={products}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedDepartment={currentDepartment}
            onDepartmentChange={(d) => {
              if (d !== 'Todas') setCurrentDepartment(d);
            }}
          />
        )}

        {activeScreen === 'categorias' && (
          <CategoriesScreen
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
            }}
            onNavigate={navigateTo}
          />
        )}

        {activeScreen === 'vender' && (
          <VendorScreen onNavigate={navigateTo} />
        )}
      </main>

      {/* 5. Institutional & Commerce Footer */}
      <Footer
        onNavigate={navigateTo}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          navigateTo('tienda');
        }}
      />

      {/* 6. Overlays & Modals */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={wishlist.some((w) => w.id === quickViewProduct?.id)}
        onToggleWishlist={handleToggleWishlist}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        department={currentDepartment}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        products={products}
        onSubmitReview={handleAddReview}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSelectVendor={() => navigateTo('vender')}
      />

      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />

      {/* 7. Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-bounce border border-slate-700">
          <span className="w-2 h-2 rounded-full bg-[#00A896]" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

export default App;
