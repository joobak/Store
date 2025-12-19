import './Products.css';

function ProductDetail({ product, onBack, onAddToCart, onGoCart }) {
  return (
    <div className="product-detail">

      {/* 이미지 + 닫기 버튼 */}
      <div className="image-wrapper">
        <button className="back-button" onClick={onBack}>✕</button>
        <img src={product.image} alt={product.name} />
      </div>

      {/* 상품명 */}
      <h2 className="detail-title">{product.name}</h2>

      {/* 가격 */}
      <div className="detail-price">
        {product.originalPrice && (
          <span className="original-price">
            {product.originalPrice.toLocaleString('ko-KR')}원
          </span>
        )}
        <span className="sale-price">
          {product.price.toLocaleString('ko-KR')}원
        </span>
      </div>

      {/* 상품 설명 */}
      <div className="detail-desc">
        {product.description}
      </div>

      {/* 버튼 */}
   <div className="detail-buttons">
  <button
    className="buy-btn"
    onClick={() => {
      onAddToCart(product); // ⭐ 장바구니에 추가
      onGoCart();           // ⭐ 장바구니 페이지로 이동
    }}
  >
    구매하기
  </button>

  <button
    className="cart-btn"
    onClick={() => onAddToCart(product)}
  >
    장바구니
  </button>
</div>
</div>
  );
}

export default ProductDetail;
