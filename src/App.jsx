import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import './App.css'

// Components
import Hero from './components/Hero'
import Message from './components/Message'
import Facts from './components/Facts'
import Evolution from './components/Evolution'
import Wishes from './components/Wishes'
import Cake from './components/Cake'
import Final from './components/Final'
import ParticleBackground from './components/ParticleBackground'
import MusicPlayer from './components/MusicPlayer'
import Cursor from './components/Cursor'

function App() {
  const [showConfetti, setShowConfetti] = useState(true)
  const [partyMode, setPartyMode] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const triggerPartyMode = () => {
    setPartyMode(true)
    setTimeout(() => setPartyMode(false), 3000)
  }

  return (
    <div className="app">
      <Cursor />
      <ParticleBackground />
      
      {/* Progress Bar */}
      <motion.div 
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={partyMode ? 500 : 100}
          recycle={true}
          colors={['#FF6B6B', '#4ECDC4', '#FFE66D', '#A855F7', '#EC4899', '#3B82F6', '#F97316']}
        />
      )}

      {/* Floating Legend Text */}
      <FloatingLegend />

      {/* Sections */}
      <Hero onParty={triggerPartyMode} />
      <Message />
      <Facts />
      <Evolution />
      <Wishes />
      <Cake onParty={triggerPartyMode} />
      <Final onParty={triggerPartyMode} />

      {/* Music Player */}
      <MusicPlayer />

      {/* Party Mode Overlay */}
      <AnimatePresence>
        {partyMode && (
          <motion.div
            className="party-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="party-text"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              🎉 PARTY TIME FOR THE LEGEND! 🎉
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Floating Legend Component
function FloatingLegend() {
  const legends = [
    { text: "LEGEND 👑", top: "20%", left: "5%" },
    { text: "THE GOAT 🐐", top: "40%", right: "8%" },
    { text: "ICON ⭐", top: "60%", left: "3%" },
    { text: "LEGENDARY 🔥", top: "80%", right: "5%" },
  ]

  return (
    <div className="floating-legends">
      {legends.map((legend, index) => (
        <motion.div
          key={index}
          className="legend-float"
          style={{ top: legend.top, left: legend.left, right: legend.right }}
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          {legend.text}
        </motion.div>
      ))}
    </div>
  )
}

export default App
