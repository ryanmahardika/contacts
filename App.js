import React, { Component } from 'react';
import { View } from 'react-native';
import AppWithNavigationState from './src/navigation/Router.';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppWithNavigationState />
      </View>
    );
  }
}

export default App;
