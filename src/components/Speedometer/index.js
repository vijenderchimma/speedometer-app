// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    } else {
      this.setState(prevState => ({speed: 200}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    } else {
      this.setState(prevState => ({speed: 0}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="main-heading">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="button-container">
          <button
            className="increment"
            onClick={this.onIncrement}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="decrement"
            onClick={this.onDecrement}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
