'use client';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ title, subtitle, text, img, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <ReactCardFlip
      className='w-[120px]'
      isFlipped={isFlipped}
      flipDirection='horizontal'
    >
      {/* Front Side */}
      <article
        onMouseEnter={handleMouseEnter}
        className={`${className} cursor-pointer min-h-64 w-[320px] md:w-96 border p-4 rounded-md flex flex-col items-center justify-center gap-4`}
      >
        {img}
        <h4 className='text-3xl text-cyan-300'>{title}</h4>
        <h5>{subtitle}</h5>
      </article>

      {/* Back Side */}
      <article
        onMouseLeave={handleMouseLeave}
        className={`${className} cursor-pointer min-h-64 w-[320px] md:w-96 border p-4 rounded-md`}
      >
        <div className='flex flex-col gap-4 my-8 text-justify'>{text}</div>
      </article>
    </ReactCardFlip>
  );
};

export default FlipCard;
