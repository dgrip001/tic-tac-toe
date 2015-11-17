'use strict';

var React = require('react');

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
   getInitialState: function() {
    return {value: this.props.initialValue};
   },

   componentWillMount: function() {
    var currentState = this;
    this.timer = setInterval(function(){
      currentState.setState({value: currentState.state.value == "X" ? "O" : "X"});
    }, 300);
  },

  'render': function onRender () {
    return (
      <button onLoad={this.updateState} style={bStyle}>{this.state.value}</button>
    );
  }
});

var bStyle = {
  height: '100px',
  width: '100px'
};

React.render(<Box initialValue="X" />, document.body);
