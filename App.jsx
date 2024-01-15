import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Calculator from './src/screens/Calculator';

export class App extends Component {
  render() {
    return (
      <View>
        <Calculator />
      </View>
    );
  }
}

export default App;
