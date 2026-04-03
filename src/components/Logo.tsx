export function Logo({ className, showText = true }: { className?: string, showText?: boolean }) {
  const viewBox = showText ? "0 0 200 180" : "0 0 200 140";
  return (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className={className}>
      <g stroke="#C9952A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Base Lines */}
        <line x1="15" y1="130" x2="185" y2="130" />
        <line x1="15" y1="135" x2="185" y2="135" />
        
        {/* Left Tower */}
        <rect x="25" y="45" width="40" height="85" />
        <rect x="20" y="25" width="50" height="20" />
        {/* Left Tower Crenellations */}
        <path d="M 20 25 L 20 15 L 28 15 L 28 25 M 31 25 L 31 15 L 39 15 L 39 25 M 42 25 L 42 15 L 50 15 L 50 25 M 53 25 L 53 15 L 61 15 L 61 25 M 64 25 L 64 15 L 70 15 L 70 25" />
        <circle cx="35" cy="35" r="2.5" />
        <circle cx="55" cy="35" r="2.5" />

        {/* Right Tower */}
        <rect x="135" y="45" width="40" height="85" />
        <rect x="130" y="25" width="50" height="20" />
        {/* Right Tower Crenellations */}
        <path d="M 130 25 L 130 15 L 138 15 L 138 25 M 141 25 L 141 15 L 149 15 L 149 25 M 152 25 L 152 15 L 160 15 L 160 25 M 163 25 L 163 15 L 171 15 L 171 25 M 174 25 L 174 15 L 180 15 L 180 25" />
        <circle cx="145" cy="35" r="2.5" />
        <circle cx="165" cy="35" r="2.5" />

        {/* Center Section */}
        <rect x="65" y="65" width="70" height="65" />
        <rect x="65" y="55" width="70" height="10" />
        {/* Center Crenellations */}
        <path d="M 65 55 L 65 48 L 72 48 L 72 55 M 75 55 L 75 48 L 82 48 L 82 55 M 85 55 L 85 48 L 92 48 L 92 55 M 95 55 L 95 48 L 102 48 L 102 55 M 105 55 L 105 48 L 112 48 L 112 55 M 115 55 L 115 48 L 122 48 L 122 55 M 125 55 L 125 48 L 132 48 L 132 55 M 135 55 L 135 48 L 135 55" />
        
        {/* Archway */}
        <path d="M 75 130 L 75 95 A 25 25 0 0 1 125 95 L 125 130" />
        <path d="M 82 130 L 82 95 A 18 18 0 0 1 118 95 L 118 130" />
        {/* Archway dots */}
        <path d="M 80 95 A 20 20 0 0 1 120 95" strokeDasharray="1 5" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Animals */}
      <g fill="#C9952A">
        <defs>
          <path id="animal" d="M 0 4 Q 2 2 4 3 L 5 1 L 6 1 L 5 4 L 6 6 L 5 8 L 4 8 L 4 6 L 2 6 L 2 8 L 1 8 L 1 5 L -1 5 Z" transform="scale(1.2)"/>
        </defs>
        {/* Left Tower Animals */}
        <use href="#animal" x="32" y="55" />
        <use href="#animal" x="48" y="55" />
        <use href="#animal" x="32" y="75" />
        <use href="#animal" x="48" y="75" />
        <use href="#animal" x="32" y="95" />
        <use href="#animal" x="48" y="95" />
        <use href="#animal" x="32" y="115" />
        <use href="#animal" x="48" y="115" />

        {/* Right Tower Animals */}
        <use href="#animal" x="142" y="55" />
        <use href="#animal" x="158" y="55" />
        <use href="#animal" x="142" y="75" />
        <use href="#animal" x="158" y="75" />
        <use href="#animal" x="142" y="95" />
        <use href="#animal" x="158" y="95" />
        <use href="#animal" x="142" y="115" />
        <use href="#animal" x="158" y="115" />

        {/* Center Animals */}
        <use href="#animal" x="68" y="100" />
        <use href="#animal" x="122" y="100" />
        <use href="#animal" x="68" y="120" />
        <use href="#animal" x="122" y="120" />
      </g>

      {/* Text */}
      {showText && (
        <text x="100" y="170" fontFamily="Playfair Display, serif" fontSize="32" textAnchor="middle" fill="#3B3B7A" letterSpacing="0.15em">BABYLON</text>
      )}
    </svg>
  );
}
