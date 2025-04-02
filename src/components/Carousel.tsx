import { useState, useEffect } from 'react';
import './ReactCarousel.css';

export default function ReactCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, image: '/image1.jpg', alt: 'Slide 1' },
    { id: 2, image: '/image2.jpg', alt: 'Slide 2' },
    { id: 3, image: '/image3.jpg', alt: 'Slide 3' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-avance opcional
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}
