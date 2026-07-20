import { motion } from 'framer-motion'

type BeeProps = {
  className?: string
  size?: number
  animated?: boolean
}

export function Bee({ className = '', size = 72, animated = true }: BeeProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
      animate={animated ? { y: [0, -10, 0], rotate: [-2, 2, -2] } : undefined}
      transition={
        animated
          ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
          : undefined
      }
      aria-hidden="true"
    >
      {/* glow */}
      <div className="absolute inset-0 rounded-full bg-honey-300/40 blur-xl animate-pulse-glow" />

      <svg viewBox="0 0 120 120" className="relative z-10 h-full w-full drop-shadow-lg">
        {/* wings */}
        <g className="origin-center">
          <ellipse
            cx="38"
            cy="42"
            rx="22"
            ry="12"
            fill="rgba(255,255,255,0.75)"
            stroke="#f5b921"
            strokeWidth="1.5"
            className={animated ? 'animate-wing-flap origin-[38px_42px]' : ''}
          />
          <ellipse
            cx="82"
            cy="42"
            rx="22"
            ry="12"
            fill="rgba(255,255,255,0.75)"
            stroke="#f5b921"
            strokeWidth="1.5"
            className={animated ? 'animate-wing-flap origin-[82px_42px]' : ''}
          />
        </g>

        {/* body */}
        <ellipse cx="60" cy="68" rx="28" ry="34" fill="#1a1208" />
        <rect x="36" y="48" width="48" height="10" rx="4" fill="#f5b921" />
        <rect x="36" y="64" width="48" height="10" rx="4" fill="#f5b921" />
        <rect x="36" y="80" width="48" height="10" rx="4" fill="#f5b921" />

        {/* head */}
        <circle cx="60" cy="36" r="16" fill="#1a1208" />
        <circle cx="54" cy="34" r="3" fill="#fff8e6" />
        <circle cx="66" cy="34" r="3" fill="#fff8e6" />
        <circle cx="54.5" cy="34.5" r="1.2" fill="#1a1208" />
        <circle cx="66.5" cy="34.5" r="1.2" fill="#1a1208" />

        {/* antennae */}
        <path d="M52 24 C48 14, 42 12, 40 10" stroke="#1a1208" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M68 24 C72 14, 78 12, 80 10" stroke="#1a1208" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="40" cy="10" r="3" fill="#f5b921" />
        <circle cx="80" cy="10" r="3" fill="#f5b921" />

        {/* stinger */}
        <path d="M60 100 L56 112 L64 112 Z" fill="#1a1208" />
      </svg>
    </motion.div>
  )
}
