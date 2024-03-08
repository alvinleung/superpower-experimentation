"use client";

import { useState } from "react";
import ArrowCTA from "./ArrowCTA";
import GlassCard from "./GlassCard";

export const ConsultCard = ({ consultName }: { consultName: string }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
    >
      <GlassCard>
        <div className="flex flex-col h-full">
          <div className="mb-auto">
            <div className="bg-[#FC5F2B] w-16 h-16 rounded-lg" />
          </div>
          <div className="text-zinc-900 text-xl">{consultName}</div>
          <div className="text-zinc-400 text-sm">Next: Tomorrow, 10:00am</div>

          <div
            className="absolute right-6 bottom-6"
            style={{
              opacity: isHovering ? 1 : 0,
              transition: "opacity .2s linear",
            }}
          >
            <ArrowCTA />
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
