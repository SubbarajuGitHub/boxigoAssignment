import {Component} from 'react'
import './index.css'

class LastItemDetails extends Component {
  render() {
    const {LastItem} = this.props
    const {displayName, typeOptions, qty} = LastItem
    return (
      <div className="last-items-div">
        <div className="diplayname-qty">
          <p className="display-name-last">{displayName}</p>
          <p className="qty">{qty}</p>
        </div>
        <p className="options">{typeOptions}</p>
      </div>
    )
  }
}
export default LastItemDetails
