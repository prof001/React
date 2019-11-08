class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Computers can help you make decision fast";
    const options = ["Thing one", "Thing two", "Thing three"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("Handle Pick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
    //alert("Handle Remove All");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          <div>
            {this.props.options.map(option => (
              <Option key={option} optionText={option} />
            ))}
          </div>
        }
      </div>
    );
  }
}

class AddOption extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
    let value = e.target.elements.option.value.trim();

    if (value) {
      e.target.elements.option.value = "";
      alert(value);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
