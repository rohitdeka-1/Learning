import { useState } from 'react'

// ========================================
// TODO: Implement debounce function here
// ========================================
function debounce(func, delay) {
  // YOUR CODE HERE
  // Hint: Use setTimeout and clearTimeout
  
  return function(...args) {
    // YOUR IMPLEMENTATION
  }
}

function SearchDebounce() {
  const [searchQuery, setSearchQuery] = useState('')
  const [products, setProducts] = useState([])
  const [apiCallCount, setApiCallCount] = useState(0)
  const [lastCallTime, setLastCallTime] = useState('-')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // API call function
  const searchProducts = async (query) => {
    if (!query.trim()) {
      setProducts([])
      return
    }

    setApiCallCount(prev => prev + 1)
    setLastCallTime(new Date().toLocaleTimeString())
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=10`
      )
      const data = await response.json()
      setProducts(data.products)
    } catch (err) {
      setError('Error fetching products')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  // TODO: Create debounced version of searchProducts
  // Uncomment and modify after implementing debounce:
  // const debouncedSearch = debounce(searchProducts, 500)

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    
    // TODO: Call debouncedSearch instead of searchProducts directly
    // debouncedSearch(value)
    
    // TEMPORARY: Remove this line after implementing debounce
    searchProducts(value)
  }

  return (
    <div className="section">
      <h2>🔍 Debouncing - Search Products</h2>
      <p className="description">
        Type to search products. Implement debouncing to reduce API calls!
      </p>

      <input
        type="text"
        className="search-input"
        placeholder="Search products (e.g., phone, laptop, perfume)..."
        value={searchQuery}
        onChange={handleInputChange}
        autoComplete="off"
      />

      <div className="stats">
        <span>API Calls: <strong>{apiCallCount}</strong></span>
        <span>Last Call: <strong>{lastCallTime}</strong></span>
      </div>

      <div className="results">
        {loading && <div className="loading">🔄 Searching...</div>}
        {error && <div className="error">❌ {error}</div>}
        {!loading && !error && products.length === 0 && searchQuery && (
          <div className="loading">No products found</div>
        )}
        {!loading && products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description.substring(0, 100)}...</p>
              <span className="product-price">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchDebounce
