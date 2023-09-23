import React, { useState, useEffect } from 'react';
import "./DisappearingBlock.css"

export const DisappearingBlock = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`disappearing-block ${isVisible ? '' : 'hidden'}`}>
      <div className='disappearing-item'>
        <div className='disappearing-main-text'>
            <h2>Klakson</h2>
            <p>Эксперт по запахам</p>
        </div>
        <div className='disappearing-icons'>
            <div className='icon-item'>
                <img className='icon-img' src="../../images/icons/time.png" />
                <p>15-25'</p>
            </div>
            <div className='icon-item'>
                <img className='icon-img' src="../../images/icons/like.png" />
                <p>92%</p>
            </div>
            <div className='icon-item'>
                <img className='icon-img' src="../../images/icons/quality.png" />
                <p>100%</p>
            </div>
        </div>
      </div>
    </div>
  );
};
