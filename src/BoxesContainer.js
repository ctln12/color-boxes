import React, { Component } from 'react';
import Box from "./Box";
import './BoxesContainer.css';

class BoxesContainer extends Component {
  static defaultProps = {
    allColors: ["#ffba08", "#faa307", "#f48c06", "#e85d04", "#dc2f02", "#d00000", "#9d0208", "#6a040f", "#370617", "#03071e", "#001845", "#002855", "#023e7d", "#0353a4", "#0466c8", "#057af0", "#238ffb", "#4BA3FB"]
  }
  render() {
    const boxes = this.props.allColors.map(
      (color) => <Box allColors={this.props.allColors} startColor={color} />
    )
    return <div className="BoxesContainer">{boxes}</div>;
  }
}

export default BoxesContainer;
