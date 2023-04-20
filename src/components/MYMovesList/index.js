import {Component} from 'react'
import {AiOutlineArrowRight, AiFillHome, AiFillEdit} from 'react-icons/ai'
import {GiBackpack, GiPathDistance} from 'react-icons/gi'
import {CgCalendarDates} from 'react-icons/cg'
import {IoMdCheckbox} from 'react-icons/io'
import DetailedView from '../DetailedView'
import Disliminar from '../Disliminar'
import './index.css'

class MYMovesList extends Component {
  state = {isActive: false}

  viewDetails = () => {
    const {isActive} = this.state
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {EachMove} = this.props
    const {isActive} = this.state
    const {
      movingFrom,
      movingTo,
      orderDate,
      propertySize,
      totalItems,
      estimateId,
      distance,
    } = EachMove

    const inputDateTime = orderDate
    const dateTime = new Date(inputDateTime)

    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    const month = monthNames[dateTime.getMonth()]
    const day = dateTime.getDate()
    const year = dateTime.getFullYear()

    const formattedTime = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(dateTime)

    const ordinalSuffix = num => {
      if (num >= 11 && num <= 13) {
        return 'th'
      }
      switch (num % 10) {
        case 1:
          return 'st'
        case 2:
          return 'nd'
        case 3:
          return 'rd'
        default:
          return 'th'
      }
    }

    const formattedDate = `${month} ${day}${ordinalSuffix(day)} ${year}`

    return (
      <>
        <div className="from-to-div">
          <div className="from-div">
            <p className="from">From</p>
            <p className="moving-from">{movingFrom}</p>
          </div>
          <AiOutlineArrowRight className="arrow-icon" />
          <div className="to-div">
            <p className="from">To</p>
            <p className="moving-from">{movingTo}</p>
          </div>
          <div className="id-div">
            <p className="request">Request#</p>
            <p className="estimate-id">{estimateId}</p>
          </div>
        </div>

        {/* other details start here */}
        <div className="other-move-details-div">
          <div className="home-div">
            <AiFillHome className="home-icon" />
            <p className="property-size">{propertySize}</p>
          </div>
          <div className="items-div">
            <GiBackpack className="home-icon" />
            <p className="property-size">{totalItems}</p>
          </div>
          <div className="distance-div">
            <GiPathDistance className="home-icon" />
            <p className="property-size">{distance}</p>
          </div>
          <div className="dates-div">
            <CgCalendarDates className="home-icon" />
            <p className="property-size">
              {formattedDate} <span> at </span>
              {formattedTime}
            </p>
            <AiFillEdit className="edit-icon" />
          </div>
          <div className="flexible-div">
            <IoMdCheckbox className="home-icon" />
            <p className="property-size">is flexible</p>
          </div>
          <div>
            <button
              type="button"
              className="view-more-button"
              onClick={this.viewDetails}
            >
              View More details
            </button>
            <button type="button" className="quote-await-button">
              Quotes Awaiting
            </button>
          </div>
        </div>
        <Disliminar />
        <DetailedView isActive={isActive} EachMove={EachMove} />
      </>
    )
  }
}
export default MYMovesList
