import Image from "next/image";
import GlassCard from "./components/GlassCard";
import ArrowCTA from "./components/ArrowCTA";
import { useState } from "react";
import { ConsultCard } from "./components/ConsultCard";

export default function Home() {
  return (
    <main className="text-zinc-900 mx-24 my-10 flex gap-4">
      <ConsultCard consultName={"General"} />
      <ConsultCard consultName={"Fitness consult"} />
      <ConsultCard consultName={"Dietician consult"} />
    </main>
  );
}
