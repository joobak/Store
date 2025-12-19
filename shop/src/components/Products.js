import { useState, useEffect } from 'react';
import './Products.css';

import deck1 from '../img/deck1.jpg';
import deck2 from '../img/deck2.jpg';
import deck3 from '../img/deck3.jpg';
import deck4 from '../img/deck4.jpg';
import deck5 from '../img/deck5.jpg';
import deck6 from '../img/deck6.jpg';
import deck7 from '../img/deck7.jpg';
import deck8 from '../img/deck8.jpg';
import deck9 from '../img/deck9.jpg';
import deck10 from '../img/deck10.jpg';
import deck11 from '../img/deck11.jpg';

import helmet1 from '../img/helmet1.jpg';
import helmet2 from '../img/helmet2.jpg';
import helmet3 from '../img/helmet3.jpg';
import helmet4 from '../img/helmet4.jpg';
import helmet5 from '../img/helmet5.jpg';
import helmet6 from '../img/helmet6.jpg';
import helmet7 from '../img/helmet7.jpg';
import helmet8 from '../img/helmet8.jpg';
import helmet9 from '../img/helmet9.jpg';
import helmet10 from '../img/helmet10.jpg';

import boots1 from '../img/boots1.jpg';
import boots2 from '../img/boots2.jpg';
import boots3 from '../img/boots3.jpg';
import boots4 from '../img/boots4.jpg';
import boots5 from '../img/boots5.jpg';
import boots6 from '../img/boots6.jpg';
import boots7 from '../img/boots7.jpg';
import boots8 from '../img/boots8.jpg';
import boots9 from '../img/boots9.jpg';
import boots10 from '../img/boots10.jpg';
import boots11 from '../img/boots11.jpg';

import pad1 from '../img/pad1.jpg';

const products = [
    
{
id: 1,
name: '도넥 플럭스 라이트 Mint',
category: '데크',
price: 1300000,
image: deck1,
description: `

TERRAIN : 올마운틴
ABILITY LEVEL : 초중상급
CAMBER PROFILE : CAMBER
SHAPE : DIRECTIONAL
CORE LAMINATES : ASPEN, POPLAR AND ASH
SIDEWALL TYPE : ABS
BASE MATERIAL : DURASURF 4001
REINFORCEMENTS : TRIAXTIAL FIBERGLASS
`
},

{ 
    id: 2, 
    name: '도넥 플럭스 Fink', 
    category: '데크', 
    price: 1300000, 
    image: deck2,
    description: `

TERRAIN : 올마운틴
ABILITY LEVEL : 초중상급
CAMBER PROFILE : CAMBER
SHAPE : DIRECTIONAL
CORE LAMINATES : ASPEN, POPLAR AND ASH
SIDEWALL TYPE : ABS
BASE MATERIAL : DURASURF 4001
REINFORCEMENTS : TRIAXTIAL FIBERGLASS
`
 },
{
    id: 3, 
    name: '도넥 플럭스 Navy', 
    category: '데크', 
    price: 1300000, 
    image: deck3,
    description: `

TERRAIN : 올마운틴
ABILITY LEVEL : 초중상급
CAMBER PROFILE : CAMBER
SHAPE : DIRECTIONAL
CORE LAMINATES : ASPEN, POPLAR AND ASH
SIDEWALL TYPE : ABS
BASE MATERIAL : DURASURF 4001
REINFORCEMENTS : TRIAXTIAL FIBERGLASS
`
},
{ 
    id: 4, 
    name: '도넥 플럭스 Yellow', 
    category: '데크', 
    price: 1300000, 
    image: deck4 ,
    description: `

TERRAIN : 올마운틴
ABILITY LEVEL : 초중상급
CAMBER PROFILE : CAMBER
SHAPE : DIRECTIONAL
CORE LAMINATES : ASPEN, POPLAR AND ASH
SIDEWALL TYPE : ABS
BASE MATERIAL : DURASURF 4001
REINFORCEMENTS : TRIAXTIAL FIBERGLASS
`
},
{ 
    id: 5, 
    name: '도넥 플럭스 Purple', 
    category: '데크', 
    price: 1300000, 
    image: deck5,
    description: `

TERRAIN : 올마운틴
ABILITY LEVEL : 초중상급
CAMBER PROFILE : CAMBER
SHAPE : DIRECTIONAL
CORE LAMINATES : ASPEN, POPLAR AND ASH
SIDEWALL TYPE : ABS
BASE MATERIAL : DURASURF 4001
REINFORCEMENTS : TRIAXTIAL FIBERGLASS
`
 },
{ 
    id: 6, 
    name: '도넥 플럭스 Green', 
    category: '데크', 
    price: 1300000, 
    image: deck6,
        description: `

TERRAIN : 올마운틴
ABILITY LEVEL : 초중상급
CAMBER PROFILE : CAMBER
SHAPE : DIRECTIONAL
CORE LAMINATES : ASPEN, POPLAR AND ASH
SIDEWALL TYPE : ABS
BASE MATERIAL : DURASURF 4001
REINFORCEMENTS : TRIAXTIAL FIBERGLASS
`
 },
{ 
    id: 7, 
    name: 'GRAY DESPE WOOD', 
    category: '데크', 
    price: 1210000, 
    image: deck7,
    description: `

* 오동나무/경량 포플러코어 + 파이버 글라스 강화 플레이드 장착
* 진동 흡수성이 뛰어난 ICP 탑 시트 채택
* 활주연 소재: P.Tex 3000 Graphite Sinterd
* 1.8mm 스테인리스 스틸 엣지
* 3가지 복합 사이드 컷에 의한 디렉셔널 모양
`
},
{ 
    id: 8, 
    name: 'OGASAKA SPROUT', 
    category: '데크', 
    price: 890000,
    image: deck8,
    description :`
    코어: OGK2 Core
    보강재: Glasdd Fiber + Carbon Ribbon Narrow [148],
    Glass Fiber + Carbon Ribbon Wide [152-164]
    탑시트: PA
    PC플레이트: Type-S
    엣지: Stainless
    `
},
{
    id: 9,
    name: '아동용 BURTON KIDS RIGLET',
    category: '데크',
    price: 490000,
    originalPrice: 790000,
    image: deck9,
},
{
    id: 10,
    name: '아동용 BURTON FEELGOOD ',
    category: '데크',
    price: 399000,
    originalPrice: 599000,
    image: deck10,
},

{
    id: 33,
    name: '2425 케슬러 엑스카브 KESSLER X-CARVE BLACK ',
    category: '데크',
    price: 2600000,
    image: deck11,
},
{
    id: 11,
    name: '2526 지로 보드 아동용 헬멧 MATT STONE',
    category: '헬멧',
    price: 199000,
    originalPrice: 299000,
    image: helmet1,
},
{
    id: 12,
    name: '2526 지로 보드 아동용 헬멧 DARK BLUE',
    category: '헬멧',
    price: 199000,
    originalPrice: 299000,
    image: helmet2,
},
{
    id: 13,
    name: '2526 지로 보드 아동용 헬멧 LIGHT BLUE',
    category: '헬멧',
    price: 199000,
    originalPrice: 299000,
    image: helmet3,
},
{ id: 14, name: '2526 지로 보드 헬멧 밉스 아시안핏 WHITE', category: '헬멧', price: 399000, image: helmet4 },
{ id: 15, name: '2526 스미스 헬멧 메소드 밉스 아시안핏 Pink', category: '헬멧', price: 345000, image: helmet5 },
{ id: 16, name: '2526 스미스 헬멧 메소드 밉스 아시안핏 Black', category: '헬멧', price: 345000, image: helmet6 },
{ id: 17, name: '2526 스미스 헬멧 메소드 밉스 아시안핏 White', category: '헬멧', price: 345000, image: helmet7 },
{ id: 18, name: '요비트 보드헬멧 PHIX WHITE', category: '헬멧', price: 139000, image: helmet8 },
{ id: 19, name: '요비트 보드헬멧 PHIX BLACK', category: '헬멧', price: 139000, image: helmet9 },
{ id: 20, name: 'K2 스노우보드 헬멧 BLACK', category: '헬멧', price: 339000, image: helmet10 },

{ id: 21, name: 'K2 한포드 와이드 부츠', category: '부츠', price: 517000, image: boots1 },
{ id: 22, name: 'K2 매이시스 와이드 부츠', category: '부츠', price: 478000, image: boots2 },
{ id: 23, name: 'K2 매이시스 Beige', category: '부츠', price: 390000, image: boots3 },
{ id: 24, name: 'K2 컨투어 부츠', category: '부츠', price: 462000, image: boots4 },
{ id: 25, name: '라이드 라쏘프로 와이드', category: '부츠', price: 510000, image: boots5 },
{ id: 26, name: '버튼 모토 와이드 BOA', category: '부츠', price: 287000, image: boots6 },
{ id: 27, name: '버튼 아동용 BOA', category: '부츠', price: 186000, image: boots7 },
{ id: 28, name: '버튼 아동용 GROM WHITE', category: '부츠', price: 186000, image: boots8 },
{ id: 29, name: '버튼 아동용 BLACK', category: '부츠', price: 224000, image: boots9 },
{ id: 30, name: '디럭스 ID LARA BOA', category: '부츠', price: 343000, image: boots10 },
{ id: 31, name: '2526 버튼 아동용 BOA', category: '부츠', price: 224000, image: boots11 },

{ id: 32, name: '스노우보드 고글', category: '고글', price: 29000, image: pad1 },
];

function Products({ keyword, onSelectProduct }) {
const [visibleCount, setVisibleCount] = useState(8);

useEffect(() => {
    setVisibleCount(8);
}, [keyword]);

const filtered = products.filter(
    (p) => p.name.includes(keyword) || p.category.includes(keyword)
);

const visibleProducts = filtered.slice(0, visibleCount);

return (
    <>
    <div className="products-grid">
        {visibleProducts.map((p) => (
        <div key={p.id} className="product-card" onClick={() => onSelectProduct(p)}>
            <img src={p.image} alt={p.name} />

            <h3>{p.name}</h3>

            <div className="price-box">
            {p.originalPrice && (
                <span className="original-price">
                {p.originalPrice.toLocaleString('ko-KR')}원
                </span>
            )}
            <span className="sale-price">
                {p.price.toLocaleString('ko-KR')}원
            </span>
            </div>

            {p.originalPrice && (
            <span className="sale-percent">
                {Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}%
            </span>
            )}
        </div>
        ))}
    </div>

    {visibleCount < filtered.length && (
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <button className="more-btn" onClick={() => setVisibleCount(visibleCount + 8)}>
            더보기
        </button>
        </div>
    )}
    </>
);
}

export default Products;
