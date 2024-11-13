import React, { useEffect } from "react";

export const Cursor = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
      "rgba(26, 26, 26, 1)",     // Gris muy oscuro, opacidad 100%
      "rgba(45, 45, 45, 1)",     // Gris muy oscuro más claro
      "rgba(63, 63, 63, 1)",     // Gris oscuro más claro
      "rgba(82, 82, 82, 1)",     // Gris medio oscuro
      "rgba(102, 102, 102, 1)",  // Gris medio
      "rgba(121, 121, 121, 1)",  // Gris medio claro
      "rgba(141, 141, 141, 1)",  // Gris más claro
      "rgba(160, 160, 160, 1)",  // Gris claro
      "rgba(180, 180, 180, 1)",  // Gris más claro
      "rgba(200, 200, 200, 1)",  // Gris muy claro
      ];
      

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.transform = `scale(${
          (circles.length - index) / circles.length
        })`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <> 
        {/* <div  key={index}className="bat"></div> */}
        <div key={index} className="circle"></div> </>

       
      ))}
    </>
  );
};
