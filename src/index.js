import React, { Component } from 'react'
import { render } from 'react-dom'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
import axios from 'axios'
import { css } from 'glamor'

const starStyle = css({
  background: 'blue',
  '& img .color1': { fill: 'orange !important' }
})

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }
  }
  // componentDidMount() {
  //   // Request for images tagged xmas
  //   axios.get('https://res.cloudinary.com/jonlin/image/list/testTag.json')
  //     .then(res => {
  //       console.log(res.data.resources);
  //       this.setState({ gallery: res.data.resources })
  //     });
  // }

  // uploadWidget() {
  //   let that = this;
  //   cloudinary.openUploadWidget({ cloud_name: "jonlin", upload_preset: 'fenhrkk9', tags: ['testTag'] },
  //     function (error, result) {
  //       // Update gallery state with newly uploaded image
  //       that.setState({ gallery: that.state.gallery.concat(result) })
  //     });
  // } https://res.cloudinary.com/jonlin/image/upload/v1552571174/starIcon.svg

  render() {
    return (
      <div className="main">
        <h1>Galleria</h1>

        {/* <div className="upload">
          <button onClick={this.uploadWidget.bind(this)} className="upload-button">
            Add Image
          </button>
        </div> */}

        {/* <svg>
          <use xmlns:link="http://www.w3.org/1999/xlink" xlink:href="path/to/svg-file.svg#circle"></use>
        </svg> */}

        <div className="gallery" {...starStyle}>
          <CloudinaryContext cloudName="jonlin">
            <Image publicId={'starIcon'}>
              <Transformation
                crop="scale"
                width="300"
                height="200"
                dpr="auto"
                responsive_placeholder="blank"
              />
            </Image>
          </CloudinaryContext>
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}

render(<Main />, document.getElementById('container'));

{/* {
              this.state.gallery.map(data => {
                return (
                  <div className="responsive" key={data.public_id}>
                    <div className="img">
                      <a target="_blank" href={`https://res.cloudinary.com/jonlin/image/upload/${data.public_id}.svg`}>

                      </a>
                      <div className="desc">Created at {data.created_at}</div>
                    </div>
                  </div>
                )
              })
            } */}
