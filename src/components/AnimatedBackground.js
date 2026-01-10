import React from 'react';

export const AnimatedBackground = () => {
  return (
    <svg
      className="animated-bg"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0px, 0px); }
            25% { transform: translate(20px, -20px); }
            50% { transform: translate(-10px, 15px); }
            75% { transform: translate(-15px, -10px); }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(0px, 0px); }
            25% { transform: translate(-25px, 15px); }
            50% { transform: translate(15px, -20px); }
            75% { transform: translate(20px, 10px); }
          }
          @keyframes float3 {
            0%, 100% { transform: translate(0px, 0px); }
            25% { transform: translate(15px, 25px); }
            50% { transform: translate(-20px, -10px); }
            75% { transform: translate(-10px, 20px); }
          }
          @keyframes float4 {
            0%, 100% { transform: translate(0px, 0px); }
            25% { transform: translate(-20px, -25px); }
            50% { transform: translate(25px, 15px); }
            75% { transform: translate(-15px, -20px); }
          }
          @keyframes glow-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
          }
          .dot { filter: drop-shadow(0 0 8px rgba(88, 166, 255, 0.6)); }
          .dot:hover { filter: drop-shadow(0 0 16px rgba(88, 166, 255, 1)); }
        `}</style>
      </defs>

      {/* Fond dégradé subtil */}
      <rect width="1200" height="800" fill="url(#bgGradient)" />
      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(108, 99, 255, 0.08)" />
          <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
        </radialGradient>
      </defs>

      {/* Groupe 1 - Top Left */}
      <g style={{ animation: 'float1 8s ease-in-out infinite' }}>
        <circle cx="100" cy="100" r="6" fill="#58A6FF" className="dot" opacity="0.5" />
        <circle cx="140" cy="140" r="4" fill="#6C63FF" className="dot" opacity="0.4" />
        <circle cx="160" cy="110" r="5" fill="#00C2FF" className="dot" opacity="0.6" />
      </g>

      {/* Groupe 2 - Top Right */}
      <g style={{ animation: 'float2 10s ease-in-out infinite' }}>
        <circle cx="1100" cy="80" r="5" fill="#00C2FF" className="dot" opacity="0.5" />
        <circle cx="1050" cy="150" r="6" fill="#58A6FF" className="dot" opacity="0.4" />
        <circle cx="1120" cy="120" r="4" fill="#6C63FF" className="dot" opacity="0.6" />
      </g>

      {/* Groupe 3 - Center */}
      <g style={{ animation: 'float3 12s ease-in-out infinite' }}>
        <circle cx="600" cy="400" r="7" fill="#58A6FF" className="dot" opacity="0.3" />
        <circle cx="650" cy="380" r="5" fill="#00C2FF" className="dot" opacity="0.5" />
        <circle cx="580" cy="450" r="4" fill="#6C63FF" className="dot" opacity="0.4" />
        <circle cx="700" cy="420" r="6" fill="#00C2FF" className="dot" opacity="0.35" />
      </g>

      {/* Groupe 4 - Bottom Left */}
      <g style={{ animation: 'float4 11s ease-in-out infinite' }}>
        <circle cx="150" cy="700" r="5" fill="#6C63FF" className="dot" opacity="0.4" />
        <circle cx="200" cy="680" r="6" fill="#58A6FF" className="dot" opacity="0.5" />
        <circle cx="180" cy="750" r="4" fill="#00C2FF" className="dot" opacity="0.3" />
      </g>

      {/* Groupe 5 - Bottom Right */}
      <g style={{ animation: 'float1 9s ease-in-out infinite 1s' }}>
        <circle cx="1050" cy="700" r="6" fill="#00C2FF" className="dot" opacity="0.4" />
        <circle cx="1100" cy="750" r="5" fill="#58A6FF" className="dot" opacity="0.5" />
        <circle cx="1000" cy="680" r="4" fill="#6C63FF" className="dot" opacity="0.35" />
      </g>

      {/* Groupe 6 - Right Side */}
      <g style={{ animation: 'float2 13s ease-in-out infinite 2s' }}>
        <circle cx="950" cy="300" r="5" fill="#58A6FF" className="dot" opacity="0.4" />
        <circle cx="1000" cy="350" r="6" fill="#00C2FF" className="dot" opacity="0.5" />
        <circle cx="980" cy="250" r="4" fill="#6C63FF" className="dot" opacity="0.3" />
      </g>

      {/* Groupe 7 - Left Side */}
      <g style={{ animation: 'float3 14s ease-in-out infinite 0.5s' }}>
        <circle cx="50" cy="400" r="6" fill="#00C2FF" className="dot" opacity="0.4" />
        <circle cx="80" cy="450" r="5" fill="#58A6FF" className="dot" opacity="0.5" />
        <circle cx="60" cy="350" r="4" fill="#6C63FF" className="dot" opacity="0.35" />
      </g>
    </svg>
  );
};
