import React, { Component } from "react";
import { TextInput, Textarea } from "react-input-with-keyboard";
import "./index.css";

// import "antd/dist/antd.css";
import "react-input-with-keyboard/dist/index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1Val: "",
      input2Val: "",
      input3Val: ""
    };
  }
  onChangeTextField = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { input1Val, input2Val, input3Val } = this.state;
    return (
      <div className="App">
        abc
        <TextInput
          text={"Input with numaric keyboard"}
          placeholder="Please Scan Your Badge..."
          value={input2Val}
          fullKeyboard={false}
          type="number"
          keyboardKeyContainerClassName="keyContainerClass"
          containerClassName="inpContainer"
          onChange={text => this.onChangeTextField("input2Val", text)}
        />
        <Textarea
          text={"Textarea with keyboard"}
          value={input3Val}
          fullKeyboard={true}
          onChange={value => this.onChangeTextField("input3Val", value)}
          containerClassName="inpContainer"
        />
      </div>
    );
  }
}

export default App;
