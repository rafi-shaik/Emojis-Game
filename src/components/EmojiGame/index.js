import {Component} from 'react'
import './index.css'

import Navbar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, isPlaying: true, idList: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  checkEmoji = uniqueId => {
    const {idList, score, topScore} = this.state

    if (idList.includes(uniqueId)) {
      this.setState({isPlaying: false})
      if (topScore < score) {
        this.setState({topScore: score})
      }
    } else if (idList.length === 11) {
      this.setState({score: 12, topScore: 12, isPlaying: false})
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        idList: [...prevState.idList, uniqueId],
      }))
    }
  }

  restartGame = () => {
    this.setState({score: 0, isPlaying: true, idList: []})
  }

  render() {
    const shuffledList = this.shuffledEmojisList()
    const {score, isPlaying, topScore} = this.state

    return (
      <div className="bg-container">
        <Navbar condition={isPlaying} score={score} topScore={topScore} />
        <div className="emoji-game-body">
          {isPlaying ? (
            <ul className="emojis-container">
              {shuffledList.map(each => (
                <EmojiCard
                  details={each}
                  key={each.id}
                  checkEmoji={this.checkEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard score={score} restartGame={this.restartGame} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
