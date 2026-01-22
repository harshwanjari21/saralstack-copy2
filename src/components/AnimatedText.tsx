import { useEffect, useState } from 'react';

const words = ['Solutions', 'Products', 'Dreams', 'Ideas'];

const AnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden">
      <span
        className={`inline-block text-gradient transition-all duration-500 ${
          isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        {words[currentIndex]}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-highlight to-accent animate-shimmer" />
    </span>
  );
};

export default AnimatedText;
