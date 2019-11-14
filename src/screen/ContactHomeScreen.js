import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { ListItem } from 'react-native-elements';

class ContactHome extends Component {
  constructor(props) {
    super(props);
    this.state= {
      contacts: [],
    };
  }

  static navigationOptions = (props) => ({
    title: 'My Contacts List',
    headerStyle: {
       backgroundColor: 'green',
    },
    headerTitleStyle: {
      flex: 1,
      color: '#FFFF',
    },
  })

  componentDidMount() {
    axios.get(`https://simple-contact-crud.herokuapp.com/contact`).then(res => {
      const results = res.data.data;
      console.log(results);
      this.setState({ contacts: results });
    })
  }

  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate("ContactDetail", { contactId: item.id })
      }
    >
      <ListItem
        title={item.firstName + " " + item.lastName}
        leftAvatar={{ source: { uri: item.photo } }}
        bottomDivider
      />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F2F4F9' }}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.contacts}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default ContactHome;