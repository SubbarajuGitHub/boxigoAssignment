import {Component} from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import InventoryItem from '../InventoryItem'
import './index.css'

class Inventory extends Component {
  state = {isActiveInventory: false}

  showInventoryItems = () => {
    const {isActiveInventory} = this.state
    this.setState(prevState => ({
      isActiveInventory: !prevState.isActiveInventory,
    }))
  }

  render() {
    const {EachInventoryItem} = this.props
    const {displayName, order, category} = EachInventoryItem
    const {isActiveInventory} = this.state
    const InventoryOutput = isActiveInventory ? (
      <>
        <div className="inventory-item-div">
          <p className="furnature-name">
            {displayName} <span className="span-order"> {order}</span>
          </p>
          <RiArrowDropDownLine
            className="drop-down-icon"
            onClick={this.showInventoryItems}
          />
        </div>
        <ul className="all-items-details-main-div">
          {category.map(EachDeatiledItem => (
            <InventoryItem EachDeatiledItem={EachDeatiledItem} />
          ))}
        </ul>
      </>
    ) : (
      <div className="inventory-item-div">
        <p className="furnature-name">
          {displayName} <span className="span-order"> {order}</span>
        </p>
        <RiArrowDropDownLine
          className="drop-down-icon"
          onClick={this.showInventoryItems}
        />
      </div>
    )
    return <>{InventoryOutput}</>
  }
}
export default Inventory
