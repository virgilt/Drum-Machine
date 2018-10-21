import React, { Component } from 'react';

class Pads extends Component {
  constructor(props) {
    super(props);
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

  playSound(event) {
    const sound = document.getElementById(this.props.text);
    sound.currentTime = 0;
    sound.play();
    this.props.handleDisplay(this.props.id);
  }

  render() {
  return (
    <div className='drum-pad' id={this.props.id} onClick={this.playSound}>
      <button>
        {this.props.text}
        <audio className='clip' id={this.props.text} src={this.props.url}></audio>
      </button>
    </div>
  )
}
}

export default Pads
