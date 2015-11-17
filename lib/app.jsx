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

   changeState : function() {
     this.setState({value: this.state.value == "X" ? "O" : "X"});
   },

  'render': function onRender () {
    return (
      <button onClick={this.changeState} style={bStyle}>{this.state.value}</button>
    );
  }
});

var bStyle = {
  height: '100px',
  width: '100px'
};

React.render(<Box initialValue="X" />, document.body);
