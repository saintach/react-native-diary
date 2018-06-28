import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import randomId from '../utils/random-id';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center'},
  input: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  button: {
    marginTop: 40
  }
});

class AddEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.handleSaveButtonPress = this.handleSaveButtonPress.bind(this);
  }
  _storeData = async (text) => {
    const id = randomId(6, 'aA0');
    try {
      await AsyncStorage.setItem(id, text);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }
  handleSaveButtonPress() {
    this._storeData(this.state.text);
    this.input.blur();
    this.setState({
      text: ''
    });
  }
  render() {
    return (
      <View style={styles.container}>

        <FormLabel>What are you thinking?</FormLabel>
        <FormInput
          multiline
          inputStyle={styles.input}
          ref={input => this.input = input}
          onChangeText={(text) => this.setState({text})}
        />

        <Button
          title='SAVE'
          backgroundColor='tomato'
          style={styles.button}
          onPress={this.handleSaveButtonPress}
        />
      </View>
    );
  }
}

export default AddEntry;
