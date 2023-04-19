import React, { useState, useEffect } from 'react';
import giphy from '../../assets/loading-giphy.gif'


import Homepage from './Homepage'


const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dots, setDots] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      // Simulating API fetch with a timeout of 5 seconds
      await new Promise(resolve => setTimeout(resolve, 5000));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Start blinking dots after 1 second delay
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDots(prevDots => (prevDots === '....' ? '' : prevDots + '.'));
      }, 500);
      return () => clearInterval(interval);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <div>
      {isLoading ? (
        <div className="loading-page">
          {/* Replace this with your desired loading spinner */}
          <img src={giphy} alt='amelia-studios-logo-walking-gif' className='loading-gif' />
          <span>Loading {dots} </span>
        </div>
      ) : (
        // Replace this with your actual Homepage component
        <Homepage />
      )}
    </div>
  );
};

export default LoadingPage