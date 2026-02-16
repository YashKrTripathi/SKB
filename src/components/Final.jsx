import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Final = ({ onParty }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section className="final-section" ref={ref}>
      <motion.div
        className="team-logo"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        👑
      </motion.div>

      <motion.h2
        className="rainbow-text"
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 100 }}
      >
        TEAM SKY FOREVER!
      </motion.h2>

      <motion.div
        className="team-members"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
      >
        <span className="member">Yash</span>
        <span className="member-separator">•</span>
        <motion.span
          className="member legend-member"
          animate={{
            textShadow: [
              "0 0 10px gold",
              "0 0 30px gold",
              "0 0 10px gold"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          SARTHAK THE LEGEND
        </motion.span>
        <span className="member-separator">•</span>
        <span className="member">Krushna</span>
      </motion.div>

      <motion.p
        className="legend-tagline"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        🏆 Once a Legend, Always a Legend! 🏆
      </motion.p>

      <motion.button
        className="party-button"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onParty}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7 }}
      >
        🎊 PARTY MODE FOR THE LEGEND! 🎊
      </motion.button>

      {/* Background decorations */}
      <div className="final-decorations">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="decoration"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['✨', '⭐', '🌟', '💫', '👑'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Final
