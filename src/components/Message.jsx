import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Message = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="message-section">
      <motion.div
        ref={ref}
        className="message-card"
        initial={{ opacity: 0, y: 100, rotateX: 45 }}
        animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ 
          scale: 1.02, 
          rotateX: 0,
          boxShadow: "0 30px 100px rgba(168, 85, 247, 0.4)"
        }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, type: "spring" }}
        >
          🎉 Hey Legend! 🎉
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p>
            Today is YOUR day, LEGEND! 🌟👑
          </p>
          <p>
            You're not just a teammate, you're family! You're the absolute GOAT! 🐐
            Your energy, your ideas, and your crazy sense of humor make Team SKY 
            the best team ever! We couldn't imagine this journey without you! 🚀
          </p>
          <p>
            Here's to more bugs fixed together, more late-night coding sessions, 
            more chai breaks, and more LEGENDARY wins! 💪🔥
          </p>
          <p className="highlight">
            Once a Legend, Always a Legend! 👑
          </p>
        </motion.div>

        <motion.p 
          className="signature"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          - Your Bros, Yash & Krushna 💜
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="card-sparkle"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Message
