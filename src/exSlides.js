import React, { Component } from "react";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      slideData: [],
      disableNext: false,
      disablePrev: true,
      disableRestart: true,
    };
  }

  componentDidMount() {}

  handleRestart = () => {
    this.setState({
      i: 0,
      disablePrev: true,
      disableRestart: true,
      disableNext: false,
    });
    console.log("restart", this.state.i);
    console.log(this.props.slides[0]);
  };

  handlePrev = () => {
    console.log("prev", this.state.i);

    if (this.state.i !== 0 && this.state.i < this.props.slides.length) {
      let temp = this.state.i - 1;
      this.setState({
        i: this.state.i - 1,
        disableNext: false,
      });
      console.log(this.props.slides[this.state.i]);
      if (temp === 0) {
        this.setState({
          disablePrev: true,
          disableRestart: true,
        });
      }
    } else {
      this.setState({
        disablePrev: true,
        disableRestart: true,
      });
    }
  };

  handleNext = () => {
    console.log("next", this.state.i);
    if (this.state.i < this.props.slides.length - 1) {
      console.log(this.props.slides[this.state.i]);
      let temp = this.state.i + 1;
      this.setState({
        i: this.state.i + 1,
        disablePrev: false,
        disableRestart: false,
      });
      //   if (temp === 1) {
      //   this.setState({
      //     disableRestart: true,
      //   });
      // }
      if (temp === this.props.slides.length - 1) {
        this.setState({
          disableNext: true,
        });
      }
    } else {
      this.setState({
        disableNext: true,
      });
    }
  };
  render() {
    return (
      <div>
        <div id="navigation" className="text-center">
          <button
            disabled={this.state.disableRestart}
            onClick={this.handleRestart}
            data-testid="button-restart"
            className="small outlined"
          >
            Restart
          </button>
          <button
            disabled={this.state.disablePrev}
            onClick={this.handlePrev}
            data-testid="button-prev"
            className="small"
          >
            Prev
          </button>
          <button
            disabled={this.state.disableNext}
            onClick={this.handleNext}
            data-testid="button-next"
            className="small"
          >
            Next
          </button>
        </div>

        <div id="slide" className="card text-center">
          <h1 data-testid="title">{this.props.slides[this.state.i].title}</h1>
          <p data-testid="text">{this.props.slides[this.state.i].text}</p>
        </div>
      </div>
    );
  }
}
