// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, restartGame} = props

  const buttonClicked = () => {
    restartGame()
  }

  const LOSE_IMAGE =
    'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const imageUrl = score === 12 ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = score === 12 ? 'You Won' : 'You Lose'
  const scoreLabel = score === 12 ? 'Best Score' : 'Score'

  return (
    <div className="card-container">
      <div className="details-section">
        <h1 className="result-heading">{gameStatus}</h1>
        <p className="para">{scoreLabel}</p>
        <p className="result-score">{score}/12</p>
        <button
          className="restart-button"
          type="button"
          onClick={buttonClicked}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imageUrl} alt="win or lose" className="result-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
