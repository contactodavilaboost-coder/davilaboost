import { COLORS } from "../lib/brand";

type LogoProps = {
  size?: number;
};

export function Logo({ size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 20 L60 20 L80 50 L60 80 L20 80 L40 50 Z"
        stroke={COLORS.tealLight}
        strokeWidth="6"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M30 35 L55 35 L68 50 L55 65 L30 65"
        stroke={COLORS.tealLight}
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}