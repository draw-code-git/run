import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function RunawayButton() {
  const btnRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const btn = btnRef.current;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;
      const distance = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

      // Move when mouse is close
      if (distance < 160) {
        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        const newX = Math.min(maxX, Math.max(0, Math.random() * maxX));
        const newY = Math.min(maxY, Math.max(0, Math.random() * maxY));

        // Animate smooth movement
        gsap.to(btn, {
          x: newX,
          y: newY,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <button
      ref={btnRef}
      style={{
        // position: "fixed",
        // left: 0,
        // top: 0,
        // transform: "translate(200px, 200px)",
    
        padding: "14px 24px",
        fontSize: "16px",
        borderRadius: "12px",
        background: "#ff5a5f",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        margin: "10px"
      }}
    >
      No 😏
    </button>
  );
}
