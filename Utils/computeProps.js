var React = require('react');

var ReactNativePropRegistry = require(
  'react-native/Libraries/ReactNative/ReactNativePropRegistry');

var _ = require('lodash');

module.exports = function(incomingProps, defaultProps) {


  // External props has a higher precedence
  var computedProps = {};

  incomingProps = _.clone(incomingProps);
  delete incomingProps.children;

  if (incomingProps)
    _.merge(computedProps, defaultProps, incomingProps);
  else
    computedProps = defaultProps;

  // Pass the merged Style Object instead
  if (incomingProps.style) {

    if (typeof incomingProps.style == 'number') {
      var incomingPropsStyle = ReactNativePropRegistry.getByID(incomingProps.style);
      computedProps.style = {};
    } else {
      var incomingPropsStyle = incomingProps.style;
    }

    _.merge(computedProps.style, defaultProps.style, incomingPropsStyle);

  }

  return computedProps;


}
