import { createPortal } from "react-dom";

const TooltipPortal = ({ children, x, y }) => {
  if (x === null || y === null) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: y,
        left: x,
        zIndex: 9999,
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default TooltipPortal;
