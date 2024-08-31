import React, { useEffect } from "react";

export const Cursor = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
        "#1E2235", // Color base
        "#292E47", // Azul grisáceo oscuro
        "#343858", // Azul grisáceo más claro
        "#3F436A", // Azul medio grisáceo
        "#4A4E7B", // Azul más claro grisáceo
        "#56598C", // Azul grisáceo claro
        "#6B6F9F", // Azul grisáceo muy claro
        "#8085B3", // Azul grisáceo pálido
        "#959AC7", // Azul grisáceo pálido muy claro
        "#AAAFDA", // Azul grisáceo casi blanco
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
        <div key={index} className="circle"></div>
      ))}
    </>
  );
};
