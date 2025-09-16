import './App.css'

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to My Dummy Website</h1>
        <p>Your one-stop place for awesome placeholder content 🚀</p>
      </header>

      {/* Info Section */}
      <section className="info">
        <h2>About This Site</h2>
        <p>
          This is a baseline website built with React + Vite. 
          You can replace this text with your real content later. 
          Right now, it’s just serving as a demo layout.
        </p>
      </section>
    </>
  )
}

export default App
