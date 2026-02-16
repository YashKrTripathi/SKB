import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const wishes = [
  {
    message: "Bhai, you're absolutely insane (in the best way)! Keep being the LEGENDARY person you are. This year is going to be YOUR year! Let's conquer everything together like the LEGENDS we are! 🔥👑",
    from: "Yash",
    emoji: "🎮"
  },
  {
    message: "Happy Birthday LEGEND! 🎂👑 Working with you has been the best experience. Your dedication makes you a true ICON! May all your dreams come true this year! The world isn't ready for what's coming! 🚀",
    from: "Krushna",
    emoji: "💫"
  }
]

const Wishes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="wishes-section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        Birthday Wishes for the LEGEND 🎁👑
      </motion.h2>

      <div className="wishes-grid">
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            className="wish-card"
            initial={{ opacity: 0, y: 80, rotateY: -30 }}
            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 30px 80px rgba(168, 85, 247, 0.3)"
            }}
          >
            <motion.div
              className="quote-mark"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "
            </motion.div>
            
            <p className="wish-message">{wish.message}</p>
            
            <motion.div
              className="wish-from"
              whileHover={{ scale: 1.1 }}
            >
              <span className="from-emoji">{wish.emoji}</span>
              <span className="from-name">- {wish.from}</span>
            </motion.div>

            {/* Floating hearts */}
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className="floating-heart"
                style={{ 
                  left: `${20 + i * 30}%`,
                  bottom: '10%'
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              >
                💜
              </motion.span>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Wishes
