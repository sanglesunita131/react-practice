import React from 'react';
export default class ProfileInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Welcome to Class Component</h1>
        {this.props.name}
        {this.props.dob}
        {this.props.gender}
      </div>
    );
  }
}
