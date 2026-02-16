import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Cake = ({ onParty }) => {
  const [candlesBlown, setCandlesBlown] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const blowCandles = () => {
    if (candlesBlown) return
    setCandlesBlown(true)
    onParty()
  }

  return (
    <section className="cake-section" ref={ref}>
      <motion.div
        className="cake-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Candles */}
        <div className="candles">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="candle"
              animate={!candlesBlown ? {
                opacity: [1, 0.7, 1],
                scale: [1, 1.1, 1],
              } : {}}
              transition={{ duration: 0.5, repeat: candlesBlown ? 0 : Infinity, delay: i * 0.1 }}
            >
              {candlesBlown ? '💨' : '🕯️'}
            </motion.span>
          ))}
        </div>

        {/* Cake */}
        <motion.div
          className="cake"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={blowCandles}
        >
          🎂
        </motion.div>

        {/* Text */}
        <AnimatePresence mode="wait">
          {!candlesBlown ? (
            <motion.p
              key="blow"
              className="cake-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              👆 Click the cake to blow the candles!
            </motion.p>
          ) : (
            <motion.p
              key="happy"
              className="cake-text celebration"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              🎉 HAPPY BIRTHDAY SARTHAK THE LEGEND! 🎉
            </motion.p>
          )}
        </AnimatePresence>

        {/* Celebration emojis when candles blown */}
        <AnimatePresence>
          {candlesBlown && (
            <>
              {[...Array(20)].map((_, i) => (
                <motion.span
                  key={i}
                  className="celebration-emoji"
                  style={{
                    position: 'absolute',
                    left: `${Math.random() * 100}%`,
                    top: '50%',
                  }}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{
                    y: -200 - Math.random() * 200,
                    x: (Math.random() - 0.5) * 200,
                    opacity: 0,
                    rotate: Math.random() * 360,
                  }}
                  transition={{ duration: 2, ease: "easeOut" }}
                >
                  {['🎉', '🎊', '⭐', '🌟', '💫', '🎈', '🥳'][Math.floor(Math.random() * 7)]}
                </motion.span>
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Cake
