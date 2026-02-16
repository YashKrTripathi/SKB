import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [sparkles, setSparkles] = useState([])
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Add sparkle trail
      if (Math.random() > 0.7) {
        const newSparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          emoji: ['✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 4)]
        }
        setSparkles(prev => [...prev, newSparkle])
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id))
        }, 600)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleClick = (e) => {
      // Create burst of sparkles on click
      const newSparkles = []
      for (let i = 0; i < 8; i++) {
        newSparkles.push({
          id: Date.now() + i,
          x: e.clientX + (Math.random() - 0.5) * 50,
          y: e.clientY + (Math.random() - 0.5) * 50,
          emoji: ['🎉', '🎊', '⭐', '🌟', '💫', '✨'][Math.floor(Math.random() * 6)]
        })
      }
      setSparkles(prev => [...prev, ...newSparkles])
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => !newSparkles.find(ns => ns.id === s.id)))
      }, 600)
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
        }}
      >
        🎈
      </motion.div>

      {/* Sparkle Trail */}
      <AnimatePresence>
        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            className="sparkle"
            style={{
              left: sparkle.x,
              top: sparkle.y,
            }}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 1, y: -30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {sparkle.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}

export default Cursor
