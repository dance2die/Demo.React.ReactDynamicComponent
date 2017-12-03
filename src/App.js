import React, { Component } from "react";
import shortid from "shortid";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: []
    };
  }

  addComponent = async type => {
    console.log(`Loading ${type} component...`);
    
    import(`./components/${type}.js`)
      .then(component =>
        this.setState({
          components: this.state.components.concat(component.default)
        })
      )
      .catch(error => {
        console.error(`"${type}" not yet supported`);
      });
  };

  async componentDidMount() {
    const { events } = this.props;
    events.map(async type => await this.addComponent(type));
  }

  render() {
    const { components } = this.state;
    if (components.length === 0) return <div>Loading...</div>;

    const componentsElements = components.map(Component => (
      <Component key={shortid.generate()} />
    ));

    return <div className="App">{componentsElements}</div>;
  }
}

export default App;