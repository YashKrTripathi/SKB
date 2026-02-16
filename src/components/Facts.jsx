import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const facts = [
  { emoji: "💻", title: "Code Wizard 🧙‍♂️", desc: "Turns coffee into code faster than anyone! A TRUE LEGEND of the keyboard!" },
  { emoji: "🧠", title: "Big Brain LEGEND", desc: "Always comes up with LEGENDARY solutions when we're stuck!" },
  { emoji: "😂", title: "Comedy GOAT 🐐", desc: "The one who keeps the team laughing 24/7! Humor Level: LEGENDARY!" },
  { emoji: "🤝", title: "Team Legend", desc: "Always there when someone needs help! That's what LEGENDS do!" },
  { emoji: "⚡", title: "Energy ICON", desc: "Brings positive vibes like a TRUE LEGEND to every meeting!" },
  { emoji: "🎯", title: "Goal Crusher 👑", desc: "Sets targets and SMASHES them like the LEGEND he is!" },
]

const Facts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  }

  return (
    <section className="facts-section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Why Sarthak is LEGENDARY! 🏆👑
      </motion.h2>

      <motion.div
        className="facts-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            className="fact-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.08, 
              rotate: index % 2 === 0 ? 3 : -3,
              boxShadow: "0 25px 60px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="fact-emoji"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: index * 0.2
              }}
            >
              {fact.emoji}
            </motion.span>
            <h3>{fact.title}</h3>
            <p>{fact.desc}</p>
            <motion.div
              className="card-glow"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Facts
