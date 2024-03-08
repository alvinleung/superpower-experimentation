"use client";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const GlassCard = ({ children }: Props) => {
  const cardWidth = 285;
  const cardHeight = 232;
  const blurSize = 285 / 2.3;

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div
      ref={containerRef}
      style={{
        width: cardWidth,
        height: cardHeight,
        zIndex: isHovering ? 100 : 1,
      }}
      className="relative cursor-pointer  rounded-2xl"
      onPointerMove={(e) => {
        const bounds = containerRef.current.getBoundingClientRect();
        setMouseOffset({ x: e.clientX - bounds.x, y: e.clientY - bounds.y });
      }}
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
    >
      <div
        className="absolute top-0 left-0 bg-[#F7861e] blur-2xl pointer-events-none"
        style={{
          width: blurSize,
          height: blurSize,
          opacity: isHovering ? 1 : 0,
          transform: `translate(${
            cardWidth / 4 + mouseOffset.x / 2 - blurSize / 2
          }px, ${cardHeight / 4 + mouseOffset.y / 2 - blurSize / 2}px) scale(${
            isHovering ? 1 : 0
          })`,
          transition: `
            opacity .3s linear, 
            transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)
          `,
        }}
      />
      <div className="border border-zinc-200 rounded-2xl p-6 w-full h-full backdrop-blur-2xl bg-[rgba(255,255,255,.8)]">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
