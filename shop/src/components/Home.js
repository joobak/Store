import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

import deckImg from '../img/main_deck.jpg';
import bootsImg from '../img/main_boots.jpg';
import helmetImg from '../img/main_helmet.jpg';
import bindingImg from '../img/main_binding.jpg';
import gogglesImg from '../img/main_goggles.jpg';
import bagImg from '../img/main_bag.jpg';
import glovesImg from '../img/main_gloves.jpg';

function Home() {
const navigate = useNavigate();
const [offset, setOffset] = useState(0);

const slideWidth = 360; // slide + margin
const maxOffset = slideWidth * 7;

const handleNext = () => {
    setOffset((prev) =>
    Math.abs(prev) >= maxOffset ? 0 : prev - slideWidth
    );
};

const handlePrev = () => {
    setOffset((prev) => (prev + slideWidth > 0 ? 0 : prev + slideWidth));
};

return (
    <div className="home-wrapper">

    {/* 🎞️ 메인 슬라이더 */}
    <div className="slider">

        {/* ◀ 버튼 */}
        <button className="slider-btn left" onClick={handlePrev}>
        ‹
        </button>

        {/* ▶ 버튼 */}
        <button className="slider-btn right" onClick={handleNext}>
        ›
        </button>

        <div
        className="slider-track"
        style={{ transform: `translateX(${offset}px)` }}
        >
        <Slide img={deckImg} text="DECK" onClick={() => navigate('/category/데크')} />
        <Slide img={bootsImg} text="BOOTS" onClick={() => navigate('/category/부츠')} />
        <Slide img={helmetImg} text="HELMET" onClick={() => navigate('/category/헬멧')} />
        <Slide img={bindingImg} text="BINDING" onClick={() => navigate('/category/바인딩')} />
        <Slide img={gogglesImg} text="GOGGLES" onClick={() => navigate('/category/고글')} />
        <Slide img={bagImg} text="BAG" onClick={() => navigate('/category/가방')} />
        <Slide img={glovesImg} text="GLOVES" onClick={() => navigate('/category/장갑')} />

        {/* 🔁 반복 (부드러운 이동용) */}
        <Slide img={deckImg} text="DECK" />
        <Slide img={bootsImg} text="BOOTS" />
        <Slide img={helmetImg} text="HELMET" />
        <Slide img={bindingImg} text="BINDING" />
        <Slide img={gogglesImg} text="GOGGLES" />
        <Slide img={bagImg} text="BAG" />
        <Slide img={glovesImg} text="GLOVES" />
            </div>
        </div>
    </div>
);
}

function Slide({ img, text, onClick }) {
return (
    <div className="slide" onClick={onClick}>
    <img src={img} alt={text} />
    <span>{text}</span>
    </div>
);
}

export default Home;
