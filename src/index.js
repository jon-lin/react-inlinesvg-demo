import React, { Component } from 'react'
import { render } from 'react-dom'
import { css } from 'glamor'
import SVG from 'react-inlinesvg'

const starStyle = css({
  '& .color1': { fill: 'pink' }
})

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }
  }

  render() {
    return (
      <SVG
        className={starStyle}
        src="https://res.cloudinary.com/jonlin/image/upload/v1552571174/starIcon.svg"
      />
    )
  }
}

render(<Main />, document.getElementById('container'));
