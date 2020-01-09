import React from "react";
import { Input, Popover, Icon } from "antd";
import PropType, { string, func, bool } from "prop-types";

import "antd/dist/antd.css";

import Keyboard from "../Keyboard";
import "./styles.css";

const { TextArea } = Input;

const InputWithTextarea = props => {
  return (
    <div className={`Inpwrapper ${props.containerClassName}`}>
      <div className="inpTextAndPopOver ">
        <h2 className="leftTextStyle m-0">{props.text}</h2>
        <Popover
          content={
            <Keyboard
              onKeyDown={props.onChange}
              value={props.value}
              fullKeyboard={props.fullKeyboard}
              keyboardKeyClassName={props.keyboardKeyClassName}
              keyboardKeyContainerClassName={
                props.keyboardKeyContainerClassName
              }
            />
          }
          trigger="click"
          placement="topRight"
          arrowPointAtCenter={true}
        >
          {props.disabled ||
          (props.hideOnSmallDevice &&
            window.innerWidth < 768) ? null : props.keyboardIcon ? (
            <props.keyboardIcon />
          ) : (
            <Icon
              type="edit"
              style={{
                color: props.keyboardIconColor
                  ? props.keyboardIconColor
                  : "rgba(0,0,0,.45)"
              }}
              theme="filled"
              style={{ fontSize: "20px" }}
              className={`${props.iconClassName}`}
            />
          )}
        </Popover>
      </div>
      <TextArea
        value={props.value}
        className={` ${props.error ? "borderRed" : ""} ${props.inputClassName}`}
        onChange={e => props.onChange && props.onChange(e.target.value)}
        autosize={{ minRows: props.minRows || 3, maxRows: props.maxRows || 3 }}
        disabled={props.disabled}
      />
    </div>
  );
};

InputWithTextarea.prototype = {
  containerClassName: string,
  inputClassName: string,
  text: string,
  value: string,
  error: PropType.bool,
  onChange: func,
  disabled: bool,
  minRows: PropType.number,
  maxRows: PropType.number,
  fullKeyboard: bool,
  hideOnSmallDevice: PropType.bool,
  keyboardIcon: PropType.node,
  keyboardIconColor: PropType.string,
  iconClassName: PropType.string,
  keyboardKeyClassName: PropType.string,
  keyboardKeyContainerClassName: PropType.string
};

export default InputWithTextarea;
