/* global KerasJS */
/* global Image */
/* global URL */

import React from 'react'
import Dropzone from 'react-dropzone'
import { scalePreserveRatio, toNormalizedRGB } from '../lib/utils'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      prediction: null,
      confidence: null
    }
  }

  loadModel () {
    return new KerasJS.Model({
      filepaths: {
        model: 'static/models/model.json',
        weights: 'static/models/weights.buf',
        metadata: 'static/models/metadata.json'
      },
      gpu: true
    })
  }

  predict (inputData) {
    this.model.predict({ input: inputData }).then(result => {
      const value = Math.max.apply(Math, result.output)
      const threshold = 5
      const isError = (100 - Math.abs(value) * 100) > threshold
      this.setState({
        prediction: (isError) ? -1 : result.output.indexOf(value),
        confidence: value
      })
    }).catch(err => console.log(err))
  }

  onDrop (acceptedFiles) {
    acceptedFiles.forEach(file => {
      const ctx = this.refs.canvas.getContext('2d')
      const img = new Image()

      img.onload = () => {
        const dstWidth = 200
        const dstHeight = 200

        const scaler = scalePreserveRatio(img.width, img.height, dstWidth, dstHeight)
        ctx.drawImage(img, 0, 0, img.width * scaler, img.height * scaler)

        const { data } = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)
        this.predict(toNormalizedRGB(data, dstWidth * dstHeight))
      }
      img.src = URL.createObjectURL(file)
    })
  }

  componentDidMount () {
    this.model = this.loadModel()
    this.model.ready().then(() => {
      console.log(':)')
    }).catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <style jsx>{`
          canvas {
            border: 2px solid #fff;
            display: inline-block;
            margin: auto;
          }

          .result {
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            margin-top: 32px;
          }
        `}</style>

        <Dropzone className='dropzone' activeClassName='dropzone-active' onDrop={this.onDrop.bind(this)} />
        <canvas width='200' height='200' ref='canvas' />

        {this.state.prediction === 1 &&
          <div className='result'>The photo is a render</div>
        }
        {this.state.prediction === 0 &&
          <div className='result'>The photo is "real"</div>
        }
        {this.state.prediction === -1 &&
          <div className='result'>Mmm, not sure...</div>
        }
      </div>
    )
  }
}
