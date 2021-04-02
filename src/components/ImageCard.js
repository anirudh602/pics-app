import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({
      spans: spans
    });
  };

  render() {
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        ref={this.imageRef}
        alt={this.props.image.description}
        src={this.props.image.urls.raw}
      />
    );
  }
}

export default ImageCard;
