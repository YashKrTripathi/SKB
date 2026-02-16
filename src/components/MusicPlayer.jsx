import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
      setShowPrompt(false)
    }
    setIsPlaying(!isPlaying)
  }

  const startMusic = () => {
    audioRef.current.play()
    setIsPlaying(true)
    setShowPrompt(false)
  }

  return (
    <>
      {/* Music Toggle Button */}
      <motion.button
        className="music-toggle"
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isPlaying ? {
          boxShadow: [
            "0 0 10px rgba(168, 85, 247, 0.5)",
            "0 0 30px rgba(168, 85, 247, 0.8)",
            "0 0 10px rgba(168, 85, 247, 0.5)"
          ]
        } : {}}
        transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
      >
        {isPlaying ? '🎵' : '🔇'}
      </motion.button>

      {/* Music Prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            className="music-prompt"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.05 }}
            onClick={startMusic}
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              🎵 Click to Start Music! 🎶
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visualizer when playing */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className="music-visualizer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="visualizer-bar"
                animate={{
                  height: [10, 30 + Math.random() * 20, 10],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MusicPlayer
