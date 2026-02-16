import { motion } from 'framer-motion'

const Hero = ({ onParty }) => {
  return (
    <section className="hero">
      <div className="hero-bg-shapes">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="shape"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 3 + 1}rem`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['🎈', '🎉', '🎊', '⭐', '🌟', '💫', '🎁', '🎀'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-title"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          🎂 HAPPY BIRTHDAY 🎂
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          SARTHAK THE LEGEND! 👑
        </motion.p>

        <motion.div
          className="team-badge"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onParty}
        >
          🚀 From Team SKY with ❤️ | 👑 The One & Only
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>👇</span>
        <p>Scroll to explore</p>
      </motion.div>
    </section>
  )
}

export default Hero
