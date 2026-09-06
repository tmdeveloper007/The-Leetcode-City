/**
 * Lazy/dynamic imports for heavy 3D canvas and overlay components.
 * Extracted from page.tsx to reduce its size and keep imports colocated.
 */

import dynamic from "next/dynamic";

const LoadingPlaceholder = () => (
  <div className="h-screen w-screen bg-black flex items-center justify-center">
    <div className="text-[#ffa116] font-pixel text-lg animate-pulse">
      Loading City...
    </div>
  </div>
);

export const CityCanvas = dynamic(() => import("@/components/CityCanvas"), {
  ssr: false,
  loading: LoadingPlaceholder,
});

export const CityChat = dynamic(() => import("@/components/CityChat"), {
  ssr: false,
});

export const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});
