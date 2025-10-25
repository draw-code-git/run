import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function RunawayButton() {
  const btnRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [moveCount, setMoveCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const btn = btnRef.current;
      if (!btn || moveCount >= 50) return;

      const rect = btn.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;
      const distance = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

      // Move when mouse is close
      if (distance < 160) {
        if (!isRunning) {
          setIsRunning(true);
        }
        
        const padding = 20; // Safe padding from edges
        const maxX = window.innerWidth - rect.width - padding;
        const maxY = window.innerHeight - rect.height - padding;

        const newX = Math.random() * maxX + padding;
        const newY = Math.random() * maxY + padding;

        // Increment move count
        setMoveCount(prev => prev + 1);

        // Animate smooth movement
        gsap.to(btn, {
          left: newX,
          top: newY,
          duration: 0.4,
          ease: "power.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isRunning, moveCount]);

  // Fade out after 50 moves
  useEffect(() => {
    if (moveCount >= 50 && btnRef.current) {
      gsap.to(btnRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setIsVisible(false)
      });
    }
  }, [moveCount]);

  if (!isVisible) return null;

  return (
    <button
      ref={btnRef}
      style={{
        position: isRunning ? "fixed" : "relative",
        padding: "14px 24px",
        fontSize: "32px",
        borderRadius: "12px",
        background: "#ff5a5f",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
                margin: "5px"

      }}
    >
     {moveCount>10 ? "😏😏": "No 😔" } 
    </button>
  );
}