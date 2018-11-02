import React, { Component } from 'react';

class Pads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfClass: 'inactivePad',
    }
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress(event) {
    if (event.keyCode === this.props.keypad) {
      this.playSound();
    }
  }

  activatePad() {
    if (this.state.nameOfClass === 'inactivePad') {
      this.setState({
        nameOfClass: 'activePad'
      })
    } else {
      this.setState({
        nameOfClass: 'inactivePad'
      })
    }

  }

  playSound(event) {
    const sound = document.getElementById(this.props.text);
    sound.currentTime = 0;
    sound.play();
    this.props.handleDisplay(this.props.id);
    this.activatePad();
    setTimeout(() => this.activatePad(), 100)
  }

  render() {
  return (
    <div id={this.props.id} onClick={this.playSound}>
      <button className={this.state.nameOfClass}>
        {this.props.text}
        <audio className='clip' id={this.props.text} src={this.props.url}></audio>
      </button>
    </div>
  )
}
}

export default Pads
