import React from "react";

interface ChurchLogoProps {
  className?: string;
  size?: number;
}

/**
 * Authentic Tabernacle Community Baptist Church Seal & Crest
 * Features the dignified TCBC monogram, cross of redemption,
 * open Holy Bible, and 1926 heritage in church maroon & antique gold.
 */
export function ChurchLogo({ className = "w-10 h-10 text-amber-200", size = 40 }: ChurchLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none flex-shrink-0 ${className}`}
      aria-label="Tabernacle Community Baptist Church Official Seal"
    >
      {/* Outer Golden Border Ring */}
      <circle cx="50" cy="50" r="48" stroke="#D97706" strokeWidth="2.5" fill="none" opacity="0.9" />
      <circle cx="50" cy="50" r="45" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.6" />

      {/* Deep Church Maroon Fill */}
      <circle cx="50" cy="50" r="43" fill="#581120" />

      {/* Inner Accent Ring */}
      <circle cx="50" cy="50" r="41" stroke="#D97706" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Subtle Radiating Rays behind Cross */}
      <g opacity="0.25" stroke="#FDE68A" strokeWidth="1">
        <line x1="50" y1="20" x2="50" y2="46" />
        <line x1="32" y1="38" x2="44" y2="38" />
        <line x1="56" y1="38" x2="68" y2="38" />
        <line x1="37" y1="25" x2="45" y2="33" />
        <line x1="63" y1="25" x2="55" y2="33" />
      </g>

      {/* Golden Latin Cross */}
      <path
        d="M47 18H53V34H65V39H53V64H47V39H35V34H47V18Z"
        fill="#F59E0B"
        stroke="#FDE68A"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />

      {/* Open Holy Bible at the base */}
      <path
        d="M32 62C38 60 46 62 50 65C54 62 62 60 68 62V75C62 73 54 75 50 78C46 75 38 73 32 75V62Z"
        fill="#FAF8F5"
        stroke="#D97706"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Center spine */}
      <line x1="50" y1="65" x2="50" y2="78" stroke="#D97706" strokeWidth="1.2" />
      {/* Scripture lines */}
      <line x1="36" y1="66" x2="46" y2="67" stroke="#9B2C46" strokeWidth="0.75" />
      <line x1="36" y1="69" x2="46" y2="70" stroke="#9B2C46" strokeWidth="0.75" />
      <line x1="54" y1="67" x2="64" y2="66" stroke="#9B2C46" strokeWidth="0.75" />
      <line x1="54" y1="70" x2="64" y2="69" stroke="#9B2C46" strokeWidth="0.75" />

      {/* Heritage Year */}
      <text
        x="50"
        y="88"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="#F59E0B"
        letterSpacing="2"
        fontFamily="serif"
      >
        1926
      </text>

      {/* Monogram Letters TCBC */}
      <text
        x="22"
        y="52"
        fontSize="8"
        fontWeight="800"
        fill="#FDE68A"
        fontFamily="serif"
      >
        T
      </text>
      <text
        x="72"
        y="52"
        fontSize="8"
        fontWeight="800"
        fill="#FDE68A"
        fontFamily="serif"
      >
        C
      </text>
    </svg>
  );
}

/**
 * Large watermark seal for cards and subtle background graphics
 */
export function ChurchLogoWatermark({ className = "w-32 h-32 text-stone-700/30", size = 128 }: ChurchLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Latin Cross Outline */}
      <path
        d="M47 18H53V34H65V39H53V64H47V39H35V34H47V18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Bible Outline */}
      <path
        d="M32 62C38 60 46 62 50 65C54 62 62 60 68 62V75C62 73 54 75 50 78C46 75 38 73 32 75V62Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <line x1="50" y1="65" x2="50" y2="78" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
