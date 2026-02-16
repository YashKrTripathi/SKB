import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const timelineData = [
  {
    icon: "👶",
    year: "Childhood Era",
    title: "The Beginning of Greatness",
    desc: "A curious little genius was born! Even as a kid, Sarthak had that spark - the one that said 'I'm going to do something EPIC!' 🌟",
    badge: "BABY LEGEND 👶"
  },
  {
    icon: "📚",
    year: "School Days",
    title: "The Knowledge Hunter",
    desc: "While others played, our legend was mastering skills! Teachers knew - this kid was different. Already showing signs of the GOAT! 🐐",
    badge: "RISING STAR ⭐"
  },
  {
    icon: "🎓",
    year: "College Era",
    title: "The Skill Builder",
    desc: "Leveling up HARD! Coding, learning, growing - Sarthak was on a mission to become the best version of himself! 💻🔥",
    badge: "CODE WARRIOR 💻"
  },
  {
    icon: "🤝",
    year: "Team SKY Era",
    title: "The Legend Joins Forces",
    desc: "And then it happened - Sarthak joined Team SKY! The trio was complete. Yash, Sarthak & Krushna - UNSTOPPABLE! 🚀",
    badge: "TEAM LEGEND 🌟"
  },
  {
    icon: "👑",
    year: "NOW",
    title: "THE ABSOLUTE LEGEND",
    desc: "Today, Sarthak stands as a complete package - brilliant coder, amazing friend, and the heartbeat of Team SKY! 💜 THE LEGEND IS COMPLETE! 🏆",
    badge: "LEGENDARY STATUS 👑"
  }
]

const Evolution = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="evolution-section" ref={ref}>
      {/* Animated stars background */}
      <div className="stars-bg">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        🚀 The Evolution of a LEGEND 👑
      </motion.h2>

      <div className="timeline">
        <motion.div 
          className="timeline-line"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
          >
            <motion.div
              className="timeline-content"
              whileHover={{ 
                scale: 1.05, 
                rotate: index % 2 === 0 ? 2 : -2,
                boxShadow: "0 25px 60px rgba(168, 85, 247, 0.4)"
              }}
            >
              <motion.div
                className="timeline-icon"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {item.icon}
              </motion.div>
              
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.desc}</p>
              
              <motion.span
                className="legend-badge"
                animate={{ 
                  boxShadow: [
                    "0 0 10px rgba(250, 112, 154, 0.5)",
                    "0 0 25px rgba(250, 112, 154, 0.8)",
                    "0 0 10px rgba(250, 112, 154, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {item.badge}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Evolution
