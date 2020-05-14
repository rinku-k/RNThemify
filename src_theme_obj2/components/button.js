/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  button: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
};

export const GhostButton = ({ color, text, onClick, style }) => (
  <TouchableOpacity
    onPress={onClick}
    style={[styles.button, { borderColor: color }, style]}
  >
    <Text style={[styles.buttonText, { color }]}>{text}</Text>
  </TouchableOpacity>
);

export const PrimaryButton = ({ color, text, onClick, style }) => (
  <TouchableOpacity
    onPress={onClick}
    style={[styles.button, { backgroundColor: color, borderColor: color, flex: 0 }, style]}
  >
    <Text style={[styles.buttonText, { color: '#ffff' }]}>{text}</Text>
  </TouchableOpacity>
);

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  color: 'red',
  onClick: () => {},
  style: {},
  isLoading: false,
};

GhostButton.propTypes = {
  ...PrimaryButton.propTypes,
};

GhostButton.defaultProps = {
  ...PrimaryButton.defaultProps,
};
