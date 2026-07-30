import React, { useState, useEffect } from 'react'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 bg-transparent z-200">
      <div 
        className="h-full transition-[width] duration-150 ease-out" 
        style={{ 
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #2563EB, #60A5FA)'
        }} 
      />
    </div>
  )
}

export default ScrollProgress
