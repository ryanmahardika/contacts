import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ContactHomeScreen from '../screen/ContactHomeScreen';
import ContactDetailScreen from '../screen/ContactDetailScreen';

const MenuStack = createStackNavigator({
  ContactHome: ContactHomeScreen,
  ContactDetail: ContactDetailScreen,
});

const AppContainer = createAppContainer(MenuStack);

class AppWithNavigationState extends Component {
  render() {
    return <AppContainer />;
  }
}

export default AppWithNavigationState;
