import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>CI/CD Pipeline Test - Updated</p>
      <button onClick={() => navigate('/login')}>Logout</button>
    </div>
  )
}

export default Home
