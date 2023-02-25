// Write your code here.
import './index.css'

const NavBar = props => {
  const {condition, score, topScore} = props

  return (
    <nav className="navbar">
      <div className="title-with-score-container">
        <div className="navbar-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="navbar-image"
          />
          <h1 className="heading">Emoji Game</h1>
        </div>
        {condition && (
          <div className="scores-container">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
