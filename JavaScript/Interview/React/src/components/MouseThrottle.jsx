import { useState } from 'react'

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

function MouseThrottle() {
  const [updateCount, setUpdateCount] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [background, setBackground] = useState('linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)')

  const updateMousePosition = (e) => {
    setUpdateCount(prev => prev + 1)
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.round(e.clientX - rect.left)
    const y = Math.round(e.clientY - rect.top)
    
    setMouseX(x)
    setMouseY(y)
    
    // Visual feedback
    setBackground(`radial-gradient(circle at ${x}px ${y}px, #667eea, #c3cfe2)`)
  }

  // TODO: Create throttled version of updateMousePosition
  // Uncomment and modify after implementing throttle:
  // const throttledMouseMove = throttle(updateMousePosition, 100)

  const handleMouseMove = (e) => {
    // TODO: Call throttledMouseMove instead of updateMousePosition directly
    // throttledMouseMove(e)
    
    // TEMPORARY: Remove this line after implementing throttle
    updateMousePosition(e)
  }

  return (
    <div className="section">
      <h2>🖱️ Throttling - Mouse Movement Tracker</h2>
      <p className="description">
        Move your mouse in the box. Implement throttling to limit updates!
      </p>

      <div
        className="mouse-tracker"
        onMouseMove={handleMouseMove}
        style={{ background }}
      >
        <p>Move your mouse here</p>
      </div>

      <div className="stats">
        <span>Position Updates: <strong>{updateCount}</strong></span>
        <span>X: <strong>{mouseX}</strong> Y: <strong>{mouseY}</strong></span>
      </div>
    </div>
  )
}

export default MouseThrottle
