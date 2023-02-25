// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, checkEmoji} = props
  const {emojiName, emojiUrl, id} = details

  const emojiClicked = () => {
    checkEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-button" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
