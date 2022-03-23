import React, { Component } from "react";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      slideData: [],
      disableNext: false,
      disablePrev: true,
    };
  }

  componentDidMount() {}

  handleRestart = () => {
    this.setState({
      i: 0,
      disablePrev: true,
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
        });
      }
    } else {
      this.setState({
        disablePrev: true,
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
      });
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
      <div className="m-4 container d-flex flex-column justify-content-center align-items-center ">
        <div className=" m-4 container">
          <button onClick={this.handleRestart} className="m-2 btn btn-primary">
            Restart
          </button>
          <button
            disabled={this.state.disablePrev}
            onClick={this.handlePrev}
            className="m-2 btn btn-primary"
          >
            Prev
          </button>
          <button
            disabled={this.state.disableNext}
            onClick={this.handleNext}
            className="m-2 btn btn-primary"
          >
            Next
          </button>
        </div>
        <div
          className="mt-6 d-flex justify-content-between align-items-center"
          style={{ width: "70%", backgroundColor: "#0e0e0" }}
        >
          <div
            className="m-auto card"
            style={{ width: "400", height: "500", border: "1px solid #000" }}
          >
            <div className="card-body">
              <h1 className="card-title">
                {this.props.slides[this.state.i].title}
              </h1>
              <p className="card-text">
                {this.props.slides[this.state.i].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
