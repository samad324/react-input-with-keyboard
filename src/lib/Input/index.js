import React from "react";
import { Input, Popover, Icon } from "antd";
import Proptypes from "prop-types";

import "antd/dist/antd.css";

import Keyboard from "../Keyboard";

import "./styles.css";

const TextInput = props => (
  <div className={`Inpwrapper ${props.containerClassName}`}>
    {props.text && (
      <h2 className={`leftTextStyle ${props.textStyles}`}>{props.text}</h2>
    )}
    <Input
      className={`inpWithText ${props.error ? "borderRed" : ""} ${
        props.inputClassName
      }`}
      placeholder={props.placeholder}
      value={props.value}
      size={props.size}
      ref={props.ref}
      onFocus={e => props.onFocus && props.onFocus(e)}
      onBlur={e => props.onBlur && props.onBlur(e)}
      id={props.id || ""}
      type={props.type || "input"}
      disabled={props.disabled}
      onChange={event => props.onChange && props.onChange(event.target.value)}
      suffix={
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
          transitionName={!props.noTransition ? undefined : "none"}
          placement={props.placement || "topRight"}
        >
          {props.disabled ||
          (props.hideOnSmallDevice && window.innerWidth < 768) ? null : (
            <button
              className="inputBtnKeyboard cursor-pointer"
              id={props.iconId || ""}
            >
              {props.keyboardIcon ? (
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
            </button>
          )}
        </Popover>
      }
    />
  </div>
);

TextInput.propTypes = {
  containerClassName: Proptypes.string,
  text: Proptypes.string,
  textStyles: Proptypes.string,
  error: Proptypes.bool,
  inputClassName: Proptypes.string,
  placeholder: Proptypes.string,
  value: Proptypes.string,
  size: Proptypes.string,
  onFocus: Proptypes.func,
  onBlur: Proptypes.func,
  id: Proptypes.string,
  type: Proptypes.string,
  disabled: Proptypes.bool,
  onChange: Proptypes.func,
  fullKeyboard: Proptypes.bool,
  placement: Proptypes.string,
  hideOnSmallDevice: Proptypes.bool,
  keyboardIcon: Proptypes.node,
  keyboardIconColor: Proptypes.string,
  iconClassName: Proptypes.string,
  keyboardKeyClassName: Proptypes.string,
  keyboardKeyContainerClassName: Proptypes.string
};

export default TextInput;
