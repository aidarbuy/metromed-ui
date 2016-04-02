import React from 'react'

React.createClass({
  getInitialState: function() {
    return {width: 0};
  },
  componentDidMount: function() {
    TweenLite.to(this, 1, {state: {width: 100}});
  },
  render: function() {
    return <div style={{width: this.state.width}}>Hello World!</div>
  }
});
