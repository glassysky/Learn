import React, { Component } from 'react';
import style from './Button.component.css';

export default class Button extends Component {
  render() {
    return (
      <div className="button-wrap">
        <div className={style.button}>
          {this.props.value}
        </div>
      </div>
    )
  }
}
