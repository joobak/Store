import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Cart from './components/Cart';

function App() {
  const [keyword, setKeyword] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoginPage, setIsLoginPage] = useState(false);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const categories = ['데크','헬멧', '부츠', '모자/장갑/보호대', '가방/ACC', '이야기방'];

  const handleSearch = (text) => {
    setKeyword(text);
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <BrowserRouter>
      <div className="App">

        {/* 🔐 로그인 */}
        {isLoginPage && (
          <Login
            onEnter={() => setIsLoginPage(false)}
            onClose={() => setIsLoginPage(false)}
          />
        )}

        {!isLoginPage && (
          <>
            {/* 상단 카테고리 */}
            <div className="category-bar-fixed">
              <div className="category-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="category-button"
                    onClick={() => handleSearch(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="category-right">
                <button
                  className="category-button login-btn"
                  onClick={() => setIsLoginPage(true)}
                >
                  로그인
                </button>
              </div>
            </div>

            {/* 본문 */}
            {showCart ? (
              <Cart
                cart={cart}
                setCart={setCart}
                onBack={() => setShowCart(false)}
              />
            ) : selectedProduct ? (
              <ProductDetail
                product={selectedProduct}
                onBack={() => setSelectedProduct(null)}
                onAddToCart={addToCart}
                onGoCart={() => setShowCart(true)}
              />
            ) : (
              <>
                {/* ✅ 메인 슬라이더 */}
                <Home />

                {/* ✅ 메인 아래 데크 상품 */}
                <Products
                  keyword={keyword || '데크'}
                  onSelectProduct={setSelectedProduct}
                />
              </>
            )}
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
