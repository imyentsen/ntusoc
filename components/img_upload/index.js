import React from 'react'

export default class ImgUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = async function(event) {
    const target = event.target
    const files = target.files

    await this.setState({
      preview: URL.createObjectURL(files[0]),
    })
    await this.props.parentCallback(this.state)
    await event.preventDefault()
    await console.log(this.state.preview)
  }

  render() {
    return (
      <div>
        <label htmlFor="upload-button">
          {this.state.preview ? (
            <img
              src={this.state.preview}
              alt="dummy"
              width="300"
              height="auto"
            />
          ) : (
            ''
          )}
        </label>
        <input type="file" id="upload-button" onChange={this.handleChange} />
      </div>
    )
  }
}
