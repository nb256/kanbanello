import React from 'react';

export default class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.label.id,
      text: this.props.label.text,
      color: this.props.label.color
    };
  }

  render() {
    return (
      <label className={'w3-tag w3-' + this.state.color}>{this.state.text}</label>
    );
  }

}
