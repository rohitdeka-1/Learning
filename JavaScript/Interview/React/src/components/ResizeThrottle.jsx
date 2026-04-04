import { useState, useEffect } from 'react'

// ========================================
// TODO: Implement throttle function here
// ========================================
function throttle(func, limit) {
  // YOUR CODE HERE
  // Hint: Use a flag to track if function can be called
  
  return function(...args) {
    // YOUR IMPLEMENTATION
  }
}

function ResizeThrottle() {
  const [resizeCount, setResizeCount] = useState(0)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setResizeCount(prev => prev + 1)
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    // TODO: Create throttled version of handleResize
    // Uncomment and modify after implementing throttle:
    // const throttledResize = throttle(handleResize, 500)
    
    // TODO: Add throttledResize as event listener instead of handleResize
    // window.addEventListener('resize', throttledResize)
    // return () => window.removeEventListener('resize', throttledResize)
    
    // TEMPORARY: Remove these lines after implementing throttle
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="section">
      <h2>📏 Throttling - Window Resize</h2>
      <p className="description">
        Resize the browser window. Implement throttling for resize events!
      </p>

      <div className="stats">
        <span>Resize Events: <strong>{resizeCount}</strong></span>
        <span>Window Size: <strong>{windowSize.width}px × {windowSize.height}px</strong></span>
      </div>
    </div>
  )
}

export default ResizeThrottle
