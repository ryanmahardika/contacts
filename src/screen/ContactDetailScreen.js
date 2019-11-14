import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class ContactDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactId: this.props.navigation.state.params.contactId,
      contact: {},
    };
  }

  componentDidMount() {
    axios.get(`https://simple-contact-crud.herokuapp.com/contact/${this.state.contactId}`).then(res => {
        const resultData = res.data.data;
        console.log(resultData);
        this.setState({ contact: resultData });
    })
  }

  static navigationOptions = (props) => ({
    title: 'Contact Detail',
    headerStyle: {
       backgroundColor: 'green',
    },
    headerTitleStyle: {
      flex: 1,
      color: '#FFFF',
    },
    headerTintColor: 'white',
  })

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F2F4F9' }}>
        <Text>First Name: {this.state.contact.firstName}</Text>
        <Text>Last Name: {this.state.contact.lastName}</Text>
        <Text>Age: {this.state.contact.age}</Text>
        <Text>Photo: {this.state.contact.photo}</Text>
      </View>
    );
  }
}

export default ContactDetail;