import React from "react";

interface StarLogoProps {
  className?: string;
  size?: number;
}

export function StarLogo({ className = "w-8 h-8 text-white", size = 32 }: StarLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central 8-pointed star emblem matching the Pinterest design */}
      <path
        d="M24 2L26.2 18.8L40.4 9.6L29.2 22.2L46 24L29.2 25.8L40.4 38.4L26.2 29.2L24 46L21.8 29.2L7.6 38.4L18.8 25.8L2 24L18.8 22.2L7.6 9.6L21.8 18.8L24 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function StarWatermark({ className = "w-24 h-24 text-stone-300", size = 96 }: StarLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 2L26.2 18.8L40.4 9.6L29.2 22.2L46 24L29.2 25.8L40.4 38.4L26.2 29.2L24 46L21.8 29.2L7.6 38.4L18.8 25.8L2 24L18.8 22.2L7.6 9.6L21.8 18.8L24 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
