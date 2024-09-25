import React, { useEffect } from 'react';
import { PiArrowUpLight } from "react-icons/pi";
import 'font-awesome/css/font-awesome.css'; // Importa el CSS aquí


const ProgressWrap = () => {
  useEffect(() => {
    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;

    const updateProgress = () => {
      const scroll = window.pageYOffset;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    };

    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';
    
    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Ensure it runs on mount

    const offset = 50;

    const handleScroll = () => {
      if (window.pageYOffset > offset) {
        document.querySelector('.progress-wrap').classList.add('active-progress');
      } else {
        document.querySelector('.progress-wrap').classList.remove('active-progress');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="progress-wrap" onClick={scrollToTop}>

      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
			<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
		</svg>
     


    </div>
  );
};

export default ProgressWrap;
