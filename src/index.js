import React, { Component } from 'react'
import { render } from 'react-dom'

import Icon from './Icon'

class Main extends Component {
  render() {
    return (
      <div>
        <Icon
          iconId="starIcon"
          color1="orange"
        />

        <Icon
          iconId="checklist1"
          color1="red"
          color2="pink"
          color3="blue"
          width="200"
          height="200"
        />
      </div>
    )
  }
}

render(<Main />, document.getElementById('container'));
