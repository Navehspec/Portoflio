import React, { useRef, useEffect, useMemo } from 'react';

const GeneralRail = () => {
  const scrollRef = useRef(null);
  
  // Dynamically import all images from src/assets/snapshots
  const images = import.meta.glob('../assets/snapshots/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' });
  
  const generalList = useMemo(() => {
    const list = Object.values(images);
    // Fisher-Yates shuffle
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, []); // Empty dependency array means it runs once on mount

  // Repeat list 5 times to create buffer for infinite scroll
  // [Set 1] [Set 2] [Set 3 (Start here)] [Set 4] [Set 5]
  const REPEAT_COUNT = 5;
  const infiniteList = Array(REPEAT_COUNT).fill(generalList).flat();

  useEffect(() => {
    const rail = scrollRef.current;
    if (rail) {
      // Initialize scroll position to the middle set (Set 3)
      // We use a small timeout to allow layout/images to potentially settle
      // though for exact calculation we rely on scrollWidth
      setTimeout(() => {
        if (rail.scrollWidth > rail.clientWidth) {
           const singleSetWidth = rail.scrollWidth / REPEAT_COUNT;
           rail.scrollLeft = singleSetWidth * 2;
        }
      }, 50);
    }
  }, [generalList.length]);

  const handleScroll = () => {
    const rail = scrollRef.current;
    if (!rail) return;

    const scrollLeft = rail.scrollLeft;
    const scrollWidth = rail.scrollWidth;
    const singleSetWidth = scrollWidth / REPEAT_COUNT;

    // Boundary checks to keep user in the middle sets
    // If too far left (Set 1), jump forward to Set 3
    if (scrollLeft < singleSetWidth * 0.5) {
      rail.scrollLeft += singleSetWidth * 2;
    }
    // If too far right (Set 5), jump backward to Set 3
    else if (scrollLeft > singleSetWidth * 3.5) {
      rail.scrollLeft -= singleSetWidth * 2;
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.4; // Scroll 40% of width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!generalList.length) {
    return null;
  }

  return (
    <div className="general-rail-container">
      <div 
        className="general-rail" 
        ref={scrollRef}
        onScroll={handleScroll}
        aria-label="Recent snapshots reel"
      >
        {infiniteList.map((src, idx) => (
          <figure key={idx} className="general-item">
            <img src={src} alt={`Snapshot`} loading="lazy" />
          </figure>
        ))}
      </div>

      <button
        className="general-nav prev"
        type="button"
        aria-label="Scroll left"
        onClick={() => scroll('left')}
      >
        &lsaquo;
      </button>
      <button
        className="general-nav next"
        type="button"
        aria-label="Scroll right"
        onClick={() => scroll('right')}
      >
        &rsaquo;
      </button>
    </div>
  );
};

export default GeneralRail;
