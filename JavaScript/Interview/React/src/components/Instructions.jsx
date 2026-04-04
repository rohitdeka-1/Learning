function Instructions() {
  return (
    <div className="section implementation">
      <h2>📝 Your Task</h2>
      <p>Implement debounce and throttle functions in each component:</p>
      <ul>
        <li>
          <strong>debounce()</strong> in <code>SearchDebounce.jsx</code> - 
          Delay execution until user stops typing (500ms recommended)
        </li>
        <li>
          <strong>throttle()</strong> in <code>MouseThrottle.jsx</code> - 
          Limit execution to once per time period (100ms recommended)
        </li>
        <li>
          <strong>throttle()</strong> in <code>ResizeThrottle.jsx</code> - 
          Limit execution to once per time period (500ms recommended)
        </li>
      </ul>
      <p style={{ marginTop: '15px' }}>
        <strong>💡 Tips:</strong>
      </p>
      <ul>
        <li><strong>Debounce:</strong> Use setTimeout/clearTimeout to delay execution</li>
        <li><strong>Throttle:</strong> Use a boolean flag to control execution frequency</li>
        <li>Watch the counters decrease as you implement the optimizations!</li>
        <li>The API is <strong>https://dummyjson.com/products/search</strong> (free, no auth)</li>
      </ul>
    </div>
  )
}

export default Instructions
