class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToogleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToogleVisibility}>
          {this.state.visibility === false ? "Show Details" : "Hide Details"}
        </button>
        {this.state.visibility === true && (
          <div>
            <p>This are the details</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
