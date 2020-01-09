import React, { Component } from "react";
import "./styles.css";
import backspaceIcon from "../icon/backspace.png";

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const numaricKeys = [1, 2, 3, "*", 4, 5, 6, "+", 7, 8, 9, ".", "/", 0, "-"];
const letters = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m"
];

// const characters = [
//   "!",
//   "@",
//   "#",
//   "$",
//   "%",
//   "^",
//   "&",
//   "*",
//   "(",
//   ")",
//   "-",
//   "_",
//   "+",
//   "=",
//   "{",
//   "}",
//   "[",
//   "]",
//   "|",
//   "\\",
//   ";",
//   ":",
//   '"',
//   "'",
//   "<",
//   ">",
//   ",",
//   ".",
//   "?",
//   "/",
//   "~",
//   "`"
// ];
const characters = [
  {
    key1: "!",
    key2: ""
  },
  {
    key1: "@",
    key2: ""
  },
  {
    key1: "#",
    key2: ""
  },
  {
    key1: "$",
    key2: ""
  },
  {
    key1: "%",
    key2: ""
  },
  {
    key1: "^",
    key2: ""
  },
  {
    key1: "&",
    key2: ""
  },
  {
    key1: "*",
    key2: ""
  },
  {
    key1: "(",
    key2: ""
  },
  {
    key1: ")",
    key2: ""
  },
  {
    key1: "-",
    key2: "_"
  },
  {
    key1: "+",
    key2: "="
  },
  {
    key1: "`",
    key2: "~"
  },
  {
    key1: "{",
    key2: "["
  },
  {
    key1: "}",
    key2: "]"
  },
  {
    key1: ";",
    key2: ":"
  },
  {
    key1: "'",
    key2: '"'
  },
  {
    key1: ",",
    key2: "<"
  },
  {
    key1: ".",
    key2: ">"
  },
  {
    key1: "?",
    key2: "/"
  },
  {
    key1: "\\",
    key2: "|"
  }
];

const specialKeys = ["Shift", "Space", "?@"];

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      ShiftMode: false,
      charactersMode: false
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const { value } = nextProps;
    return {
      value
    };
  }

  onKeyDown = (key) => {
    const { onKeyDown } = this.props;
    let { value } = this.state;
    value = value ? value + key : "" + key;
    onKeyDown && onKeyDown(value);
  };

  onBackSpace = () => {
    const { onKeyDown } = this.props;
    let { value } = this.state;
    value = value.split("");
    if (value.length) value.length = value.length - 1;
    value = value.join("");
    onKeyDown && onKeyDown(value);
  };
  onSpecialKeyDown = (key) => {
    const { ShiftMode, charactersMode } = this.state;
    switch (key) {
      case "Shift":
        return this.setState({ ShiftMode: !ShiftMode });
      case "Space":
        return this.onKeyDown(" ");
      case "?@":
        return this.setState({ charactersMode: !charactersMode });
      default:
        return;
    }
  };

  numaricKeyboard = props => (
    <div className="keyBoardMainContainer numaricKeyboardContainer">
      {numaricKeys.map(item => (
        <div
          key={item}
          className={`keyContainer ripple cursor-pointer numaricKeys ${props.keyboardKeyContainerClassName ||
            ""}`}
          onClick={() => this.onKeyDown(item)}
        >
          <p className={`keytext ${props.keyboardKeyClassName || ""}`}>
            {item}
          </p>
        </div>
      ))}
      <div
        className={`keyContainer ripple cursor-pointer numaricKeys ${props.keyboardKeyContainerClassName ||
          ""}`}
        onClick={() => this.onBackSpace("backSpace")}
      >
        <img src={backspaceIcon} alt="backspace" className="backspaceIconImg" />
      </div>
    </div>
  );

  render() {
    const { ShiftMode, charactersMode } = this.state;
    const {
      fullKeyboard = true,
      keyboardKeyClassName,
      keyboardKeyContainerClassName
    } = this.props;
    console.log("TCL: Keyboard -> render -> this.props;", this.props);

    if (!fullKeyboard) {
      return (
        <this.numaricKeyboard
          keyboardKeyClassName={keyboardKeyClassName}
          keyboardKeyContainerClassName={keyboardKeyContainerClassName}
        />
      );
    }
    return (
      <div className="keyBoardMainContainer">
        {keys.map(item => (
          <div
            key={item}
            className={`keyContainer ripple cursor-pointer ${keyboardKeyContainerClassName ||
              ""}`}
            onClick={() => this.onKeyDown(item)}
          >
            <p className={`keytext ${keyboardKeyClassName || ""}`}>{item}</p>
          </div>
        ))}
        <div
          className={`keyContainer ripple cursor-pointer ${keyboardKeyContainerClassName ||
            ""}`}
          onClick={() => this.onBackSpace("backSpace")}
        >
          <img
            src={backspaceIcon}
            alt={Math.random().toString()}
            className="backspaceIconImg"
          />
        </div>
        {!charactersMode
          ? letters.map(item => (
              <div
                key={item}
                className={`keyContainer ripple cursor-pointer ${keyboardKeyContainerClassName ||
                  ""}`}
                onClick={() =>
                  this.onKeyDown(ShiftMode ? item.toUpperCase() : item)
                }
              >
                <p className={`keytext ${keyboardKeyClassName || ""}`}>
                  {ShiftMode ? item.toUpperCase() : item}
                </p>
              </div>
            ))
          : characters.map(item => (
              <div
                key={item.key1}
                className={`keyContainer ripple cursor-pointer ${keyboardKeyContainerClassName ||
                  ""}`}
                onClick={() =>
                  this.onKeyDown(ShiftMode ? item.key2 : item.key1)
                }
              >
                {item.key2 ? (
                  <p
                    className={`keytext ${keyboardKeyClassName ||
                      ""} ${!ShiftMode && "unshiftText"}`}
                  >
                    {item.key2}
                  </p>
                ) : null}
                <p
                  className={`keytext  ${keyboardKeyClassName ||
                    ""} ${item.key2 && ShiftMode && "unshiftText"}`}
                >
                  {item.key1}
                </p>
              </div>
            ))}
        {specialKeys.map(item => (
          <div
            key={item}
            className={`keyContainer ripple cursor-pointer  ${keyboardKeyContainerClassName ||
              ""} ${item == "Space" && "grow1"}`}
            onClick={() => this.onSpecialKeyDown(item)}
          >
            <p className={`keytext  ${keyboardKeyClassName || ""} px-6`}>
              {item}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
