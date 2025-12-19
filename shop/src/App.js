import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Cart from './components/Cart'; // ⭐ 추가

function App() {
  const [keyword, setKeyword] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoginPage, setIsLoginPage] = useState(false);

  // ⭐ 장바구니
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const categories = ['데크','헬멧', '부츠', '모자/장갑/보호대', '가방/ACC', '이야기방'];

  const handleSearch = (text) => {
    setKeyword(text);
    setSelectedProduct(null);
  };

  // ⭐ 장바구니 추가 함수
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
    <div className="App">

      {/* 🔐 로그인 화면 */}
      {isLoginPage && (
        <Login
          onEnter={() => setIsLoginPage(false)}
          onClose={() => setIsLoginPage(false)}
        />
      )}

      {!isLoginPage && (
        <>
          {/* ⭐ 상단 카테고리 */}
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

          {/* ⭐ 장바구니 페이지 */}
          {showCart ? (
            <Cart
              cart={cart}
              setCart={setCart}
              onBack={() => setShowCart(false)}
            />
          ) : !selectedProduct ? (
            <div className="main-content">
              <h1>2526 Season</h1>
              <p>Board Market</p>

              <SearchBar onSearch={handleSearch} />

              {keyword && (
                <Products
                  keyword={keyword}
                  onSelectProduct={setSelectedProduct}
                />
              )}
            </div>
          ) : (
            <ProductDetail
              product={selectedProduct}
              onBack={() => setSelectedProduct(null)}
              onAddToCart={addToCart}     // ⭐ 추가
              onGoCart={() => setShowCart(true)} // ⭐ 추가
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
