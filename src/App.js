import React, { Component } from 'react';
import Pads from './pads';

class App extends Component {
  state = {
    pads: [
      {keypad: 81, text: 'Q', id: 'Heater 1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
      {keypad: 87, text: 'W', id: 'Heater 2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
      {keypad: 69, text: 'E', id: 'Heater 3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
      {keypad: 65, text: 'A', id: 'Heater 4', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
      {keypad: 83, text: 'S', id: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
      {keypad: 68, text: 'D', id: 'Open HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
      {keypad: 90, text: 'Z', id: "Kick n' Hat", url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
      {keypad: 88, text: 'X', id: 'Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
      {keypad: 67, text: 'C', id: 'Closed HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'},
    ],
    display: '',
  }

  handleDisplay = (desc) => {
    let display = [...this.state.display];
    display = desc;
    this.setState({
      display: display,
    })
  }

  render() {

    let drumPads = this.state.pads.map(pad => {
      return (
        <Pads
          text={pad.text}
          url={pad.url}
          id={pad.id}
          key={pad.id}
          keypad={pad.keypad}
          handleDisplay={this.handleDisplay}
          handleActive={this.handleActive}
        />
      )
    })

    return (
      <div id='drum-machine'>
        <p id='display'>{this.state.display}</p>
        <div id='drum-pads'>{drumPads}</div>
      </div>
    );
  }
}

export default App;
