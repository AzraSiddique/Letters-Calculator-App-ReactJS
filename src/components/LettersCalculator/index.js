import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {textInput: ''}

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {textInput} = this.state

    const count = textInput.length

    return (
      <div className="container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="text-input">
            Enter the phrase
          </label>
          <input
            type="text"
            id="text-input"
            placeholder="Enter the phrase"
            value={textInput}
            className="input"
            onChange={this.onChangeInput}
          />
          <p className="count">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
