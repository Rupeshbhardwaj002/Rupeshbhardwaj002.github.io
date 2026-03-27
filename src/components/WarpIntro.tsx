import React, { useEffect, useRef, useState } from 'react';

export default function WarpIntro({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const stars: any[] = [];
    const numStars = 600;
    let speed = 0;
    let animationFrameId: number;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w - w / 2,
        y: Math.random() * h - h / 2,
        z: Math.random() * w,
        pz: Math.random() * w
      });
    }

    const draw = () => {
      // Light background with trail effect to match theme
      ctx.fillStyle = 'rgba(250, 250, 250, 0.3)';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= speed;

        if (star.z <= 0) {
          star.x = Math.random() * w - w / 2;
          star.y = Math.random() * h - h / 2;
          star.z = w;
          star.pz = w;
        }

        const x = cx + star.x * (w / star.z);
        const y = cy + star.y * (w / star.z);
        
        const px = cx + star.x * (w / star.pz);
        const py = cy + star.y * (w / star.pz);

        star.pz = star.z;

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        
        const opacity = 1 - star.z / w;
        // Alternate between Indigo-600 and Slate-600
        ctx.strokeStyle = i % 2 === 0 
          ? `rgba(79, 70, 229, ${opacity})` 
          : `rgba(71, 85, 105, ${opacity})`;
        ctx.lineWidth = opacity * 3;
        ctx.stroke();
      }

      if (speed < 45) {
        speed += 0.5;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const t1 = setTimeout(() => setStep(1), 400);
    const t2 = setTimeout(() => setStep(2), 1600);
    const t3 = setTimeout(() => setFadeOut(true), 2800);
    const t4 = setTimeout(() => onComplete(), 3500);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#FAFAFA] transition-opacity duration-700 pointer-events-none ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* WELCOME TEXT */}
        <h1 
          className={`absolute text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 tracking-widest transition-all duration-700 ${
            step === 1 ? 'scale-100 opacity-100' : step === 0 ? 'scale-50 opacity-0' : 'scale-150 opacity-0'
          }`}
        >
          WELCOME
        </h1>

        {/* TAGLINE TEXT */}
        <h2 
          className={`absolute text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-700 tracking-wide transition-all duration-700 text-center px-4 ${
            step === 2 ? 'scale-100 opacity-100' : step < 2 ? 'scale-50 opacity-0' : 'scale-150 opacity-0'
          }`}
        >
          Your Vision, My Innovation
        </h2>
      </div>
    </div>
  );
}
