"use client";

// import Lenis from "lenis";
import { useEffect } from "react";

type LenisProviderProps = {
  children: React.ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    console.log("LenisProvider rendered (Lenis disabled for debug)");

    // const lenis = new Lenis({
    //   lerp: 0.1,
    // });

    // let frameId: number;

    // function raf(time: number) {
    //   lenis.raf(time);
    //   frameId = requestAnimationFrame(raf);
    // }

    // frameId = requestAnimationFrame(raf);

    // return () => {
    //   cancelAnimationFrame(frameId);
    //   lenis.destroy();
    // };
  }, []);

  return children;
}
